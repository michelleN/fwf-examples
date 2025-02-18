const getClientAddressFromRequest = (req) => {
  const clientAddress = req.headers.get("spin-client-addr");
  if (clientAddress) {
    return clientAddress;
  }
  return req.headers.get("true-client-ip");
};

const cleanupIpAddress = (input) => {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv4RegexWithPort = /^(\d{1,3}\.){3}\d{1,3}:\d+$/;
  const ipv6WithPortRegex = /^\[([a-fA-F0-9:]+)\]:\d+$/;

  if (ipv4RegexWithPort.test(input)) {
    return input.split(':')[0];
  } else if (ipv6WithPortRegex.test(input)) {
    return input.match(ipv6WithPortRegex)[1];
  } else if (ipv4Regex.test(input)) {
    return input;
  } else {
    return input;
  }
};

export {
  getClientAddressFromRequest,
  cleanupIpAddress
};

