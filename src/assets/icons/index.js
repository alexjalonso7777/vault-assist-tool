const defaultSize = {
  size: 24,
};

export default {
  activity: {
    size: 32,
    source: (
      <path d="m16 3c7.1792847 0 13 5.82071525 13 13 0 7.1792847-5.8207153 13-13 13-7.17928475 0-13-5.8207153-13-13 0-7.17928475 5.82071525-13 13-13zm0 2c-6.07471525 0-11 4.92528475-11 11 0 6.0747153 4.92528475 11 11 11 3.860785 0 7.2572878-1.9894395 9.2201947-4.9990049l-12.2201947-.0009951v-2l13.2496917.0007908c.4844186-1.2399713.7503083-2.5893553.7503083-4.0007908 0-1.4110559-.2657467-2.7600936-.7499174-3.9997903l-13.2500826-.0002097v-2h12.2208425c-1.9628073-3.0101227-5.3596327-5-9.2208425-5zm-5 15v2h-2v-2zm12.889-5v2h-10.889v-2zm-12.889 0v2h-2v-2zm0-5v2h-2v-2z" />
    ),
  },
  activityActive: {
    size: 32,
    source: (
      <path d="M16,3 C21.0153648,3 25.3677128,5.84065868 27.5357687,10.0007008 L13,10 L13,12 L28.3728713,11.9998735 C28.78003,13.2600533 29,14.6043559 29,16 C29,17.396013 28.7799137,18.7406574 28.3725484,20.0011259 L13,20 L13,22 L27.5352429,22.0003079 C25.3670092,26.1598005 21.0149594,29 16,29 C8.82071525,29 3,23.1792847 3,16 C3,8.82071525 8.82071525,3 16,3 Z M11,20 L9,20 L9,22 L11,22 L11,20 Z M24,15 L13,15 L13,17 L24,17 L24,15 Z M11,15 L9,15 L9,17 L11,17 L11,15 Z M11,10 L9,10 L9,12 L11,12 L11,10 Z" />
    ),
  },
  add: {
    size: 16,
    source: <path d="m9 2v4.999l5 .001v2l-5-.001v5.001h-2v-5.001l-5 .001v-2l5-.001v-4.999z" />,
  },
  alertError: {
    size: 20,
    source: (
      <path d="m10.000062 12.64c.7527273 0 1.3636363.6109091 1.3636363 1.3636364 0 .7527272-.610909 1.3636363-1.3636363 1.3636363-.75272729 0-1.36363638-.6109091-1.36363638-1.3636363 0-.7527273.61090909-1.3636364 1.36363638-1.3636364zm-1.000062-1.64v-5h2v5z" />
    ),
  },
  alertInfo: {
    size: 20,
    source: (
      <path d="m11 9v7h-1c-.553 0-1-.447-1-1v-7h1c.553 0 1 .447 1 1zm-1-5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
    ),
  },
  alertPending: {
    size: 20,
    source: (
      <path d="M12.2334 13.6475L9.5864 11.0005C9.2134 10.6275 9.0004 10.1125 9.0004 9.5855V3.0755H11.0004V9.5855L13.6474 12.2335L12.2334 13.6475Z" />
    ),
  },
  alertSuccess: {
    size: 20,
    source: (
      <path d="m9.707 13.707 6-6-1.414-1.414-5.293 5.293-2.293-2.293-1.414 1.414 3 3c.195.195.451.293.707.293s.512-.098.707-.293" />
    ),
  },
  alertWarning: {
    size: 20,
    source: (
      <path d="m9 11v-6h2v6zm1.000062 1.64c.7527273 0 1.3636363.6109091 1.3636363 1.3636364 0 .7527272-.610909 1.3636363-1.3636363 1.3636363-.75272729 0-1.36363638-.6109091-1.36363638-1.3636363 0-.7527273.61090909-1.3636364 1.36363638-1.3636364z" />
    ),
  },
  back: {
    ...defaultSize,
    source: (
      <path
        d="M20 13H6.414L12 18.586 10.586 20l-7.293-7.293a.999.999 0 010-1.414L10.586 4 12 5.414 6.414 11H20v2z"
        id="a"
      />
    ),
  },
  bannersExpand: {
    size: 24,
    source: (
      <path d="m17.2927932 8.29289322 1.4142136 1.41421356-6 6.00000002c-.360484.3604839-.927715.3882135-1.3200062.0831886l-.0942074-.0831886-5.99999998-6.00000002 1.41421356-1.41421356 5.29299322 5.29210678z" />
    ),
  },
  close: {
    ...defaultSize,
    source: (
      <path d="M19.707 5.707l-1.414-1.414L12 10.586 5.707 4.293 4.293 5.707 10.586 12l-6.293 6.293 1.414 1.414L12 13.414l6.293 6.293 1.414-1.414L13.414 12z" />
    ),
  },
  copy: {
    ...defaultSize,
    source: (
      <path d="m20 20v-11c0-.553-.447-1-1-1h-2v2h1v9h-7v-1h-2v2c0 .553.447 1 1 1h9c.553 0 1-.447 1-1zm-14-6h7v-9h-7zm8 2h-9c-.553 0-1-.447-1-1v-11c0-.553.447-1 1-1h9c.553 0 1 .447 1 1v11c0 .553-.447 1-1 1z" />
    ),
  },
  dismiss: {
    size: 16,
    source: (
      <path d="m12.707 4.707-1.414-1.414-3.293 3.293-3.293-3.293-1.414 1.414 3.293 3.293-3.293 3.293 1.414 1.414 3.293-3.293 3.293 3.293 1.414-1.414-3.293-3.293z" />
    ),
  },
  down: {
    size: 16,
    source: (
      <path d="m4.50260994 6h6.99478016c.2761423 0 .5.22385763.5.5 0 .13260824-.0526785.2597852-.1464466.35355339l-3.49739011 3.49739011c-.19526215.1952621-.51184463.1952621-.70710678 0l-3.49739006-3.49739011c-.19526215-.19526215-.19526215-.51184463 0-.70710678.09376819-.09376819.22094514-.14644661.35355339-.14644661z" />
    ),
  },
  expand: {
    size: 16,
    source: (
      <path d="m12.5996 5.2002-4-3c-.355-.268-.844-.268-1.199 0l-4 3 1.199 1.6 3.4-2.55 3.401 2.55zm-4.6 8.8c-.211 0-.421-.067-.599-.2l-4-3 1.199-1.6 3.4 2.55 3.401-2.55 1.199 1.6-4 3c-.178.133-.389.2-.6.2z" />
    ),
  },
  eye: {
    ...defaultSize,
    source: (
      <path d="M22.0254 13.7686c-.4.555-.837 1.148-1.37 1.777-.117.14-.241.281-.368.422-.013.014-.026.027-.037.04l-1.416-1.416c.099-.112.199-.225.295-.338.529-.624.978-1.246 1.276-1.658l.001-.001c.262-.361.262-.828 0-1.189-1.369-1.89-3.916-5.406-8.406-5.406-.541 0-1.069.07-1.586.171l-1.642-1.64c.175-.06.35-.119.528-.169.87-.24 1.777-.362 2.7-.362 5.511 0 8.56 4.209 10.025 6.232a3.006 3.006 0 0 1 0 3.537zm-11.951-2.28l2.437 2.437c-.166.044-.336.074-.511.074-1.103 0-2-.897-2-2 0-.175.03-.345.074-.511zm4.089 6.221c-.693.193-1.421.29-2.163.29-4.49 0-7.037-3.516-8.407-5.405-.261-.361-.261-.828 0-1.189.397-.547.938-1.294 1.606-2.038.463-.515.936-.946 1.416-1.338l1.949 1.949c-.359.608-.564 1.297-.564 2.021 0 2.206 1.794 4 4 4 .724 0 1.413-.205 2.021-.564l1.666 1.666c-.498.256-1.006.465-1.524.608zm-10.87-13.003l1.904 1.905c-.505.424-1.002.882-1.484 1.419-.741.822-1.318 1.619-1.739 2.201a3.0093 3.0093 0 0 0 0 3.537c1.466 2.022 4.516 6.231 10.026 6.231.923 0 1.831-.122 2.698-.362.848-.236 1.675-.593 2.467-1.058l2.128 2.127 1.414-1.414-16-16-1.414 1.414z" />
    ),
  },
  eyeRevealed: {
    ...defaultSize,
    source: (
      <path d="M11.9999 5.9999c-.743 0-1.472.098-2.166.289-1.673.463-3.189 1.47-4.634 3.077-.669.745-1.211 1.492-1.606 2.039-.262.362-.262.828 0 1.19 1.369 1.889 3.916 5.405 8.406 5.405.742 0 1.471-.098 2.163-.29.889-.246 1.754-.659 2.571-1.227.711-.494 1.387-1.099 2.066-1.853.112-.124.222-.251.329-.376.529-.624.978-1.246 1.276-1.658l.001-.001c.262-.362.262-.828 0-1.19-1.369-1.889-3.916-5.405-8.406-5.405m0 14c-5.512 0-8.561-4.209-10.025-6.231a3.0076 3.0076 0 0 1 0-3.538c.421-.582.998-1.378 1.737-2.201 1.708-1.901 3.536-3.101 5.589-3.669.868-.24 1.776-.361 2.699-.361 5.512 0 8.561 4.209 10.025 6.231.767 1.058.767 2.48 0 3.538-.4.554-.837 1.148-1.37 1.777-.117.14-.241.28-.368.422-.785.87-1.573 1.576-2.412 2.158-1.002.696-2.07 1.204-3.177 1.512-.867.24-1.775.362-2.698.362m0-10c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 6c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4" />
    ),
  },
  more: {
    size: 32,
    source: (
      <path d="m16 3.0001c7.1796172 0 13 5.82004773 13 13 0 7.1792847-5.8207153 13-13 13-7.17928475 0-13-5.8207153-13-13 0-7.17995227 5.82038275-13 13-13zm0 2c-6.07507352 0-11 4.924643-11 11 0 6.0747153 4.92528475 11 11 11 6.0747153 0 11-4.9252847 11-11 0-6.075357-4.9249265-11-11-11zm-6 9c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm6 0c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm6 0c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
    ),
  },
  moreActive: {
    size: 32,
    source: (
      <path d="M16,3.0001 C23.1796172,3.0001 29,8.82014773 29,16.0001 C29,23.1793847 23.1792847,29.0001 16,29.0001 C8.82071525,29.0001 3,23.1793847 3,16.0001 C3,8.82014773 8.82038275,3.0001 16,3.0001 Z M10,14.0001 C8.897,14.0001 8,14.8971 8,16.0001 C8,17.1031 8.897,18.0001 10,18.0001 C11.103,18.0001 12,17.1031 12,16.0001 C12,14.8971 11.103,14.0001 10,14.0001 Z M16,14.0001 C14.897,14.0001 14,14.8971 14,16.0001 C14,17.1031 14.897,18.0001 16,18.0001 C17.103,18.0001 18,17.1031 18,16.0001 C18,14.8971 17.103,14.0001 16,14.0001 Z M22,14.0001 C20.897,14.0001 20,14.8971 20,16.0001 C20,17.1031 20.897,18.0001 22,18.0001 C23.103,18.0001 24,17.1031 24,16.0001 C24,14.8971 23.103,14.0001 22,14.0001 Z" />
    ),
  },
  questionMarkCircle: {
    size: 20,
    source: (
      <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM9.99 13C10.8184 13 11.49 13.6716 11.49 14.5C11.49 15.3284 10.8184 16 9.99 16C9.16157 16 8.49 15.3284 8.49 14.5C8.49 13.6716 9.16157 13 9.99 13ZM9.995 4.0421C11.8468 4.0421 13.3901 5.43298 13.5961 7.20109L13.613 7.39193C13.7733 8.73972 13.0872 10.0396 11.8506 10.6938L11.6703 10.7828C11.293 10.9286 11.0358 11.3295 10.9955 11.854L10.99 12H8.99C8.99 10.6302 9.70565 9.39765 10.8916 8.94176C11.3955 8.70956 11.6925 8.17909 11.6219 7.57163C11.5688 6.71206 10.8562 6.0421 9.995 6.0421C9.16186 6.0421 8.45297 6.65235 8.37677 7.3804L8.37 7.51H6.37C6.37 5.58324 8.04337 4.0421 9.995 4.0421Z" />
    ),
  },
  search: {
    ...defaultSize,
    source: (
      <path d="M11 14.375c-2.206 0-4-1.7193-4-3.8333 0-2.1141 1.794-3.8334 4-3.8334s4 1.7193 4 3.8334c0 2.114-1.794 3.8333-4 3.8333zm8.776 3.222l-3.891-3.729c.699-.94 1.115-2.0862 1.115-3.3263 0-3.1712-2.691-5.75-6-5.75s-6 2.5788-6 5.75c0 3.171 2.691 5.75 6 5.75 1.294 0 2.49-.3987 3.471-1.0686l3.891 3.7289 1.414-1.355z" />
    ),
  },
  select: {
    ...defaultSize,
    source: (
      <path
        d="m9 8.4142 1.4142-1.4142 4.7071 4.7071c.3905.3905.3905 1.0237 0 1.4142l-4.707 4.7071-1.4143-1.4142 4-4z"
        transform="matrix(0 1 -1 0 24.6213 .2071)"
      />
    ),
  },
  send: {
    ...defaultSize,
    source: (
      <path d="M2.123 9.2344c.109-.237.333-.405.582-.485l17.61-5.724c.388-.126.755.241.629.629l-5.723 17.609c-.081.249-.248.474-.487.583-.492.228-1.095.138-1.502-.267l-2.592-5.422 2.829-5.656-5.658 2.828-5.42-2.593a1.3302 1.3302 0 0 1-.268-1.502" />
    ),
  },
  showMore: {
    size: 24,
    source: (
      <path d="M8 12c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2m6 0c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2m4 2c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2" />
    ),
  },
  slideLeft: {
    size: '16',
    source: (
      <path
        d="m5.707 14.707-1.414-1.414 5.293-5.293-5.293-5.293 1.414-1.414 6 6c.391.391.391 1.023 0 1.414z"
        transform="matrix(-1 0 0 -1 16.294 16)"
      />
    ),
  },
  slideRight: {
    size: '16',
    source: <path d="m5.707 14.707-1.414-1.414 5.293-5.293-5.293-5.293 1.414-1.414 6 6c.391.391.391 1.023 0 1.414z" />,
  },
  smallTicker: {
    size: 16,
    source: (
      <path d="m7 12c-.256 0-.512-.098-.707-.293l-3-3 1.414-1.414 2.293 2.293 5.293-5.293 1.414 1.414-6 6c-.195.195-.451.293-.707.293" />
    ),
  },
  switch: {
    ...defaultSize,
    source: (
      <path d="M6.2945 11.2928l1.414 1.4144L6.4145 14l9.586.0001v2L6.4145 16l1.2931 1.293-1.4142 1.4142-3-3c-.3605-.3605-.3882-.9278-.0831-1.3201l.0832-.0942 3.001-3zm11.4131-6l3 3c.3605.3606.3882.9278.0832 1.3201l-.0832.0942-3 3-1.4142-1.4142 1.2921-1.293L8.0005 10V8l9.585-.0001-1.2921-1.2928 1.4142-1.4142z" />
    ),
  },
  transact: {
    size: 32,
    source: (
      <path d="M16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3zm0 2C9.925 5 5 9.925 5 16c0 1.902.483 3.691 1.332 5.252L16.584 11H13V9h6a.997.997 0 01.707.293 1 1 0 01.083 1.32l-.083.094L7.47 22.945A10.979 10.979 0 0016 27c6.075 0 11-4.925 11-11 0-1.637-.358-3.19-.999-4.586L16.414 21H20v2h-6a.997.997 0 01-.707-.293 1 1 0 01-.083-1.32l.083-.094 11.67-11.671A10.987 10.987 0 0016 5z" />
    ),
  },
  transactActive: {
    size: 32,
    source: (
      <path d="M16 3a12.98 12.98 0 0110.401 5.2l-.014.01-.094.083-13 13-.083.094a1 1 0 00.083 1.32A.997.997 0 0014 23h6v-2h-3.586l11.08-11.079A12.943 12.943 0 0129 16c0 7.18-5.82 13-13 13-3.993 0-7.566-1.8-9.951-4.635l13.658-13.658.083-.094a1 1 0 00-.083-1.32A.997.997 0 0019 9h-6v2h3.584L4.868 22.718A12.94 12.94 0 013 16C3 8.82 8.82 3 16 3z" />
    ),
  },
  up: {
    size: 16,
    source: (
      <path
        d="m4.50260994 5.5h6.99478016c.2761423 0 .5.22385763.5.5 0 .13260824-.0526785.2597852-.1464466.35355339l-3.49739011 3.49739006c-.19526215.19526215-.51184463.19526215-.70710678 0l-3.49739006-3.49739006c-.19526215-.19526215-.19526215-.51184463 0-.70710678.09376819-.09376819.22094514-.14644661.35355339-.14644661z"
        transform="matrix(1 0 0 -1 0 15.498154)"
      />
    ),
  },
  user: {
    size: 40,
    source: (
      <path d="M31.832 29.445l-1.664 1.109C28.421 27.933 23.769 27 20 27c-3.77 0-8.421.933-10.168 3.554l-1.664-1.109C10.918 25.32 17.92 25 20 25s9.082.32 11.832 4.445zM16.141 9.678C17.017 8.579 18.327 8 19.95 8h.059c1.658-.034 2.964.566 3.85 1.678 1.032 1.295 1.399 3.246.956 5.097l-.086.376C23.874 18.886 23.233 21 20 21s-3.874-2.114-4.73-5.849l-.087-.384c-.441-1.843-.074-3.794.958-5.089zm-2.82 5.919C14.115 19.067 15.016 23 20 23s5.885-3.933 6.679-7.403l.084-.365c.589-2.466.088-5.008-1.339-6.8C24.537 7.319 22.891 6 20.086 6h-.155c-2.822 0-4.468 1.319-5.355 2.432-1.427 1.792-1.928 4.334-1.341 6.792l.086.373zM20 38c-9.925 0-18-8.076-18-18 0-9.925 8.075-18 18-18s18 8.075 18 18c0 9.924-8.075 18-18 18zm0-38C8.972 0 0 8.971 0 20c0 11.028 8.972 20 20 20s20-8.972 20-20C40 8.971 31.028 0 20 0z" />
    ),
  },
};
