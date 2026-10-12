# 36. ICS-Attack-Automation-SIEM — Αυτοματοποιημένα Σενάρια Εκτέλεσης Επιθέσεων σε ICS και Παρακολούθηση με SIEM
### ICS-Attack-Automation-SIEM: Automated Attack Execution Scenarios and Monitoring (SIEM Telemetry) for Industrial Control Systems

## Στοιχεία Έργου
- **Πηγαίος φάκελος:** προς δημιουργία (νέο θέμα, χωρίς υπάρχουσα υλοποίηση)
- **Εξοπλισμός/βάση:** εκπαιδευτικό ICS/OT testbed (π.χ. Fischertechnik Training Factory Industry 4.0), MITRE Caldera (adversary emulation) και SIEM (π.χ. Wazuh/Elastic/ELK)
- **Θεματική περιοχή:** Ασφάλεια ICS/OT, αυτοματοποιημένα σενάρια εκτέλεσης επιθέσεων, τηλεμετρία και παρακολούθηση (monitoring), ανίχνευση, SIEM
- **Τεχνολογίες:** MITRE Caldera, Agentic AI για την εκτέλεση των επιθέσεων, PLC/SCADA, πρωτόκολλα OPC UA/Modbus, συλλογή logs/τηλεμετρίας, SIEM (Wazuh/Elastic), κανόνες ανίχνευσης, MITRE ATT&CK for ICS
- **Ενδεικτικός αριθμός φοιτητών:** 1–2

## Εκφώνηση Διπλωματικής Εργασίας

Αντικείμενο της εργασίας είναι ο σχεδιασμός αυτοματοποιημένων σεναρίων εκτέλεσης επιθέσεων σε βιομηχανικά συστήματα ελέγχου (ICS) και η παρακολούθηση (monitoring) των επιθέσεων μέσω τηλεμετρίας που συλλέγεται και αναλύεται σε SIEM. Το σύστημα-στόχος λειτουργεί με συμβατικό έλεγχο (PLC/SCADA) χωρίς LLM στον βρόχο ελέγχου· η αυτοματοποίηση αφορά την εκτέλεση των επιθέσεων (Agentic AI και MITRE Caldera) και όχι τη λειτουργία του ICS. Ο φοιτητής καλείται να μελετήσει την αρχιτεκτονική του ICS testbed, τα πρωτόκολλα επικοινωνίας και το μοντέλο απειλών (MITRE ATT&CK for ICS, IEC 62443, NIST SP 800-82), ώστε να ορίσει ένα ρεαλιστικό, απομονωμένο και ασφαλές πεδίο έρευνας.

Στο επιθετικό σκέλος, αναπτύσσεται περιβάλλον όπου πράκτορες Agentic AI σχεδιάζουν και εκτελούν αυτόματα αλυσίδες επίθεσης έναντι του ICS (αναγνώριση, αρχική πρόσβαση, πλευρική κίνηση, χειραγώγηση της διεργασίας) αντιστοιχισμένες σε τεχνικές του MITRE ATT&CK for ICS, με το MITRE Caldera ως υποδομή adversary emulation (agents, abilities, plugins). Στο αμυντικό σκέλος, υλοποιείται ροή τηλεμετρίας: συλλογή logs και γεγονότων από PLC/SCADA, δικτυακά δεδομένα και ίχνη εκτέλεσης (π.χ. από Caldera), κανονικοποίηση και αποστολή σε SIEM, με κανόνες ανίχνευσης που αποτυπώνουν τα σενάρια επίθεσης.

Η εργασία πρέπει να περιλαμβάνει συστηματική αξιολόγηση και για τις δύο πλευρές: (α) ποσοστό ολοκλήρωσης αλυσίδων επίθεσης, αυτονομία/προσαρμοστικότητα και χρόνος εκτέλεσης· (β) ποσοστό ανίχνευσης, χρόνος ανίχνευσης (MTTD), πληρότητα και ποιότητα τηλεμετρίας, και κάλυψη τεχνικών ATT&CK για κάθε σενάριο. Απαιτείται συσχέτιση των σεναρίων εκτέλεσης με τα σήματα/ειδοποιήσεις (alerts) του SIEM και σύγκριση με χειροκίνητη εκτέλεση.

Τέλος, απαιτείται συζήτηση ασφάλειας, ορίων και δεοντολογίας (μόνο απομονωμένο, προσομοιωμένο εργαστήριο, χωρίς σύνδεση με παραγωγικά δίκτυα), καθώς και προτάσεις επέκτασης, όπως βελτιστοποίηση κανόνων ανίχνευσης, ανθρώπινος έλεγχος (human-in-the-loop) και σύνδεση με πλατφόρμες cyber range.

## Αξιολόγηση και σημαντικά αποτελέσματα

**Πώς διεξάγεται.** Πειράματα σε απομονωμένο ICS testbed: (α) αυτοματοποιημένη εκτέλεση σεναρίων επίθεσης με Agentic AI/MITRE Caldera και καταγραφή ενεργειών· (β) συλλογή τηλεμετρίας (logs PLC/SCADA, δικτυακά δεδομένα, ίχνη Caldera) και ανάλυση σε SIEM με κανόνες ανίχνευσης, συσχετίζοντας κάθε σενάριο με τα παραγόμενα alerts.

**Αποτελέσματα που μετράνε.** Στην επίθεση: ποσοστό ολοκλήρωσης αλυσίδων, αυτονομία/προσαρμοστικότητα, χρόνος εκτέλεσης. Στην παρακολούθηση: ποσοστό ανίχνευσης, MTTD, πληρότητα/ποιότητα τηλεμετρίας και κάλυψη τεχνικών ATT&CK for ICS· μετράνε η συσχέτιση σεναρίων–alerts και η σύγκριση με χειροκίνητη εκτέλεση.

## Ενδεικτικές Δημοσιεύσεις (πραγματικές, χωρίς arXiv)
1. MITRE Corporation. *Caldera: Automated Adversary Emulation Platform*. MITRE, 2023.
2. MITRE Corporation. *ATT&CK for Industrial Control Systems (ICS)*. MITRE, 2020.
3. Stouffer, K., Pillitteri, V., Lightman, S., Abrams, M., Hahn, A. *Guide to Industrial Control Systems (ICS) Security*. NIST Special Publication 800-82 Rev. 2, 2015.
4. Kent, K., Souppaya, M. *Guide to Computer Security Log Management*. NIST Special Publication 800-92, 2006.
5. IEC. *IEC 62443: Security for Industrial Automation and Control Systems*. International Electrotechnical Commission.
6. Kayan, H., Nunes, M., Rana, O., Burnap, P., Perera, C. "Cybersecurity of Industrial Cyber-Physical Systems: A Review." *ACM Computing Surveys*, 2022.
7. Morris, T., Gao, W. "Industrial Control System Traffic Data Sets for Intrusion Detection Research." *Critical Infrastructure Protection (ICCIP)*, 2014.
8. Goh, J., Adepu, S., Tan, M., Lee, Z. S. "Anomaly Detection in Cyber Physical Systems Using Recurrent Neural Networks." *IEEE International Symposium on High Assurance Systems Engineering (HASE)*, 2017.
9. Adepu, S., Mathur, A. "An Investigation into the Response of a Water Treatment System to Cyber Attacks." *IEEE Symposium on Computers and Communication (ISCC)*, 2016.
