import classNames from 'classnames';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'dark' | 'primary' | 'light' | 'link';
  children: React.ReactNode;
};

export function Button({ type = 'button', variant, children }: Props) {
  let bgColor = '';
  if (variant === 'primary')
    bgColor = 'bg-primary hover:bg-primaryLight transition-all text-white';
  if (variant === 'light') bgColor = 'bg-primaryLight text-black';
  if (variant === 'dark')
    bgColor =
      'bg-primaryDark text-white hover:bg-primary transition ease-in-out delay-100 duration-300';
  if (variant === 'link') bgColor = 'text-black bg-none';

  return (
    <button
      type={type}
      className={classNames('py-2 px-4 rounded-md font-bold', bgColor)}
    >
      {children}
    </button>
  );
}
