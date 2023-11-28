import { I18n } from '../../lib/i18n/provider';
import { getCurrency } from '../../lib/vault';
import { isValidAddress } from '../validations/isValidAddress';
import { yup } from '../index';

export const addressSchema = selectedNetwork =>
  yup.object().shape({
    address: yup
      .string()
      .required(I18n.t('access.fields.address.errors.required', { currency: getCurrency(selectedNetwork) }))
      .test(
        'validation',
        I18n.t('access.fields.address.errors.invalid', { currency: getCurrency(selectedNetwork) }),
        val => isValidAddress(selectedNetwork, val)
      )
  });
