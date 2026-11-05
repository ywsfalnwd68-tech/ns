export interface Question {
  id: number;
  part: number; // 1: Easy (1-50), 2: Medium (51-100), 3: Hard (101-150)
  partName: string;
  question: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D' | 'E';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
}

export const questionsData: Question[] = [
  // --- Part 1: Easy (Q1 - Q50) ---
  {
    id: 1,
    part: 1,
    partName: "Part 1 — Easy",
    question: "A computer network connects devices so that they can:",
    options: [
      { key: "A", text: "Block all external access" },
      { key: "B", text: "Store data only on one device" },
      { key: "C", text: "Increase each device's processing power" },
      { key: "D", text: "Exchange data and share services" },
      { key: "E", text: "Work without any protocols" }
    ],
    correctAnswer: "D"
  },
  {
    id: 2,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Which device connects devices within a local network?",
    options: [
      { key: "A", text: "Firewall" },
      { key: "B", text: "Router" },
      { key: "C", text: "Scanner" },
      { key: "D", text: "Modem" },
      { key: "E", text: "Switch" }
    ],
    correctAnswer: "E"
  },
  {
    id: 3,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Which device connects different networks together?",
    options: [
      { key: "A", text: "Switch" },
      { key: "B", text: "Router" },
      { key: "C", text: "Printer" },
      { key: "D", text: "Repeater" },
      { key: "E", text: "Hub" }
    ],
    correctAnswer: "B"
  },
  {
    id: 4,
    part: 1,
    partName: "Part 1 — Easy",
    question: "A computer laboratory in one building is an example of a:",
    options: [
      { key: "A", text: "PAN" },
      { key: "B", text: "WAN" },
      { key: "C", text: "LAN" },
      { key: "D", text: "MAN" },
      { key: "E", text: "VPN" }
    ],
    correctAnswer: "C"
  },
  {
    id: 5,
    part: 1,
    partName: "Part 1 — Easy",
    question: "A phone connected to its wearable forms a:",
    options: [
      { key: "A", text: "PAN" },
      { key: "B", text: "LAN" },
      { key: "C", text: "WAN" },
      { key: "D", text: "MAN" },
      { key: "E", text: "SAN" }
    ],
    correctAnswer: "A"
  },
  {
    id: 6,
    part: 1,
    partName: "Part 1 — Easy",
    question: "University branches in Baghdad and Basra connected together form a:",
    options: [
      { key: "A", text: "PAN" },
      { key: "B", text: "MAN" },
      { key: "C", text: "SAN" },
      { key: "D", text: "LAN" },
      { key: "E", text: "WAN" }
    ],
    correctAnswer: "E"
  },
  {
    id: 7,
    part: 1,
    partName: "Part 1 — Easy",
    question: "In which topology do all devices connect to a central device?",
    options: [
      { key: "A", text: "Mesh" },
      { key: "B", text: "Ring" },
      { key: "C", text: "Star" },
      { key: "D", text: "Bus" },
      { key: "E", text: "Tree" }
    ],
    correctAnswer: "C"
  },
  {
    id: 8,
    part: 1,
    partName: "Part 1 — Easy",
    question: "In which topology do the connections form a loop?",
    options: [
      { key: "A", text: "Ring" },
      { key: "B", text: "Star" },
      { key: "C", text: "Mesh" },
      { key: "D", text: "Tree" },
      { key: "E", text: "Bus" }
    ],
    correctAnswer: "A"
  },
  {
    id: 9,
    part: 1,
    partName: "Part 1 — Easy",
    question: "In which topology do several paths connect the devices?",
    options: [
      { key: "A", text: "Ring" },
      { key: "B", text: "Star" },
      { key: "C", text: "Bus" },
      { key: "D", text: "Mesh" },
      { key: "E", text: "Point-to-point" }
    ],
    correctAnswer: "D"
  },
  {
    id: 10,
    part: 1,
    partName: "Part 1 — Easy",
    question: "In which topology do devices share a single backbone connection?",
    options: [
      { key: "A", text: "Ring" },
      { key: "B", text: "Bus" },
      { key: "C", text: "Mesh" },
      { key: "D", text: "Star" },
      { key: "E", text: "Tree" }
    ],
    correctAnswer: "B"
  },
  {
    id: 11,
    part: 1,
    partName: "Part 1 — Easy",
    question: "A protocol is best defined as:",
    options: [
      { key: "A", text: "A physical medium that carries signals" },
      { key: "B", text: "An address that identifies a host" },
      { key: "C", text: "An agreed set of communication rules" },
      { key: "D", text: "A device that forwards packets" },
      { key: "E", text: "A unit of data sent on a link" }
    ],
    correctAnswer: "C"
  },
  {
    id: 12,
    part: 1,
    partName: "Part 1 — Easy",
    question: "A port is:",
    options: [
      { key: "A", text: "An address identifying a whole network" },
      { key: "B", text: "A number identifying a service on a host" },
      { key: "C", text: "A secret key used to encrypt network traffic" },
      { key: "D", text: "A device connecting two networks" },
      { key: "E", text: "A unit of data carried in a frame" }
    ],
    correctAnswer: "B"
  },
  {
    id: 13,
    part: 1,
    partName: "Part 1 — Easy",
    question: "A packet is:",
    options: [
      { key: "A", text: "A unit of data sent across a network" },
      { key: "B", text: "A weakness in a network service" },
      { key: "C", text: "A number identifying a service" },
      { key: "D", text: "A device that forwards traffic" },
      { key: "E", text: "A set of rules that governs communication" }
    ],
    correctAnswer: "A"
  },
  {
    id: 14,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Something valuable to the organization that needs protection is called a(n):",
    options: [
      { key: "A", text: "Exploit" },
      { key: "B", text: "Threat" },
      { key: "C", text: "Attack" },
      { key: "D", text: "Vulnerability" },
      { key: "E", text: "Asset" }
    ],
    correctAnswer: "E"
  },
  {
    id: 15,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Locking the server room is an example of which control type?",
    options: [
      { key: "A", text: "Administrative" },
      { key: "B", text: "Detective" },
      { key: "C", text: "Technical" },
      { key: "D", text: "Physical" },
      { key: "E", text: "Logical" }
    ],
    correctAnswer: "D"
  },
  {
    id: 16,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Staff security training is an example of which control type?",
    options: [
      { key: "A", text: "Physical" },
      { key: "B", text: "Environmental" },
      { key: "C", text: "Administrative" },
      { key: "D", text: "Cryptographic" },
      { key: "E", text: "Technical" }
    ],
    correctAnswer: "C"
  },
  {
    id: 17,
    part: 1,
    partName: "Part 1 — Easy",
    question: "A firewall rule is an example of which control type?",
    options: [
      { key: "A", text: "Technical" },
      { key: "B", text: "Environmental" },
      { key: "C", text: "Managerial" },
      { key: "D", text: "Administrative" },
      { key: "E", text: "Physical" }
    ],
    correctAnswer: "A"
  },
  {
    id: 18,
    part: 1,
    partName: "Part 1 — Easy",
    question: "\"Only permitted readers see the information\" describes:",
    options: [
      { key: "A", text: "Non-repudiation" },
      { key: "B", text: "Confidentiality" },
      { key: "C", text: "Availability" },
      { key: "D", text: "Integrity" },
      { key: "E", text: "Accountability" }
    ],
    correctAnswer: "B"
  },
  {
    id: 19,
    part: 1,
    partName: "Part 1 — Easy",
    question: "A student's mark is changed from 82 to 28 without approval. Which goal failed?",
    options: [
      { key: "A", text: "Availability" },
      { key: "B", text: "Authenticity" },
      { key: "C", text: "Accountability" },
      { key: "D", text: "Confidentiality" },
      { key: "E", text: "Integrity" }
    ],
    correctAnswer: "E"
  },
  {
    id: 20,
    part: 1,
    partName: "Part 1 — Easy",
    question: "The university portal does not open when registration begins. Which goal failed?",
    options: [
      { key: "A", text: "Authenticity" },
      { key: "B", text: "Accountability" },
      { key: "C", text: "Confidentiality" },
      { key: "D", text: "Availability" },
      { key: "E", text: "Integrity" }
    ],
    correctAnswer: "D"
  },
  {
    id: 21,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Authentication answers the question:",
    options: [
      { key: "A", text: "May you perform this action?" },
      { key: "B", text: "Has the data been changed?" },
      { key: "C", text: "Which port does the service use?" },
      { key: "D", text: "Are you who you claim to be?" },
      { key: "E", text: "Is the service available now?" }
    ],
    correctAnswer: "D"
  },
  {
    id: 22,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Authorization answers the question:",
    options: [
      { key: "A", text: "Are you who you claim to be?" },
      { key: "B", text: "Has the data been changed?" },
      { key: "C", text: "Which port does the service use?" },
      { key: "D", text: "Is the service available now?" },
      { key: "E", text: "May you perform this action?" }
    ],
    correctAnswer: "E"
  },
  {
    id: 23,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Least privilege means:",
    options: [
      { key: "A", text: "Giving only the access needed for a task" },
      { key: "B", text: "Granting rights based on seniority" },
      { key: "C", text: "Removing all access after each login" },
      { key: "D", text: "Giving every user the same full access" },
      { key: "E", text: "Giving access only during official work hours" }
    ],
    correctAnswer: "A"
  },
  {
    id: 24,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Encryption:",
    options: [
      { key: "A", text: "Turns a domain name into the matching IP address" },
      { key: "B", text: "Turns plaintext into ciphertext with a key" },
      { key: "C", text: "Turns a private address into a public one" },
      { key: "D", text: "Turns a packet into a link-layer frame" },
      { key: "E", text: "Turns ciphertext into a MAC address" }
    ],
    correctAnswer: "B"
  },
  {
    id: 25,
    part: 1,
    partName: "Part 1 — Easy",
    question: "What does an IDS do?",
    options: [
      { key: "A", text: "Assigns addresses to new clients" },
      { key: "B", text: "Blocks malicious packets inline" },
      { key: "C", text: "Observes activity and raises alerts" },
      { key: "D", text: "Translates domain names into IP addresses" },
      { key: "E", text: "Translates domain names to IPs" }
    ],
    correctAnswer: "C"
  },
  {
    id: 26,
    part: 1,
    partName: "Part 1 — Easy",
    question: "The three functions of network security in the lecture are:",
    options: [
      { key: "A", text: "Encryption, hashing and signing" },
      { key: "B", text: "Scanning, sniffing and spoofing" },
      { key: "C", text: "Protection, detection and response" },
      { key: "D", text: "Planning, configuring and deploying" },
      { key: "E", text: "Routing, switching and bridging" }
    ],
    correctAnswer: "C"
  },
  {
    id: 27,
    part: 1,
    partName: "Part 1 — Easy",
    question: "A vulnerability is:",
    options: [
      { key: "A", text: "A deliberate attempt to cause harm" },
      { key: "B", text: "A valuable resource to protect" },
      { key: "C", text: "A measure that reduces harm" },
      { key: "D", text: "A technique for using a weakness" },
      { key: "E", text: "A weakness that may allow harm" }
    ],
    correctAnswer: "E"
  },
  {
    id: 28,
    part: 1,
    partName: "Part 1 — Easy",
    question: "A threat is:",
    options: [
      { key: "A", text: "A possible cause of harm" },
      { key: "B", text: "A confirmed incident" },
      { key: "C", text: "A weakness in a system or process" },
      { key: "D", text: "A valuable resource" },
      { key: "E", text: "A protection measure" }
    ],
    correctAnswer: "A"
  },
  {
    id: 29,
    part: 1,
    partName: "Part 1 — Easy",
    question: "How many layers does the OSI model have?",
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "4" },
      { key: "C", text: "6" },
      { key: "D", text: "7" },
      { key: "E", text: "5" }
    ],
    correctAnswer: "D"
  },
  {
    id: 30,
    part: 1,
    partName: "Part 1 — Easy",
    question: "The TCP/IP model commonly groups network functions into how many layers?",
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "4" },
      { key: "C", text: "3" },
      { key: "D", text: "5" },
      { key: "E", text: "7" }
    ],
    correctAnswer: "B"
  },
  {
    id: 31,
    part: 1,
    partName: "Part 1 — Easy",
    question: "ARP maps:",
    options: [
      { key: "A", text: "A port number to a service name" },
      { key: "B", text: "A domain name to an IPv4 address" },
      { key: "C", text: "A private address to a public one" },
      { key: "D", text: "A MAC address to a switch port" },
      { key: "E", text: "An IPv4 address to a MAC address" }
    ],
    correctAnswer: "E"
  },
  {
    id: 32,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Which protocol supplies an IP lease, default gateway and DNS resolver addresses?",
    options: [
      { key: "A", text: "DHCP" },
      { key: "B", text: "NAT" },
      { key: "C", text: "ICMP" },
      { key: "D", text: "DNS" },
      { key: "E", text: "ARP" }
    ],
    correctAnswer: "A"
  },
  {
    id: 33,
    part: 1,
    partName: "Part 1 — Easy",
    question: "DNS translates:",
    options: [
      { key: "A", text: "Port numbers into application names" },
      { key: "B", text: "User names into access permissions" },
      { key: "C", text: "IPv4 addresses into MAC addresses" },
      { key: "D", text: "Domain names into resource records" },
      { key: "E", text: "Private addresses into public ones" }
    ],
    correctAnswer: "D"
  },
  {
    id: 34,
    part: 1,
    partName: "Part 1 — Easy",
    question: "TCP and UDP port numbers range from:",
    options: [
      { key: "A", text: "1 to 32767" },
      { key: "B", text: "1 to 255" },
      { key: "C", text: "0 to 65535" },
      { key: "D", text: "0 to 1023" },
      { key: "E", text: "0 to 4095" }
    ],
    correctAnswer: "C"
  },
  {
    id: 35,
    part: 1,
    partName: "Part 1 — Easy",
    question: "The ping tool commonly uses:",
    options: [
      { key: "A", text: "UDP queries sent to DNS port 53" },
      { key: "B", text: "ICMP Echo Request and Reply" },
      { key: "C", text: "TCP SYN and SYN+ACK" },
      { key: "D", text: "ARP request and reply" },
      { key: "E", text: "DHCP Discover and Offer" }
    ],
    correctAnswer: "B"
  },
  {
    id: 36,
    part: 1,
    partName: "Part 1 — Easy",
    question: "HTTPS is:",
    options: [
      { key: "A", text: "HTTP carried over UDP" },
      { key: "B", text: "HTTP protected with TLS" },
      { key: "C", text: "HTTP protected with DHCP" },
      { key: "D", text: "HTTP protected with ARP" },
      { key: "E", text: "HTTP carried inside ICMP" }
    ],
    correctAnswer: "B"
  },
  {
    id: 37,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Sniffing means:",
    options: [
      { key: "A", text: "Flooding a server with SYN packets" },
      { key: "B", text: "Exhausting a DHCP pool" },
      { key: "C", text: "Forging the source address" },
      { key: "D", text: "Capturing and examining packets" },
      { key: "E", text: "Changing cookie contents" }
    ],
    correctAnswer: "D"
  },
  {
    id: 38,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Spoofing means:",
    options: [
      { key: "A", text: "Presenting false identity information" },
      { key: "B", text: "Scanning the open ports of a host" },
      { key: "C", text: "Writing past a buffer's boundary" },
      { key: "D", text: "Overloading a switch's MAC address table" },
      { key: "E", text: "Capturing packets on a shared link" }
    ],
    correctAnswer: "A"
  },
  {
    id: 39,
    part: 1,
    partName: "Part 1 — Easy",
    question: "A firewall filters packets according to:",
    options: [
      { key: "A", text: "The brand of the operating system" },
      { key: "B", text: "The order in which devices were installed" },
      { key: "C", text: "The speed of each user's connection" },
      { key: "D", text: "The physical length of network cables" },
      { key: "E", text: "Rules derived from the security policy" }
    ],
    correctAnswer: "E"
  },
  {
    id: 40,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Which firewall policy do security professionals recommend?",
    options: [
      { key: "A", text: "Deny only Telnet" },
      { key: "B", text: "Allow all outbound" },
      { key: "C", text: "Default deny" },
      { key: "D", text: "Default allow" },
      { key: "E", text: "Allow all inbound" }
    ],
    correctAnswer: "C"
  },
  {
    id: 41,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Which is an example of a host-based firewall?",
    options: [
      { key: "A", text: "Fortinet FortiGate" },
      { key: "B", text: "Cisco ASA security appliance" },
      { key: "C", text: "pfSense edge device" },
      { key: "D", text: "Windows Defender Firewall" },
      { key: "E", text: "Snort network sensor" }
    ],
    correctAnswer: "D"
  },
  {
    id: 42,
    part: 1,
    partName: "Part 1 — Easy",
    question: "A firewall separates:",
    options: [
      { key: "A", text: "A trusted network from an untrusted one" },
      { key: "B", text: "A laptop from a shared printer" },
      { key: "C", text: "A DNS server from a DHCP server" },
      { key: "D", text: "A web server from its back-end database server" },
      { key: "E", text: "A switch from its directly connected router" }
    ],
    correctAnswer: "A"
  },
  {
    id: 43,
    part: 1,
    partName: "Part 1 — Easy",
    question: "When a firewall denies a packet, it:",
    options: [
      { key: "A", text: "Changes its source address" },
      { key: "B", text: "Drops it and logs the event" },
      { key: "C", text: "Encrypts it and forwards it" },
      { key: "D", text: "Forwards it to the internal LAN" },
      { key: "E", text: "Returns it to the core switch" }
    ],
    correctAnswer: "B"
  },
  {
    id: 44,
    part: 1,
    partName: "Part 1 — Easy",
    question: "ACL stands for:",
    options: [
      { key: "A", text: "Application Control Layer" },
      { key: "B", text: "Access Credential Lock" },
      { key: "C", text: "Allowed Connection Link" },
      { key: "D", text: "Address Configuration Log" },
      { key: "E", text: "Access Control List" }
    ],
    correctAnswer: "E"
  },
  {
    id: 45,
    part: 1,
    partName: "Part 1 — Easy",
    question: "MAC address filtering is a firewall service at which layer?",
    options: [
      { key: "A", text: "Application" },
      { key: "B", text: "Network" },
      { key: "C", text: "Data link" },
      { key: "D", text: "Physical" },
      { key: "E", text: "Transport" }
    ],
    correctAnswer: "C"
  },
  {
    id: 46,
    part: 1,
    partName: "Part 1 — Easy",
    question: "IP address filtering and NAT are firewall services at which layer?",
    options: [
      { key: "A", text: "Data link" },
      { key: "B", text: "Session" },
      { key: "C", text: "Physical" },
      { key: "D", text: "Transport" },
      { key: "E", text: "Network" }
    ],
    correctAnswer: "E"
  },
  {
    id: 47,
    part: 1,
    partName: "Part 1 — Easy",
    question: "A SOHO firewall is typically used in:",
    options: [
      { key: "A", text: "Cloud provider cores" },
      { key: "B", text: "Large enterprise data centers" },
      { key: "C", text: "ISP backbone links" },
      { key: "D", text: "Homes and small offices" },
      { key: "E", text: "Military networks" }
    ],
    correctAnswer: "D"
  },
  {
    id: 48,
    part: 1,
    partName: "Part 1 — Easy",
    question: "The APNIC slide describes a man-in-the-middle attack as:",
    options: [
      { key: "A", text: "Passive traffic scanning" },
      { key: "B", text: "Address leasing" },
      { key: "C", text: "Active eavesdropping" },
      { key: "D", text: "Physical theft" },
      { key: "E", text: "Memory corruption" }
    ],
    correctAnswer: "C"
  },
  {
    id: 49,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Reconnaissance means:",
    options: [
      { key: "A", text: "Blocking unused ports on a firewall" },
      { key: "B", text: "Collecting information about a target" },
      { key: "C", text: "Restoring a service after an attack" },
      { key: "D", text: "Encrypting all traffic between two sites" },
      { key: "E", text: "Assigning IP leases to new hosts" }
    ],
    correctAnswer: "B"
  },
  {
    id: 50,
    part: 1,
    partName: "Part 1 — Easy",
    question: "Which tool is an example of a network-based firewall product?",
    options: [
      { key: "A", text: "Cisco ASA" },
      { key: "B", text: "A browser extension" },
      { key: "C", text: "Windows Defender Firewall" },
      { key: "D", text: "Linux iptables on a laptop" },
      { key: "E", text: "An antivirus scanner" }
    ],
    correctAnswer: "A"
  },

  // --- Part 2: Medium (Q51 - Q100) ---
  {
    id: 51,
    part: 2,
    partName: "Part 2 — Medium",
    question: "The correct order of the TCP three-way handshake is:",
    options: [
      { key: "A", text: "SYN → ACK → SYN+ACK" },
      { key: "B", text: "ACK → SYN → SYN+ACK" },
      { key: "C", text: "SYN → SYN+ACK → ACK" },
      { key: "D", text: "SYN → FIN → ACK" },
      { key: "E", text: "SYN+ACK → SYN → ACK" }
    ],
    correctAnswer: "C"
  },
  {
    id: 52,
    part: 2,
    partName: "Part 2 — Medium",
    question: "The common initial IPv4 DHCP exchange is:",
    options: [
      { key: "A", text: "Discover, Offer, Request, Ack" },
      { key: "B", text: "Request, Offer, Discover, Ack" },
      { key: "C", text: "Offer, Discover, Ack, Request" },
      { key: "D", text: "Request, Discover, Ack, Offer" },
      { key: "E", text: "Discover, Request, Offer, Ack" }
    ],
    correctAnswer: "A"
  },
  {
    id: 53,
    part: 2,
    partName: "Part 2 — Medium",
    question: "IPv6 uses ________ instead of ARP.",
    options: [
      { key: "A", text: "DHCP address leasing" },
      { key: "B", text: "Neighbor Discovery" },
      { key: "C", text: "Router Advertisement only" },
      { key: "D", text: "ICMP Echo Request" },
      { key: "E", text: "Reverse DNS lookup" }
    ],
    correctAnswer: "B"
  },
  {
    id: 54,
    part: 2,
    partName: "Part 2 — Medium",
    question: "What is a key difference between UDP and TCP?",
    options: [
      { key: "A", text: "UDP encrypts data while TCP leaves it plain" },
      { key: "B", text: "UDP authenticates each sender before sending" },
      { key: "C", text: "UDP uses 32-bit port numbers instead of 16-bit" },
      { key: "D", text: "UDP guarantees in-order delivery of data" },
      { key: "E", text: "UDP has no connection setup or retransmission" }
    ],
    correctAnswer: "E"
  },
  {
    id: 55,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Which statement about TCP is correct?",
    options: [
      { key: "A", text: "It encrypts all application data it carries by default" },
      { key: "B", text: "It delivers data without any acknowledgments" },
      { key: "C", text: "It authenticates the remote user before sending data" },
      { key: "D", text: "It is reliable but neither encrypts nor authenticates" },
      { key: "E", text: "It works without keeping any connection state" }
    ],
    correctAnswer: "D"
  },
  {
    id: 56,
    part: 2,
    partName: "Part 2 — Medium",
    question: "A passive attack mainly:",
    options: [
      { key: "A", text: "Injects forged packets into a flow" },
      { key: "B", text: "Floods a link to block the service" },
      { key: "C", text: "Alters records stored in a database" },
      { key: "D", text: "Observes traffic without changing it" },
      { key: "E", text: "Redirects traffic toward a fake server" }
    ],
    correctAnswer: "D"
  },
  {
    id: 57,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Port scanning is normally considered:",
    options: [
      { key: "A", text: "Passive reconnaissance" },
      { key: "B", text: "Active reconnaissance" },
      { key: "C", text: "Cookie poisoning" },
      { key: "D", text: "Session hijacking" },
      { key: "E", text: "Passive sniffing" }
    ],
    correctAnswer: "B"
  },
  {
    id: 58,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Masquerading means:",
    options: [
      { key: "A", text: "Destroying stored data" },
      { key: "B", text: "Exceeding permitted rights" },
      { key: "C", text: "Claiming another identity" },
      { key: "D", text: "Flooding a network link" },
      { key: "E", text: "Denying a past action" }
    ],
    correctAnswer: "C"
  },
  {
    id: 59,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Repudiation concerns:",
    options: [
      { key: "A", text: "Overloading a service with requests" },
      { key: "B", text: "Claiming the identity of another user" },
      { key: "C", text: "Using rights beyond those permitted" },
      { key: "D", text: "Reading unprotected network traffic" },
      { key: "E", text: "Denying participation in an action" }
    ],
    correctAnswer: "E"
  },
  {
    id: 60,
    part: 2,
    partName: "Part 2 — Medium",
    question: "An authorization violation means:",
    options: [
      { key: "A", text: "Using a resource beyond permitted rights" },
      { key: "B", text: "Denying an action that was performed" },
      { key: "C", text: "Observing unprotected network traffic" },
      { key: "D", text: "Sending forged ARP replies on a LAN" },
      { key: "E", text: "Claiming to be a different legitimate user" }
    ],
    correctAnswer: "A"
  },
  {
    id: 61,
    part: 2,
    partName: "Part 2 — Medium",
    question: "According to the APNIC slide, a MITM attack usually results from a lack of:",
    options: [
      { key: "A", text: "Available link bandwidth" },
      { key: "B", text: "Working DHCP servers" },
      { key: "C", text: "End-to-end authentication" },
      { key: "D", text: "Redundant network paths and links" },
      { key: "E", text: "Free IP address space" }
    ],
    correctAnswer: "C"
  },
  {
    id: 62,
    part: 2,
    partName: "Part 2 — Medium",
    question: "In session hijacking, the attacker:",
    options: [
      { key: "A", text: "Spoofs the gateway's MAC address" },
      { key: "B", text: "Exhausts the DHCP address pool" },
      { key: "C", text: "Floods a server with SYN packets" },
      { key: "D", text: "Overloads the switch's CAM table" },
      { key: "E", text: "Reuses a stolen session token" }
    ],
    correctAnswer: "E"
  },
  {
    id: 63,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Which measures protect against session hijacking?",
    options: [
      { key: "A", text: "DHCP snooping and IP leasing" },
      { key: "B", text: "Larger buffers and stack canaries" },
      { key: "C", text: "Port security and VLAN pruning rules" },
      { key: "D", text: "TLS, secure cookies, token rotation" },
      { key: "E", text: "Disabling directed broadcasts" }
    ],
    correctAnswer: "D"
  },
  {
    id: 64,
    part: 2,
    partName: "Part 2 — Medium",
    question: "A MAC flooding attack targets:",
    options: [
      { key: "A", text: "The switch's MAC-to-port table" },
      { key: "B", text: "The resolver's cache of DNS answers" },
      { key: "C", text: "The router's routing table" },
      { key: "D", text: "The server's DHCP lease pool" },
      { key: "E", text: "The host's IP-to-MAC cache" }
    ],
    correctAnswer: "A"
  },
  {
    id: 65,
    part: 2,
    partName: "Part 2 — Medium",
    question: "The primary mitigation for MAC flooding is:",
    options: [
      { key: "A", text: "Disabling ICMP echo replies" },
      { key: "B", text: "Port security on switch ports" },
      { key: "C", text: "Longer DHCP lease durations" },
      { key: "D", text: "TLS with full certificate validation" },
      { key: "E", text: "Output encoding on web pages" }
    ],
    correctAnswer: "B"
  },
  {
    id: 66,
    part: 2,
    partName: "Part 2 — Medium",
    question: "The classical Smurf attack is limited in modern networks by:",
    options: [
      { key: "A", text: "Adding CSRF tokens to web forms" },
      { key: "B", text: "Using longer TCP session timeouts" },
      { key: "C", text: "Disabling IP-directed broadcast" },
      { key: "D", text: "Increasing the DHCP pool size" },
      { key: "E", text: "Enabling port security on switches" }
    ],
    correctAnswer: "C"
  },
  {
    id: 67,
    part: 2,
    partName: "Part 2 — Medium",
    question: "The historical Smurf attack works by sending:",
    options: [
      { key: "A", text: "A forged echo to a broadcast address" },
      { key: "B", text: "Many frames with random source MACs" },
      { key: "C", text: "Many SYNs without the final ACK segment" },
      { key: "D", text: "Oversized input to a server's buffer" },
      { key: "E", text: "A forged ARP reply sent to the default gateway" }
    ],
    correctAnswer: "A"
  },
  {
    id: 68,
    part: 2,
    partName: "Part 2 — Medium",
    question: "A buffer overflow occurs when a program:",
    options: [
      { key: "A", text: "Caches a forged answer from a resolver" },
      { key: "B", text: "Writes beyond a buffer's intended bounds" },
      { key: "C", text: "Learns too many MAC addresses at once" },
      { key: "D", text: "Reuses a stolen session token silently" },
      { key: "E", text: "Accepts a request from a logged-in browser" }
    ],
    correctAnswer: "B"
  },
  {
    id: 69,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Which defenses mainly address XSS?",
    options: [
      { key: "A", text: "TLS and token rotation" },
      { key: "B", text: "CSRF tokens and SameSite" },
      { key: "C", text: "Port security and VLANs" },
      { key: "D", text: "DHCP snooping and ACLs" },
      { key: "E", text: "Output encoding and CSP" }
    ],
    correctAnswer: "E"
  },
  {
    id: 70,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Which defenses mainly address CSRF?",
    options: [
      { key: "A", text: "Port security and VLAN rules" },
      { key: "B", text: "Output encoding and CSP" },
      { key: "C", text: "Stack canaries and ASLR" },
      { key: "D", text: "CSRF tokens and SameSite" },
      { key: "E", text: "DHCP snooping and ACLs" }
    ],
    correctAnswer: "D"
  },
  {
    id: 71,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Cross-site scripting (XSS) is best described as:",
    options: [
      { key: "A", text: "Oversized input overwriting adjacent memory" },
      { key: "B", text: "An attacker reusing a stolen session token" },
      { key: "C", text: "A logged-in browser sending an unwanted request" },
      { key: "D", text: "A server trusting a modified hidden field" },
      { key: "E", text: "Untrusted script running in the user's browser" }
    ],
    correctAnswer: "E"
  },
  {
    id: 72,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Cross-site request forgery (CSRF) is best described as:",
    options: [
      { key: "A", text: "An attacker reusing a stolen session token" },
      { key: "B", text: "A server trusting a modified hidden form value" },
      { key: "C", text: "Untrusted script running in the user's browser" },
      { key: "D", text: "A logged-in browser sending an unwanted request" },
      { key: "E", text: "Oversized input overwriting adjacent memory" }
    ],
    correctAnswer: "D"
  },
  {
    id: 73,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Risk is commonly assessed using:",
    options: [
      { key: "A", text: "Ports and protocols" },
      { key: "B", text: "Bandwidth and latency" },
      { key: "C", text: "Likelihood and impact" },
      { key: "D", text: "Users and roles" },
      { key: "E", text: "Speed and cost" }
    ],
    correctAnswer: "C"
  },
  {
    id: 74,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Which list contains the risk treatment options?",
    options: [
      { key: "A", text: "Reduce, avoid, transfer, accept" },
      { key: "B", text: "Scan, sniff, spoof, flood" },
      { key: "C", text: "Detect, deny, delay, deter" },
      { key: "D", text: "Identify, protect, detect, recover" },
      { key: "E", text: "Plan, test, deploy, manage" }
    ],
    correctAnswer: "A"
  },
  {
    id: 75,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Risk that remains after protection is applied is called:",
    options: [
      { key: "A", text: "Inherent risk" },
      { key: "B", text: "Residual risk" },
      { key: "C", text: "Accepted risk" },
      { key: "D", text: "Transferred risk" },
      { key: "E", text: "Zero-day risk" }
    ],
    correctAnswer: "B"
  },
  {
    id: 76,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Multi-factor authentication combines:",
    options: [
      { key: "A", text: "Factors from different categories" },
      { key: "B", text: "A username and an IP address" },
      { key: "C", text: "Two different passwords for one account" },
      { key: "D", text: "Two logins on the same device" },
      { key: "E", text: "One password checked twice" }
    ],
    correctAnswer: "A"
  },
  {
    id: 77,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Defence in depth means:",
    options: [
      { key: "A", text: "Replacing technical controls with training" },
      { key: "B", text: "Placing all servers in a single segment" },
      { key: "C", text: "Allowing all traffic but logging all of it" },
      { key: "D", text: "Layering controls so one failure is not fatal" },
      { key: "E", text: "Relying on one strong firewall at the perimeter" }
    ],
    correctAnswer: "D"
  },
  {
    id: 78,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Which is a firewall design goal?",
    options: [
      { key: "A", text: "Only inbound traffic needs to be checked" },
      { key: "B", text: "All traffic must pass through the firewall" },
      { key: "C", text: "Trusted users may bypass the firewall" },
      { key: "D", text: "The firewall should run many extra services" },
      { key: "E", text: "The firewall should use default allow" }
    ],
    correctAnswer: "B"
  },
  {
    id: 79,
    part: 2,
    partName: "Part 2 — Medium",
    question: "A bastion host is:",
    options: [
      { key: "A", text: "A sensor copying traffic to an IDS" },
      { key: "B", text: "A switch connecting all internal hosts" },
      { key: "C", text: "A server assigning IP addresses to hosts" },
      { key: "D", text: "A normal workstation serving internal staff" },
      { key: "E", text: "A hardened host acting as the choke point" }
    ],
    correctAnswer: "E"
  },
  {
    id: 80,
    part: 2,
    partName: "Part 2 — Medium",
    question: "How does a packet-filtering firewall process its ACL?",
    options: [
      { key: "A", text: "The most specific match decides" },
      { key: "B", text: "The newest rule always decides" },
      { key: "C", text: "Top-down; the first match decides" },
      { key: "D", text: "Bottom-up; the last match decides" },
      { key: "E", text: "All matching rules are combined" }
    ],
    correctAnswer: "C"
  },
  {
    id: 81,
    part: 2,
    partName: "Part 2 — Medium",
    question: "In TCP ACK-bit filtering, a packet with ACK = 0 is:",
    options: [
      { key: "A", text: "A connection being closed" },
      { key: "B", text: "A retransmitted segment" },
      { key: "C", text: "A reply in an open connection" },
      { key: "D", text: "An ICMP error message" },
      { key: "E", text: "A new connection request" }
    ],
    correctAnswer: "E"
  },
  {
    id: 82,
    part: 2,
    partName: "Part 2 — Medium",
    question: "An inbound packet from the Internet carrying an internal source address indicates:",
    options: [
      { key: "A", text: "NAT translation" },
      { key: "B", text: "A DHCP offer" },
      { key: "C", text: "VPN encapsulation" },
      { key: "D", text: "IP spoofing" },
      { key: "E", text: "A normal reply" }
    ],
    correctAnswer: "D"
  },
  {
    id: 83,
    part: 2,
    partName: "Part 2 — Medium",
    question: "A stateful firewall records connections in a:",
    options: [
      { key: "A", text: "DNS cache" },
      { key: "B", text: "ARP cache" },
      { key: "C", text: "State table" },
      { key: "D", text: "Routing table" },
      { key: "E", text: "CAM table" }
    ],
    correctAnswer: "C"
  },
  {
    id: 84,
    part: 2,
    partName: "Part 2 — Medium",
    question: "An application-level gateway (proxy firewall):",
    options: [
      { key: "A", text: "Terminates one connection and opens another" },
      { key: "B", text: "Copies all traffic to an IDS sensor" },
      { key: "C", text: "Filters traffic only on MAC addresses" },
      { key: "D", text: "Relays sessions without inspecting data" },
      { key: "E", text: "Forwards packets without reading their data" }
    ],
    correctAnswer: "A"
  },
  {
    id: 85,
    part: 2,
    partName: "Part 2 — Medium",
    question: "A WAF using the positive security model:",
    options: [
      { key: "A", text: "Allows requests from trusted subnets" },
      { key: "B", text: "Allows only known-good requests" },
      { key: "C", text: "Allows all except blacklisted IPs" },
      { key: "D", text: "Blocks only known attack signatures" },
      { key: "E", text: "Blocks requests on unusual ports" }
    ],
    correctAnswer: "B"
  },
  {
    id: 86,
    part: 2,
    partName: "Part 2 — Medium",
    question: "A WAF using the negative security model:",
    options: [
      { key: "A", text: "Blocks known attack signatures" },
      { key: "B", text: "Allows only whitelisted users" },
      { key: "C", text: "Blocks every encrypted request" },
      { key: "D", text: "Allows only known-good requests" },
      { key: "E", text: "Blocks all requests by default" }
    ],
    correctAnswer: "A"
  },
  {
    id: 87,
    part: 2,
    partName: "Part 2 — Medium",
    question: "A circuit-level gateway works at which OSI layer?",
    options: [
      { key: "A", text: "Layer 3 (Network)" },
      { key: "B", text: "Layer 2 (Data link)" },
      { key: "C", text: "Layer 5 (Session)" },
      { key: "D", text: "Layer 4 (Transport)" },
      { key: "E", text: "Layer 7 (Application)" }
    ],
    correctAnswer: "C"
  },
  {
    id: 88,
    part: 2,
    partName: "Part 2 — Medium",
    question: "SOCKS is the best-known example of a:",
    options: [
      { key: "A", text: "Stateful inspection firewall" },
      { key: "B", text: "Stateless packet filter" },
      { key: "C", text: "NAT-based firewall" },
      { key: "D", text: "Circuit-level gateway" },
      { key: "E", text: "Web application firewall" }
    ],
    correctAnswer: "D"
  },
  {
    id: 89,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Which feature belongs to a Next-Generation Firewall?",
    options: [
      { key: "A", text: "A default allow policy for all apps" },
      { key: "B", text: "Application awareness regardless of port" },
      { key: "C", text: "Filtering traffic based only on MAC addresses" },
      { key: "D", text: "Inspection of physical-layer signals" },
      { key: "E", text: "Stateless filtering of headers only" }
    ],
    correctAnswer: "B"
  },
  {
    id: 90,
    part: 2,
    partName: "Part 2 — Medium",
    question: "What is the difference between \"drop\" and \"reject\"?",
    options: [
      { key: "A", text: "Drop is stateful; reject is stateless" },
      { key: "B", text: "Drop informs the sender; reject is silent" },
      { key: "C", text: "Drop is inbound; reject is outbound" },
      { key: "D", text: "Drop logs the packet; reject never does" },
      { key: "E", text: "Drop is silent; reject informs the sender" }
    ],
    correctAnswer: "E"
  },
  {
    id: 91,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Which is an advantage of a stateless packet filter?",
    options: [
      { key: "A", text: "Remembers earlier packets in a table" },
      { key: "B", text: "Resists IP spoofing and fragmentation" },
      { key: "C", text: "Fast, cheap and transparent to users" },
      { key: "D", text: "Inspects the full payload of packets" },
      { key: "E", text: "Easy to manage with huge rule sets" }
    ],
    correctAnswer: "C"
  },
  {
    id: 92,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Which is a disadvantage of a stateless packet filter?",
    options: [
      { key: "A", text: "It needs a client on every host" },
      { key: "B", text: "It is too expensive to put on routers" },
      { key: "C", text: "It is not transparent to the users" },
      { key: "D", text: "It is too slow to work at line speed" },
      { key: "E", text: "It cannot inspect the packet payload" }
    ],
    correctAnswer: "E"
  },
  {
    id: 93,
    part: 2,
    partName: "Part 2 — Medium",
    question: "At which OSI layers does a stateless packet filter operate?",
    options: [
      { key: "A", text: "5 only" },
      { key: "B", text: "2–7" },
      { key: "C", text: "2 only" },
      { key: "D", text: "3–4" },
      { key: "E", text: "7 only" }
    ],
    correctAnswer: "D"
  },
  {
    id: 94,
    part: 2,
    partName: "Part 2 — Medium",
    question: "At which OSI layers does a Next-Generation Firewall operate?",
    options: [
      { key: "A", text: "2–7" },
      { key: "B", text: "1–2" },
      { key: "C", text: "5 only" },
      { key: "D", text: "3–4" },
      { key: "E", text: "7 only" }
    ],
    correctAnswer: "A"
  },
  {
    id: 95,
    part: 2,
    partName: "Part 2 — Medium",
    question: "According to the comparison table, an application proxy / WAF has:",
    options: [
      { key: "A", text: "Low security, slow speed" },
      { key: "B", text: "High security, slow speed" },
      { key: "C", text: "Medium security, fast speed" },
      { key: "D", text: "Very high security, medium speed" },
      { key: "E", text: "Low security, very fast speed" }
    ],
    correctAnswer: "B"
  },
  {
    id: 96,
    part: 2,
    partName: "Part 2 — Medium",
    question: "\"Host IP address hiding\" in a proxy firewall means:",
    options: [
      { key: "A", text: "Outside sniffers see only the proxy's IP" },
      { key: "B", text: "The proxy removes IPs from its own logs" },
      { key: "C", text: "Outside servers see the client's real IP" },
      { key: "D", text: "The proxy assigns random IPs to clients" },
      { key: "E", text: "Internal hosts cannot see each other's IPs" }
    ],
    correctAnswer: "A"
  },
  {
    id: 97,
    part: 2,
    partName: "Part 2 — Medium",
    question: "A NAT firewall accepts inbound packets only if they:",
    options: [
      { key: "A", text: "Carry the ACK bit set to zero" },
      { key: "B", text: "Come from a private source address" },
      { key: "C", text: "Use a port number below 1024" },
      { key: "D", text: "Match an earlier outgoing request" },
      { key: "E", text: "Arrive from a trusted DNS server" }
    ],
    correctAnswer: "D"
  },
  {
    id: 98,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Which rule-writing best practice protects against spoofing?",
    options: [
      { key: "A", text: "Allow inbound packets with private sources" },
      { key: "B", text: "Allow all ICMP arriving from outside" },
      { key: "C", text: "Log only the traffic that is allowed" },
      { key: "D", text: "Drop outbound packets to public hosts" },
      { key: "E", text: "Drop inbound packets with private sources" }
    ],
    correctAnswer: "E"
  },
  {
    id: 99,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Why should a firewall also filter outbound traffic?",
    options: [
      { key: "A", text: "To speed up staff web browsing" },
      { key: "B", text: "To reduce the total number of firewall rules" },
      { key: "C", text: "So infected hosts cannot reach attackers" },
      { key: "D", text: "To hide internal IP addresses" },
      { key: "E", text: "To allow inbound replies automatically" }
    ],
    correctAnswer: "C"
  },
  {
    id: 100,
    part: 2,
    partName: "Part 2 — Medium",
    question: "Which action reduces exposure to reconnaissance?",
    options: [
      { key: "A", text: "Open all ports so scanners are detected early" },
      { key: "B", text: "Remove unneeded services, restrict admin access" },
      { key: "C", text: "Disable logging to reduce monitoring noise" },
      { key: "D", text: "Use one flat network for better visibility" },
      { key: "E", text: "Publish detailed operational network diagrams online" }
    ],
    correctAnswer: "B"
  },

  // --- Part 3: Hard (Q101 - Q150) ---
  {
    id: 101,
    part: 3,
    partName: "Part 3 — Hard",
    question: "On a switched Ethernet network, putting a NIC into promiscuous mode:",
    options: [
      { key: "A", text: "Automatically poisons the ARP caches of hosts" },
      { key: "B", text: "Does not by itself expose unrelated switch traffic" },
      { key: "C", text: "Decrypts TLS traffic passing through the switch" },
      { key: "D", text: "Exposes every unicast frame from all of the switch ports" },
      { key: "E", text: "Clears the switch MAC table to force flooding" }
    ],
    correctAnswer: "B"
  },
  {
    id: 102,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Which statement correctly distinguishes ARP poisoning from MAC flooding?",
    options: [
      { key: "A", text: "ARP poisoning alters a host map; MAC flooding fills a switch table" },
      { key: "B", text: "Both alter the routing table kept on the default gateway" },
      { key: "C", text: "Both alter the same forwarding table inside the same switch" },
      { key: "D", text: "ARP poisoning targets DNS caches; MAC flooding targets DHCP" },
      { key: "E", text: "ARP poisoning fills a switch table; MAC flooding alters a host map" }
    ],
    correctAnswer: "A"
  },
  {
    id: 103,
    part: 3,
    partName: "Part 3 — Hard",
    question: "According to the lecture, which statement about MAC flooding is INACCURATE?",
    options: [
      { key: "A", text: "Encryption still protects correctly secured sessions" },
      { key: "B", text: "Outcome depends on hardware, software and configuration" },
      { key: "C", text: "Unknown unicast traffic may be flooded within the relevant VLAN" },
      { key: "D", text: "The scope remains constrained by VLAN membership" },
      { key: "E", text: "Every affected switch simply becomes an unrestricted hub" }
    ],
    correctAnswer: "E"
  },
  {
    id: 104,
    part: 3,
    partName: "Part 3 — Hard",
    question: "DHCP and DNS belong to which layer, even though their misuse disrupts network operation?",
    options: [
      { key: "A", text: "Transport" },
      { key: "B", text: "Presentation" },
      { key: "C", text: "Data link" },
      { key: "D", text: "Application" },
      { key: "E", text: "Network" }
    ],
    correctAnswer: "D"
  },
  {
    id: 105,
    part: 3,
    partName: "Part 3 — Hard",
    question: "According to the lecture, routing attacks belong to the:",
    options: [
      { key: "A", text: "Presentation layer" },
      { key: "B", text: "Physical signalling layer" },
      { key: "C", text: "Network control plane" },
      { key: "D", text: "Transport layer" },
      { key: "E", text: "Data link layer" }
    ],
    correctAnswer: "C"
  },
  {
    id: 106,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A SYN flood makes an application unavailable by exploiting:",
    options: [
      { key: "A", text: "Host acceptance of unsolicited ARP replies" },
      { key: "B", text: "Server handling of incomplete TCP connections" },
      { key: "C", text: "Switch learning of source MAC addresses" },
      { key: "D", text: "Client trust in unsigned answers from DNS servers" },
      { key: "E", text: "Browser trust in authenticated sessions" }
    ],
    correctAnswer: "B"
  },
  {
    id: 107,
    part: 3,
    partName: "Part 3 — Hard",
    question: "An attacker forges a source IP address. What is true?",
    options: [
      { key: "A", text: "The attacker always controls the return path" },
      { key: "B", text: "TLS sessions to the forged host always break" },
      { key: "C", text: "The attacker gains the forged host's privileges" },
      { key: "D", text: "Replies go to the forged host, not the attacker" },
      { key: "E", text: "The firewall must accept the forged packet" }
    ],
    correctAnswer: "D"
  },
  {
    id: 108,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A user sends an unauthorized request over a perfectly encrypted connection. What is true?",
    options: [
      { key: "A", text: "TLS rejects the request before it arrives" },
      { key: "B", text: "The transport layer drops such requests" },
      { key: "C", text: "Encryption performs the authorization check" },
      { key: "D", text: "The firewall blocks any unauthorized request type" },
      { key: "E", text: "The server must still check permission itself" }
    ],
    correctAnswer: "E"
  },
  {
    id: 109,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Regarding a record ID in a URL, which statement is correct?",
    options: [
      { key: "A", text: "The ID is fine; the flaw is a missing access check" },
      { key: "B", text: "Checking the ID in the browser is sufficient" },
      { key: "C", text: "Hiding the admin link fully protects the endpoint" },
      { key: "D", text: "Any record ID shown in a URL is itself a vulnerability" },
      { key: "E", text: "Signing the ID removes the need for checks" }
    ],
    correctAnswer: "A"
  },
  {
    id: 110,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Signed data in a cookie or parameter:",
    options: [
      { key: "A", text: "Prevents XSS in every page that uses the value" },
      { key: "B", text: "Replaces all server-side authorization checks" },
      { key: "C", text: "Detects tampering but does not replace authorization" },
      { key: "D", text: "Hides the value completely from the user's web browser" },
      { key: "E", text: "Makes client-supplied prices fully authoritative" }
    ],
    correctAnswer: "C"
  },
  {
    id: 111,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Stack protection, non-executable memory and ASLR:",
    options: [
      { key: "A", text: "Make exploitation harder but don't fix the flaw" },
      { key: "B", text: "Guarantee a crash never becomes exploitable" },
      { key: "C", text: "Replace the need for input length validation" },
      { key: "D", text: "Remove the buffer overflow bug from the program code" },
      { key: "E", text: "Block malicious input at the network layer" }
    ],
    correctAnswer: "A"
  },
  {
    id: 112,
    part: 3,
    partName: "Part 3 — Hard",
    question: "If traffic is protected by correctly authenticated encryption, a sniffer generally sees:",
    options: [
      { key: "A", text: "Nothing at all, not even IP addresses" },
      { key: "B", text: "Only the user's login credentials" },
      { key: "C", text: "Full application content in plaintext" },
      { key: "D", text: "The session keys used by both ends" },
      { key: "E", text: "Encrypted payload and some metadata" }
    ],
    correctAnswer: "E"
  },
  {
    id: 113,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Missing ping (ICMP) replies:",
    options: [
      { key: "A", text: "Prove that the route is broken" },
      { key: "B", text: "Do not alone prove the host is down" },
      { key: "C", text: "Prove that ICMP is not supported" },
      { key: "D", text: "Prove that the host is compromised" },
      { key: "E", text: "Prove that the host is powered off completely" }
    ],
    correctAnswer: "B"
  },
  {
    id: 114,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Which statement about SSL version 3 is correct?",
    options: [
      { key: "A", text: "Deprecated only for email, not for web" },
      { key: "B", text: "Replaced by SSL version 4 in 2015" },
      { key: "C", text: "Required for HTTPS in modern browsers" },
      { key: "D", text: "Formally deprecated; not a modern choice" },
      { key: "E", text: "The current recommended version of TLS for HTTPS" }
    ],
    correctAnswer: "D"
  },
  {
    id: 115,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Why is source-address spoofing especially relevant to UDP reflection attacks?",
    options: [
      { key: "A", text: "UDP is always blocked by stateful firewalls" },
      { key: "B", text: "UDP replies are never larger than requests" },
      { key: "C", text: "No handshake confirms the source address" },
      { key: "D", text: "UDP packets carry no source port field" },
      { key: "E", text: "UDP requires broadcast destination addresses" }
    ],
    correctAnswer: "C"
  },
  {
    id: 116,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Which of the following is a threat but NOT an attack?",
    options: [
      { key: "A", text: "A power failure" },
      { key: "B", text: "A SYN flood" },
      { key: "C", text: "Password guessing" },
      { key: "D", text: "ARP spoofing" },
      { key: "E", text: "SQL injection" }
    ],
    correctAnswer: "A"
  },
  {
    id: 117,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A university exposes a remote admin service with a weak password. Which item is the vulnerability?",
    options: [
      { key: "A", text: "Unauthorized login" },
      { key: "B", text: "The weak password" },
      { key: "C", text: "Password guessing" },
      { key: "D", text: "Stolen records" },
      { key: "E", text: "The exposed server" }
    ],
    correctAnswer: "B"
  },
  {
    id: 118,
    part: 3,
    partName: "Part 3 — Hard",
    question: "In the same example, \"password guessing\" is the:",
    options: [
      { key: "A", text: "Exposed weakness" },
      { key: "B", text: "Vulnerability" },
      { key: "C", text: "Attack technique" },
      { key: "D", text: "Asset" },
      { key: "E", text: "Threat scenario" }
    ],
    correctAnswer: "C"
  },
  {
    id: 119,
    part: 3,
    partName: "Part 3 — Hard",
    question: "In the same example, \"unauthorized login\" is the:",
    options: [
      { key: "A", text: "Asset" },
      { key: "B", text: "Vulnerability" },
      { key: "C", text: "Countermeasure" },
      { key: "D", text: "Threat scenario" },
      { key: "E", text: "Residual weakness" }
    ],
    correctAnswer: "D"
  },
  {
    id: 120,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A student role has unnecessary permission to edit grades. This is a(n):",
    options: [
      { key: "A", text: "Attack" },
      { key: "B", text: "Valuable asset" },
      { key: "C", text: "Threat" },
      { key: "D", text: "Security control" },
      { key: "E", text: "Vulnerability" }
    ],
    correctAnswer: "E"
  },
  {
    id: 121,
    part: 3,
    partName: "Part 3 — Hard",
    question: "An attacker copies records and then deletes them. Which goals are affected?",
    options: [
      { key: "A", text: "Integrity only, because the records were altered" },
      { key: "B", text: "Availability only, because the data has now been deleted" },
      { key: "C", text: "Confidentiality only, because the data was read" },
      { key: "D", text: "Confidentiality, integrity and maybe availability" },
      { key: "E", text: "None of them, if the service stays online" }
    ],
    correctAnswer: "D"
  },
  {
    id: 122,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A student logs in successfully but is refused permission to change a grade. This is:",
    options: [
      { key: "A", text: "Faulty: a login should allow every action" },
      { key: "B", text: "Faulty: MFA must be misconfigured for this account" },
      { key: "C", text: "Correct: the firewall blocked the request" },
      { key: "D", text: "Faulty: the portal must be unavailable" },
      { key: "E", text: "Correct: authentication is not authorization" }
    ],
    correctAnswer: "E"
  },
  {
    id: 123,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A rule \"Allow Any Any\" is placed at the top of the ACL. What is the effect?",
    options: [
      { key: "A", text: "It applies only if no rule matches" },
      { key: "B", text: "It applies only to outbound traffic" },
      { key: "C", text: "It shadows every rule beneath it" },
      { key: "D", text: "It is skipped since deny rules win" },
      { key: "E", text: "It is overridden by the default deny" }
    ],
    correctAnswer: "C"
  },
  {
    id: 124,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Using the lecture's rule table, a TCP packet to 198.124.1.10 on port 22 is:",
    options: [
      { key: "A", text: "Denied by rule 4 (default)" },
      { key: "B", text: "Allowed as a public server" },
      { key: "C", text: "Allowed by rule 2 (HTTPS)" },
      { key: "D", text: "Allowed by rule 1 (HTTP)" },
      { key: "E", text: "Denied by rule 3 (Telnet)" }
    ],
    correctAnswer: "A"
  },
  {
    id: 125,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Using the lecture's rule table, a TCP packet to 198.124.1.10 on port 443 is:",
    options: [
      { key: "A", text: "Denied by rule 3 (Telnet)" },
      { key: "B", text: "Allowed by rule 2 (HTTPS)" },
      { key: "C", text: "Allowed by rule 1 (HTTP)" },
      { key: "D", text: "Denied by rule 4 (default)" },
      { key: "E", text: "Allowed by rule 4 (default)" }
    ],
    correctAnswer: "B"
  },
  {
    id: 126,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Why is UDP hard to filter safely with a stateless packet filter?",
    options: [
      { key: "A", text: "No port numbers to filter different services by" },
      { key: "B", text: "No ACK bit to tell replies from new flows" },
      { key: "C", text: "Always carried inside ICMP messages" },
      { key: "D", text: "Too fast for routers to inspect it" },
      { key: "E", text: "Always encrypted, hiding all its headers" }
    ],
    correctAnswer: "B"
  },
  {
    id: 127,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A stateful firewall receives a packet with ACK = 1 that matches no state-table entry. It is:",
    options: [
      { key: "A", text: "Dropped, as it matches no connection" },
      { key: "B", text: "Allowed if the port is 80 or 443" },
      { key: "C", text: "Forwarded to a proxy for checking" },
      { key: "D", text: "Added to the table as ESTABLISHED" },
      { key: "E", text: "Allowed, because its ACK flag is set to 1" }
    ],
    correctAnswer: "A"
  },
  {
    id: 128,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Which proxy protection stops an attacker tunneling another protocol through an allowed port?",
    options: [
      { key: "A", text: "Header destruction" },
      { key: "B", text: "Host IP address hiding" },
      { key: "C", text: "Protocol enforcement" },
      { key: "D", text: "ACK-bit filtering" },
      { key: "E", text: "Address translation" }
    ],
    correctAnswer: "C"
  },
  {
    id: 129,
    part: 3,
    partName: "Part 3 — Hard",
    question: "\"Header destruction\" in a proxy firewall means the proxy:",
    options: [
      { key: "A", text: "Copies headers to an IDS sensor" },
      { key: "B", text: "Deletes headers from its log files" },
      { key: "C", text: "Strips encryption from the payload" },
      { key: "D", text: "Removes only the MAC header" },
      { key: "E", text: "Rebuilds new TCP/UDP/IP headers" }
    ],
    correctAnswer: "E"
  },
  {
    id: 130,
    part: 3,
    partName: "Part 3 — Hard",
    question: "The main weakness of the dual-homed host architecture is:",
    options: [
      { key: "A", text: "Router compromise can bypass the bastion host" },
      { key: "B", text: "It routes freely between its two NICs" },
      { key: "C", text: "It is more complex and costly to run" },
      { key: "D", text: "If it is compromised, the LAN is exposed" },
      { key: "E", text: "It cannot host any proxy services" }
    ],
    correctAnswer: "D"
  },
  {
    id: 131,
    part: 3,
    partName: "Part 3 — Hard",
    question: "The main weakness of the screened host architecture is:",
    options: [
      { key: "A", text: "If the dual-homed host falls, LAN is exposed" },
      { key: "B", text: "Router compromise can bypass the bastion" },
      { key: "C", text: "It cannot filter any inbound packets" },
      { key: "D", text: "It routes freely between its two NICs" },
      { key: "E", text: "It provides only one weak layer of defence" }
    ],
    correctAnswer: "B"
  },
  {
    id: 132,
    part: 3,
    partName: "Part 3 — Hard",
    question: "The main weakness of the screening router architecture is:",
    options: [
      { key: "A", text: "If the host falls, the LAN is exposed" },
      { key: "B", text: "It needs two NICs with routing disabled" },
      { key: "C", text: "It is more complex and costly to run" },
      { key: "D", text: "It is only one weak layer of defence" },
      { key: "E", text: "Router compromise bypasses the bastion" }
    ],
    correctAnswer: "D"
  },
  {
    id: 133,
    part: 3,
    partName: "Part 3 — Hard",
    question: "The correct order of the NIST SP 800-41 firewall implementation cycle is:",
    options: [
      { key: "A", text: "Plan → Configure → Test → Deploy → Manage" },
      { key: "B", text: "Plan → Configure → Deploy → Test → Manage" },
      { key: "C", text: "Plan → Deploy → Configure → Test → Manage" },
      { key: "D", text: "Configure → Plan → Test → Deploy → Manage" },
      { key: "E", text: "Plan → Test → Configure → Deploy → Manage" }
    ],
    correctAnswer: "A"
  },
  {
    id: 134,
    part: 3,
    partName: "Part 3 — Hard",
    question: "In the NIST cycle, what happens in the \"Test\" step?",
    options: [
      { key: "A", text: "The firewall is hardened and logging set up" },
      { key: "B", text: "Requirements are identified and a type chosen" },
      { key: "C", text: "Unused rules are removed and logs reviewed" },
      { key: "D", text: "The firewall is moved into production use" },
      { key: "E", text: "Rules are checked in a lab against the policy" }
    ],
    correctAnswer: "E"
  },
  {
    id: 135,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Which can a firewall NOT stop?",
    options: [
      { key: "A", text: "Connections to unpublished ports" },
      { key: "B", text: "Inbound Telnet connections to internal hosts" },
      { key: "C", text: "Traffic sent through a user's mobile hotspot" },
      { key: "D", text: "Packets carrying spoofed internal source addresses" },
      { key: "E", text: "Unsolicited inbound TCP connections" }
    ],
    correctAnswer: "C"
  },
  {
    id: 136,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Which is NOT listed as a firewall limitation?",
    options: [
      { key: "A", text: "It cannot filter traffic by port number" },
      { key: "B", text: "It cannot stop traffic that bypasses it" },
      { key: "C", text: "It cannot stop social engineering" },
      { key: "D", text: "It cannot fully detect hidden malware" },
      { key: "E", text: "It cannot stop insiders already inside" }
    ],
    correctAnswer: "A"
  },
  {
    id: 137,
    part: 3,
    partName: "Part 3 — Hard",
    question: "The correct encapsulation order when an application sends data is:",
    options: [
      { key: "A", text: "Data → packet → segment → frame" },
      { key: "B", text: "Data → frame → packet → segment" },
      { key: "C", text: "Data → segment → packet → frame" },
      { key: "D", text: "Segment → data → frame → packet" },
      { key: "E", text: "Frame → packet → segment → data" }
    ],
    correctAnswer: "C"
  },
  {
    id: 138,
    part: 3,
    partName: "Part 3 — Hard",
    question: "An off-path attacker:",
    options: [
      { key: "A", text: "Receives the replies to forged sources" },
      { key: "B", text: "Cannot normally see the traffic directly" },
      { key: "C", text: "Can always modify traffic in transit" },
      { key: "D", text: "Must be an insider working in the organization" },
      { key: "E", text: "Controls the victim's default gateway" }
    ],
    correctAnswer: "B"
  },
  {
    id: 139,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A compromised insider account lets an external attacker act with internal privileges. This shows that:",
    options: [
      { key: "A", text: "External attackers can never reach internal systems" },
      { key: "B", text: "Firewalls fully protect against all insider misuse" },
      { key: "C", text: "Internal addresses prove a user's real identity" },
      { key: "D", text: "Insiders are always far more dangerous than outside attackers" },
      { key: "E", text: "Network location alone is an incomplete measure of trust" }
    ],
    correctAnswer: "E"
  },
  {
    id: 140,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A server becomes slow. According to the lecture, this is:",
    options: [
      { key: "A", text: "Proof that a SYN flood attack is in progress" },
      { key: "B", text: "Proof that the firewall rules were bypassed" },
      { key: "C", text: "Proof that malware is running on the server" },
      { key: "D", text: "A symptom, not yet proof of an attack" },
      { key: "E", text: "Proof that a MAC flooding attack occurred" }
    ],
    correctAnswer: "D"
  },
  {
    id: 141,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A port scan discovers a remote administration service. This:",
    options: [
      { key: "A", text: "Proves that the system was already compromised" },
      { key: "B", text: "Proves that the service is vulnerable to attack" },
      { key: "C", text: "Proves that the firewall is misconfigured" },
      { key: "D", text: "Shows exposure, not proof of a vulnerability" },
      { key: "E", text: "Proves that the scan itself was unauthorized" }
    ],
    correctAnswer: "D"
  },
  {
    id: 142,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A backup protects recoverability only if it is:",
    options: [
      { key: "A", text: "Encrypted with the server's own key" },
      { key: "B", text: "Created after the incident occurred" },
      { key: "C", text: "Kept online and writable at all times" },
      { key: "D", text: "Stored on the same primary server" },
      { key: "E", text: "Usable and isolated from the incident" }
    ],
    correctAnswer: "E"
  },
  {
    id: 143,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A public information page and an examination database:",
    options: [
      { key: "A", text: "Both need protection, with different priorities" },
      { key: "B", text: "Only the public page needs availability" },
      { key: "C", text: "Both need exactly identical security restrictions" },
      { key: "D", text: "Neither needs any integrity controls" },
      { key: "E", text: "Only the exam database needs any protection" }
    ],
    correctAnswer: "A"
  },
  {
    id: 144,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Why is the classical Smurf attack less effective today?",
    options: [
      { key: "A", text: "Firewalls are unable to see any ICMP traffic" },
      { key: "B", text: "Modern hosts no longer reply to ICMP echo" },
      { key: "C", text: "Networks now restrict directed broadcasts" },
      { key: "D", text: "ICMP has been removed from the IPv4 suite" },
      { key: "E", text: "Switches drop every broadcast frame received" }
    ],
    correctAnswer: "C"
  },
  {
    id: 145,
    part: 3,
    partName: "Part 3 — Hard",
    question: "When setting a port-security MAC limit, the lecture warns that:",
    options: [
      { key: "A", text: "The limit must always be exactly one MAC address" },
      { key: "B", text: "Legitimate devices behind a port must be allowed" },
      { key: "C", text: "The limit must equal the size of the DHCP pool" },
      { key: "D", text: "The limit must match the number of VLANs used" },
      { key: "E", text: "Port security must be off on user-facing ports" }
    ],
    correctAnswer: "B"
  },
  {
    id: 146,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Besides CIA, Stallings' wider model (Fig. 1.1) adds:",
    options: [
      { key: "A", text: "Availability and user anonymity" },
      { key: "B", text: "Privacy and data possession" },
      { key: "C", text: "Authorization and non-repudiation" },
      { key: "D", text: "Utility and control" },
      { key: "E", text: "Authenticity and accountability" }
    ],
    correctAnswer: "E"
  },
  {
    id: 147,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A laptop is already infected. Does channel encryption alone solve the problem?",
    options: [
      { key: "A", text: "Yes; encryption removes the malware itself" },
      { key: "B", text: "No; encryption only works on servers" },
      { key: "C", text: "No; data is readable at the infected endpoint" },
      { key: "D", text: "Yes; TLS scans each endpoint for malware" },
      { key: "E", text: "Yes; ciphertext can never be stolen from any device" }
    ],
    correctAnswer: "C"
  },
  {
    id: 148,
    part: 3,
    partName: "Part 3 — Hard",
    question: "A filter allows only inbound TCP packets with ACK = 1. The effect is:",
    options: [
      { key: "A", text: "All inbound TCP traffic is blocked completely" },
      { key: "B", text: "Outsiders can reply but cannot open connections" },
      { key: "C", text: "Only inbound UDP traffic can enter the LAN" },
      { key: "D", text: "Outsiders can open connections but cannot reply" },
      { key: "E", text: "All outbound TCP traffic is blocked completely" }
    ],
    correctAnswer: "B"
  },
  {
    id: 149,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Stateful inspection mainly solves which problem of stateless filters?",
    options: [
      { key: "A", text: "ACK spoofing of fake reply packets" },
      { key: "B", text: "Inspection of full application data" },
      { key: "C", text: "Tunneling protocols through ports" },
      { key: "D", text: "Malware hidden in encrypted traffic" },
      { key: "E", text: "The need for any rule set at all" }
    ],
    correctAnswer: "A"
  },
  {
    id: 150,
    part: 3,
    partName: "Part 3 — Hard",
    question: "Which is a limitation of a circuit-level gateway?",
    options: [
      { key: "A", text: "It cannot hide the internal IP addresses of hosts" },
      { key: "B", text: "It is slower than an application proxy" },
      { key: "C", text: "It works only at the data link layer" },
      { key: "D", text: "It cannot filter bad content in a session" },
      { key: "E", text: "It cannot verify the TCP handshake at all" }
    ],
    correctAnswer: "D"
  }
];
