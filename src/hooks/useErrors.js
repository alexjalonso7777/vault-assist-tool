import { I18n } from '../lib/i18n/provider';
import { Toaster } from '../components/Toaster';
import { useEffect, useRef } from 'react';
import { useWatch } from 'react-hook-form';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import set from 'lodash/set';
import unset from 'lodash/unset';

export const useErrors = (
  { clearErrors, control, formState: { errors: formErrors }, setError },
  errors = {},
  { errorMappings = {}, showGenericError = true } = {}
) => {
  const errorsRef = useRef();
  const previousRef = useRef();
  const previousError = useRef();
  const values = useWatch({ control });

  useEffect(() => {
    const previous = previousRef.current;

    previousRef.current = values;

    if (!previous || !errorsRef.current) {
      return;
    }

    // Toast errors
    if (formErrors) {
      Object.entries(formErrors).forEach(([, error]) => {
        const previousErr = previousError.current;

        if (error.message !== previousErr) {
          Toaster.showError(error.message);
          previousError.current = error.message;
        }
      });
    }

    Object.entries(errorsRef.current).forEach(([field, error]) => {
      if ((!!error?.[0] || error) && field in formErrors && previous[field] !== values[field]) {
        clearErrors(field);
      }
    });
  }, [formErrors, values]);

  useEffect(() => {
    try {
      errorsRef.current = { ...errors };

      if (!isEmpty(errors)) {
        Object.entries(errorMappings).forEach(([errorKey, fields]) => {
          // eslint-disable-next-line no-unused-vars
          for (const field of fields) {
            const error = get(errorsRef.current, field);

            if (error) {
              unset(errorsRef.current, field);
              set(errorsRef.current, errorKey, error);

              break;
            }
          }
        });
      }

      if (isEmpty(errorsRef.current)) {
        return;
      }

      if (!Object.keys(errorsRef.current).some((field) => field in previousRef.current) && showGenericError) {
        Toaster.showError(I18n.t('messages.error.default'));

        return;
      }

      Object.entries(errorsRef.current).forEach(([field, value]) => {
        const error = value?.[0] || value;

        if (!!error && field in previousRef.current) {
          setError(field, error, { shouldFocus: true });
        }
      });
    } catch (error) {} // eslint-disable-line no-empty
  }, [errors]);
};
