import type { ImageMetadata } from "astro";
import baymaxImage from "../../assets/y2/cg2271/image.png";
import alexImage from "../../assets/y1/cg2111a/image.png";
import mazeImage from "../../assets/y1/cg1111a/image.png";
import amImage from "../../assets/y2/cg2023/image.png";
import fastImage from "../../assets/y2/cg2028/image.png";
import calculatorImage from "../../assets/y2/ee2026/image.png";
import locomotionImage from "../../assets/internship/steng/image.png";
import baymaxReport from "../../assets/y2/cg2271/B02_03_Final.pdf?url";
import baymaxSchematic from "../../assets/y2/cg2271/CG2271B02T3_Baymax_Schematic.pdf?url";
import mazeReport from "../../assets/y1/cg1111a/B02-S3-T2-REPORT.pdf?url";
import alexReport from "../../assets/y1/cg2111a/B02-6B Final Report - With CS BM.pdf?url";
import amReport from "../../assets/y2/cg2023/CG2023 Project (1).pdf?url";
import fastPresentation from "../../assets/y2/cg2028/CG2028 Presentation.pdf?url";
import calculatorReport from "../../assets/y2/ee2026/ee2026 project report.pdf?url";
import locomotionReport from "../../assets/internship/steng/NUS EG3612 Final Report.pdf?url";

export interface Project {
  slug: string;
  title: string;
  year: number;
  kind?: "internship";
  module: string;
  moduleName: string;
  summary: string;
  description: string;
  tags: string[];
  repository?: string;
  image?: { src: ImageMetadata; alt: string };
  facts: { label: string; value: string }[];
  documents: { label: string; url: string; linkLabel: string }[];
}

