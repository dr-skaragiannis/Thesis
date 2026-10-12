# 36. Agentic-Caldera-ICS — Adversarial Επιθέσεις σε Βιομηχανικά Συστήματα Ελέγχου (ICS) με Agentic AI και MITRE Caldera
### Agentic-Caldera-ICS: Autonomous Adversarial Attacks against Industrial Control Systems using Agentic AI and MITRE Caldera

## Στοιχεία Έργου
- **Πηγαίος φάκελος:** προς δημιουργία (νέο θέμα, χωρίς υπάρχουσα υλοποίηση)
- **Εξοπλισμός/βάση:** εκπαιδευτικό ICS/OT testbed (π.χ. Fischertechnik Training Factory Industry 4.0) και MITRE Caldera ως πλατφόρμα adversary emulation
- **Θεματική περιοχή:** Ασφάλεια βιομηχανικών συστημάτων (OT/ICS), αυτόνομη εκτέλεση επιθέσεων (Agentic AI), adversary emulation, MITRE ATT&CK for ICS
- **Τεχνολογίες:** MITRE Caldera (agents, plugins, abilities), PLC/SCADA, πρωτόκολλα OPC UA/Modbus, πράκτορες Agentic AI (σχεδιασμός και εκτέλεση αλυσίδων επίθεσης), τηλεμετρία/καταγραφή, απομονωμένο εργαστήριο
- **Ενδεικτικός αριθμός φοιτητών:** 1–2

## Εκφώνηση Διπλωματικής Εργασίας

Αντικείμενο της εργασίας είναι η μελέτη, σχεδίαση και αξιολόγηση της αυτόνομης εκτέλεσης adversarial επιθέσεων σε βιομηχανικά συστήματα ελέγχου (ICS) με χρήση Agentic AI, αξιοποιώντας το MITRE Caldera ως πλατφόρμα adversary emulation. Σε αντίθεση με προσεγγίσεις που εισάγουν LLM στον βρόχο ελέγχου, εδώ το σύστημα-στόχος λειτουργεί με συμβατικό έλεγχο (PLC/SCADA) χωρίς LLM, και η καινοτομία εντοπίζεται στην αυτόνομη, agentic αυτοματοποίηση της επίθεσης. Ο φοιτητής καλείται να μελετήσει την αρχιτεκτονική του ICS testbed, τα πρωτόκολλα επικοινωνίας και το μοντέλο απειλών (MITRE ATT&CK for ICS, IEC 62443, NIST SP 800-82), ώστε να ορίσει ένα ρεαλιστικό, απομονωμένο και ασφαλές πεδίο έρευνας.

Ζητείται η ανάπτυξη περιβάλλοντος όπου πράκτορες Agentic AI αναλαμβάνουν τον σχεδιασμό και την εκτέλεση αλυσίδων επίθεσης έναντι του ICS — αναγνώριση (reconnaissance), αρχική πρόσβαση, πλευρική κίνηση και χειραγώγηση της διεργασίας — αντιστοιχισμένες σε τεχνικές του MITRE ATT&CK for ICS. Το MITRE Caldera χρησιμοποιείται ως υποδομή adversary emulation (agents, abilities, plugins), ενώ ο πράκτορας αποφασίζει αυτόνομα την ακολουθία, τα εργαλεία και την προσαρμογή σε αντιδράσεις της άμυνας, με καταγραφή κάθε ενέργειας.

Η εργασία πρέπει να περιλαμβάνει συστηματική αξιολόγηση: ποσοστό ολοκλήρωσης αλυσίδων επίθεσης, βαθμός αυτονομίας και προσαρμοστικότητας σε μέτρα άμυνας, χρόνος εκτέλεσης και κάλυψη τεχνικών ATT&CK. Απαιτείται σύγκριση με χειροκίνητη ή απλή Caldera-based εκτέλεση (χωρίς agentic σχεδιασμό), ώστε να αναδειχθεί η προστιθέμενη αξία της αυτόνομης προσέγγισης.

Τέλος, απαιτείται αυστηρή συζήτηση ασφάλειας, ορίων και δεοντολογίας (μόνο απομονωμένο, προσομοιωμένο εργαστήριο, χωρίς σύνδεση με παραγωγικά δίκτυα), καθώς και προτάσεις επέκτασης, όπως μηχανισμοί άμυνας/ανίχνευσης, ανθρώπινος έλεγχος (human-in-the-loop) και σύνδεση με πλατφόρμες cyber range.

## Αξιολόγηση και σημαντικά αποτελέσματα

**Πώς διεξάγεται.** Πειράματα σε απομονωμένο ICS testbed με το MITRE Caldera: ορισμός σεναρίων/αλυσίδων επίθεσης, αυτόνομη εκτέλεση από Agentic AI, καταγραφή ενεργειών, επιτυχίας/αποτυχίας και προσαρμογών, και επανάληψη με προστατευτικά μέτρα.

**Αποτελέσματα που μετράνε.** Ποσοστό ολοκλήρωσης αλυσίδων επίθεσης, βαθμός αυτονομίας/προσαρμοστικότητας, χρόνος εκτέλεσης, κάλυψη τεχνικών ATT&CK for ICS και ιχνηλασιμότητα (τεκμηρίωση) των αποφάσεων του πράκτορα.

## Ενδεικτικές Δημοσιεύσεις (πραγματικές, χωρίς arXiv)
1. MITRE Corporation. *Caldera: Automated Adversary Emulation Platform*. MITRE, 2023.
2. MITRE Corporation. *ATT&CK for Industrial Control Systems (ICS)*. MITRE, 2020.
3. Stouffer, K., Pillitteri, V., Lightman, S., Abrams, M., Hahn, A. *Guide to Industrial Control Systems (ICS) Security*. NIST Special Publication 800-82 Rev. 2, 2015.
4. Scarfone, K., Souppaya, M., Cody, A., Orebaugh, A. *Technical Guide to Information Security Testing and Assessment*. NIST Special Publication 800-115, 2008.
5. IEC. *IEC 62443: Security for Industrial Automation and Control Systems*. International Electrotechnical Commission.
6. Kayan, H., Nunes, M., Rana, O., Burnap, P., Perera, C. "Cybersecurity of Industrial Cyber-Physical Systems: A Review." *ACM Computing Surveys*, 2022.
7. Wang, L., et al. "A Survey on Large Language Model based Autonomous Agents." *Frontiers of Computer Science*, 2024.
8. Deng, G., et al. "PentestGPT: Evaluating and Harnessing Large Language Models for Automated Penetration Testing." *USENIX Security Symposium*, 2024.
9. Adepu, S., Mathur, A. "An Investigation into the Response of a Water Treatment System to Cyber Attacks." *IEEE Symposium on Computers and Communication (ISCC)*, 2016.
