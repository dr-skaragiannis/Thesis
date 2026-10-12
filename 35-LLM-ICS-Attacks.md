# 35. LLM-ICS-Attacks — Γλωσσικά Μοντέλα (LLM) και Επιθέσεις σε Βιομηχανικά Συστήματα Ελέγχου (ICS)
### LLM-ICS-Attacks: Introducing LLM Agents into Industrial Control and Emulating Cyberattack Scenarios on the Fischertechnik Training Factory Industry 4.0

## Στοιχεία Έργου
- **Πηγαίος φάκελος:** προς δημιουργία (νέο θέμα, χωρίς υπάρχουσα υλοποίηση)
- **Εξοπλισμός/βάση:** Fischertechnik Training Factory Industry 4.0 (εκπαιδευτικό μοντέλο εργοστασίου: PLC, αισθητήρες, μεταφορικές ταινίες, ρομποτικός βραχίονας)
- **Θεματική περιοχή:** Ασφάλεια βιομηχανικών συστημάτων (OT/ICS), μεγάλα γλωσσικά μοντέλα (LLM) και πράκτορες, σενάρια απειλών, ανίχνευση και απόκριση
- **Τεχνολογίες:** Fischertechnik Training Factory Industry 4.0, PLC/SCADA, πρωτόκολλα OPC UA/Modbus, πράκτορες LLM (τοπικοί ή μέσω API), τηλεμετρία/καταγραφή, προσομοίωση επιθέσεων
- **Ενδεικτικός αριθμός φοιτητών:** 1–2

## Εκφώνηση Διπλωματικής Εργασίας

Αντικείμενο της εργασίας είναι η μελέτη, σχεδίαση και αξιολόγηση της εισαγωγής πρακτόρων βασισμένων σε μεγάλα γλωσσικά μοντέλα (LLM agents) στον έλεγχο βιομηχανικών συστημάτων (ICS), με αξιοποίηση του εκπαιδευτικού εργοστασίου Fischertechnik Training Factory Industry 4.0. Ο φοιτητής καλείται να μελετήσει την αρχιτεκτονική και τα σημεία ελέγχου του εργοστασίου (PLC, αισθητήρες, ενεργοποιητές, ροές παραγωγής), τα πρωτόκολλα επικοινωνίας και τα μοντέλα απειλών για ICS (π.χ. MITRE ATT&CK for ICS, IEC 62443, NIST SP 800-82), ώστε να ορίσει ένα ρεαλιστικό, απομονωμένο και ασφαλές πεδίο έρευνας.

Ζητείται η ανάπτυξη περιβάλλοντος στο οποίο ένας ή περισσότεροι πράκτορες LLM αναλαμβάνουν λειτουργίες παρακολούθησης και υποστήριξης ελέγχου (ερμηνεία τηλεμετρίας, διατύπωση εντολών, προτάσεις απόκρισης σε ανωμαλίες) υπό αυστηρούς περιορισμούς ασφάλειας. Παράλληλα, σχεδιάζονται και εκτελούνται σενάρια απειλών σε απομονωμένο εργαστήριο: χειραγώγηση εντολών και τιμών αισθητήρων, παραπλάνηση του πράκτορα μέσω κακόβουλων δεδομένων (prompt injection), μη εξουσιοδοτημένες αλλαγές στη λογική του PLC και άρνηση λειτουργίας, με στόχο τη μελέτη τρωτοτήτων και την αξιολόγηση προστατευτικών μηχανισμών.

Η εργασία πρέπει να περιλαμβάνει συστηματική αξιολόγηση και σύγκριση με συμβατικές προσεγγίσεις χωρίς LLM: ποσοστό ανίχνευσης και απόκρισης στα σενάρια απειλών, ασφάλεια και ορθότητα των εντολών που παράγει ο πράκτορας, ανθεκτικότητα σε παραπλάνηση (prompt injection) και ιχνηλασιμότητα των αποφάσεων. Ο φοιτητής καλείται να τεκμηριώσει τις παραδοχές, τα εργαλεία και τους περιορισμούς της προσέγγισης.

Τέλος, απαιτείται αυστηρή συζήτηση ασφάλειας και δεοντολογίας (μόνο απομονωμένο, προσομοιωμένο εργαστήριο, χωρίς σύνδεση με παραγωγικά δίκτυα), καθώς και προτάσεις επέκτασης, όπως ενσωμάτωση κανόνων ανίχνευσης, ανθρώπινος έλεγχος (human-in-the-loop) και σύνδεση με πλατφόρμες cyber range.

## Αξιολόγηση και σημαντικά αποτελέσματα

**Πώς διεξάγεται.** Πειράματα σε απομονωμένο εργαστήριο με το Fischertechnik Training Factory: προ/μετα-έλεγχος προστατευτικών μηχανισμών, εκτέλεση σεναρίων απειλών, καταγραφή επιτυχίας/αποτυχίας απόκρισης, καθώς και χρόνου και ακρίβειας των αποφάσεων του πράκτορα.

**Αποτελέσματα που μετράνε.** Ποσοστό ανίχνευσης και απόκρισης σε σενάρια απειλών, ασφάλεια και ορθότητα των εντολών του πράκτορα, ανθεκτικότητα σε prompt injection/παραπλάνηση, καθυστέρηση και ιχνηλασιμότητα (τεκμηρίωση) των αποφάσεων.

## Ενδεικτικές Δημοσιεύσεις (πραγματικές, χωρίς arXiv)
1. Stouffer, K., Pillitteri, V., Lightman, S., Abrams, M., Hahn, A. *Guide to Industrial Control Systems (ICS) Security*. NIST Special Publication 800-82 Rev. 2, 2015.
2. MITRE Corporation. *ATT&CK for Industrial Control Systems (ICS)*. MITRE, 2020.
3. Kayan, H., Nunes, M., Rana, O., Burnap, P., Perera, C. "Cybersecurity of Industrial Cyber-Physical Systems: A Review." *ACM Computing Surveys*, 2022.
4. Horkan, M., et al. "A Taxonomy of Industrial Control System Security Testbeds." *Computers & Security* (Elsevier), 2023.
5. Adepu, S., Mathur, A. "An Investigation into the Response of a Water Treatment System to Cyber Attacks." *IEEE Symposium on Computers and Communication (ISCC)*, 2016.
6. Goh, J., Adepu, S., Tan, M., Lee, Z. S. "Anomaly Detection in Cyber Physical Systems Using Recurrent Neural Networks." *IEEE International Symposium on High Assurance Systems Engineering (HASE)*, 2017.
7. Gupta, M., Akiri, C., Aryal, K., Parker, E., Praharaj, L. "From ChatGPT to ThreatGPT: Impact of Generative AI in Cybersecurity and Privacy." *IEEE Access*, 2023.