// Years for CG2023, CG2028 and EE2026 were confirmed by Vetri.
// Other years come from report covers; descriptions and facts come from the PDFs.
export const projects: Project[] = [
  {
    slug: "cg2271",
    repository: "https://github.com/vet3whale/CG2271-RTOS-Baymax",
    title: "Baymax",
    year: 2026,
    module: "CG2271",
    moduleName: "Real-Time Operating Systems",
    summary: "Monitors study conditions and sends AI-generated feedback after each session.",
    description: "Baymax monitors light, noise, temperature and humidity during study sessions. It flags poor conditions with an LED and buzzer, then sends AI-generated feedback via Telegram when the session ends.",
    tags: ["RTOS", "MCXC444", "ESP32", "OS"],
    image: { src: baymaxImage, alt: "Baymax prototype with two microcontroller boards, breadboard sensors and an OLED display" },
    facts: [
      { label: "Hardware", value: "MCXC444 + ESP32-S2" },
      { label: "Real-time tasks", value: "FreeRTOS tasks, queues, semaphores and mutexes" },
      { label: "Board link", value: "Bidirectional UART at 115,200 baud, with checksums" },
      { label: "Display", value: "OLED session timer and environment feedback" },
      { label: "AI feedback", value: "Gemini API report, delivered via Telegram" },
    ],
    documents: [
      { label: "Final Report", url: baymaxReport, linkLabel: "Open the report in a new tab" },
      { label: "Schematics", url: baymaxSchematic, linkLabel: "Open the schematics in a new tab" },
    ],
  },
  {
    slug: "cg2023",
    title: "AM Modulation & Demodulation",
    year: 2026,
    module: "CG2023",
    moduleName: "Signals and Systems",
    summary: "Modulates a single-tone signal and recovers it through analogue filtering.",
    // Report pp. 2–7: signal configuration, envelope detector and Butterworth filter.
    description: "A single-tone amplitude modulation and demodulation circuit. An envelope detector and low-pass filter recover the message, with waveforms and spectra measured using Analog Discovery 2.",
    tags: ["Analogue circuits", "AM", "Filtering"],
    image: { src: amImage, alt: "Amplitude modulation circuit on a breadboard connected to measurement equipment" },
    facts: [
      { label: "Signals", value: "1 kHz message and 10 kHz carrier" },
      { label: "Detector", value: "Envelope detector with 10 kΩ and 82 nF" },
      { label: "Filter", value: "Second-order Butterworth low-pass, about 2 kHz cutoff" },
      { label: "Measurement", value: "Analog Discovery 2 and WaveForms" },
    ],
    documents: [{ label: "Project Report", url: amReport, linkLabel: "Open the report in a new tab" }],
  },
  {
    slug: "cg2028",
    repository: "https://github.com/vet3whale/CG2028-STM32-Fall-Detection",
    title: "FAST",
    year: 2026,
    module: "CG2028",
    moduleName: "Computer Organization",
    summary: "Detects falls and notifies caregivers through Telegram.",
    // Presentation slides 24–35 and 40: detection, alerts and individual contributions.
    description: "FAST (Fall Alert System) combines motion sensing on an STM32 with a Python application to detect falls. It sends Telegram alerts and a 3D fall visualisation, with a physical assistance button and buzzer feedback.",
    tags: ["STM32", "Interrupts", "Multiple Peripheral Systems"],
    image: { src: fastImage, alt: "FAST prototype with an STM32 board, assistance button and buzzer in a protective case" },
    facts: [
      { label: "Sensors", value: "Accelerometer, gyroscope and barometer" },
      { label: "Detection", value: "Impact and orientation change, with filtered sensor readings" },
      { label: "Board link", value: "Interrupt-driven UART at 115,200 baud" },
      { label: "Alerts", value: "Telegram notifications, fall video and buzzer response" },
      { label: "My work", value: "Detection refinements, 3D visualisation, buzzer and button/UART interrupts" },
    ],
    documents: [{ label: "Presentation", url: fastPresentation, linkLabel: "Open the presentation in a new tab" }],
  },
  {
    slug: "eg3612",
    repository: "https://github.com/vet3whale/near-locomotion-quadruped/tree/b2w-distillation-training",
    title: "Wheeled-Quadruped Locomotion",
    year: 2026,
    kind: "internship",
    module: "EG3612",
    moduleName: "Vacation Industrial Attachment",
    summary: "Trains robot locomotion policies using reinforcement learning and depth-based imitation.",
    // Report pp. 2–8. Only the walking expert was trained; deployment was future work.
    description: "An RL-based training framework for robust Unitree B2W locomotion, developed during my ST Engineering internship. A walking expert teaches a depth-camera student policy, followed by PPO fine-tuning and simulation evaluation.",
    tags: ["Isaac Sim", "PyTorch", "RL", "PPO"],
    image: { src: locomotionImage, alt: "Unitree B2W wheeled-quadruped robot" },
    facts: [
      { label: "Platform", value: "Unitree B2W in Isaac Sim and Isaac Lab" },
      { label: "Training", value: "PPO expert training and DAgger student distillation" },
      { label: "Student", value: "Front/rear depth images with CNN encoders and LSTM memory" },
      { label: "Evaluation", value: "1,000 simulated robots on challenging terrain" },
      { label: "Scope", value: "Walking expert trained; fine-tuning needs further work. No hardware deployment." },
    ],
    documents: [{ label: "Internship Report", url: locomotionReport, linkLabel: "Open the report in a new tab" }],
  },
  {
    slug: "cg2111a",
    repository: "https://github.com/vet3whale/Client_Code_Alex",
    title: "Alex to the Rescue",
    year: 2025,
    module: "CG2111A",
    moduleName: "Engineering Principles and Practice II",
    summary: "A remotely operated robot for mapping, rescue and medpak delivery.",
    // Report cover and pp. 3–10: role, system architecture and teleoperation.
    description: "Alex is a teleoperated search-and-rescue robot built for a simulated lunar environment. It maps the area with LiDAR, retrieves a stranded astronaut with a claw and delivers a medpak.",
    tags: ["RPi", "SLAM", "LiDAR", "TCP/IP"],
    image: { src: alexImage, alt: "Alex rescue robot with LiDAR, camera, ultrasonic sensors and a front claw" },
    facts: [
      { label: "Hardware", value: "Raspberry Pi + Arduino Mega" },
      { label: "Control", value: "Wireless teleoperation over TLS; UART between boards" },
      { label: "Mapping", value: "LiDAR and BreezySLAM, visualised through ROS" },
      { label: "Actuation", value: "Rescue claw and medpak trapdoor" },
      { label: "My role", value: "Communications and command issuing" },
    ],
    documents: [{ label: "Final Report", url: alexReport, linkLabel: "Open the report in a new tab" }],
  },
  {
    slug: "ee2026",
    repository: "https://github.com/vet3whale/EE2026-Graphic-Calculator",
    title: "GPMB Calculator",
    year: 2025,
    module: "EE2026",
    moduleName: "Digital Design",
    summary: "An FPGA calculator for graphs, matrices, polynomials and bit operations.",
    // Report pp. 1–2 are image-based; verified from rendered pages.
    description: "A multi-mode FPGA calculator with a mouse-operated OLED interface. It supports graph plotting, best-fit lines, matrix calculations, polynomial roots and bit operations.",
    tags: ["FPGA", "Verilog"],
    image: { src: calculatorImage, alt: "Basys 3 FPGA board connected to an OLED calculator menu and a mouse" },
    facts: [
      { label: "Hardware", value: "Basys 3 FPGA, Pmod OLED and mouse" },
      { label: "Modes", value: "Graph, matrix, polynomial and bit calculators" },
      { label: "Graphing", value: "Linear, quadratic and cubic plots, with zoom" },
      { label: "Arithmetic", value: "Fixed-point graph calculations; Horner’s method for polynomials" },
      { label: "My work", value: "Main menu FSM, graph plotting and best-fit line calculation" },
    ],
    documents: [{ label: "Project Report", url: calculatorReport, linkLabel: "Open the report in a new tab" }],
  },
  {
    slug: "cg1111a",
    title: "The A-Maze-Ing Race",
    year: 2024,
    module: "CG1111A",
    moduleName: "Engineering Principles and Practice I",
    summary: "An autonomous mBot that navigates a maze using wall sensing and colour cues.",
    // Report pp. 4, 17–18 and 31–33: task, navigation and colour classification.
    description: "An autonomous mBot that follows a maze and turns at colour-coded waypoints. Ultrasonic and infrared sensing guide its movement, while a custom colour circuit identifies the next manoeuvre.",
    tags: ["mBot", "PID", "KNN"],
    image: { src: mazeImage, alt: "Side view of the blue maze-navigation mBot with ultrasonic sensors and onboard circuitry" },
    facts: [
      { label: "Platform", value: "mBot with custom breadboard circuits" },
      { label: "Navigation", value: "Ultrasonic PID control with infrared proximity sensing" },
      { label: "Colour sensing", value: "RGB LEDs, LDR and a 2-to-4 decoder" },
      { label: "Classification", value: "K-nearest neighbours using calibrated RGB readings" },
      { label: "Waypoints", value: "Black-strip detection triggers colour-based turns" },
    ],
    documents: [{ label: "Final Report", url: mazeReport, linkLabel: "Open the report in a new tab" }],
  },
];

export const projectYears = [...new Set(projects.map(({ year }) => year))].sort((a, b) => b - a);
