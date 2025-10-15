const TryHackMeIcon = ({ size = 24, className = "" }) => {
  return (
    <img
      src="/assets/tryhackme-logo.svg"
      alt="TryHackMe"
      width={size}
      height={size}
      className={className}
      style={{ 
        display: 'inline-block',
        filter: 'brightness(0) saturate(100%)'
      }}
    />
  )
}

export default TryHackMeIcon
