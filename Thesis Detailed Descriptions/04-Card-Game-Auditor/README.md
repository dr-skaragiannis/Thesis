# 4. Card-Game-Auditor — Ανάλυση και Βελτίωση Παιχνιδιού Καρτών Κυβερνοασφάλειας με Αυτόματο Ελεγκτή Δεξιοτήτων

### Card-Game-Auditor: Measuring and Repairing a Cybersecurity Card Game with a Deterministic Skills Auditor

## Στοιχεία Έργου

- **Πηγαίος φάκελος:** Card-Game-Auditor/
- **Θεματική περιοχή:** Gamification, serious games, cybersecurity education, assessment & alignment (skills mapping), game analytics, instructional design
- **Τεχνολογίες:** TypeScript/Node, JSON-LD/schema mapping, deterministic rules/auditor, spreadsheet/JSON export, coverage/imbalance analysis
- **Ενδεικτικός αριθμός φοιτητών:** 1

## Εκφώνηση Διπλωματικής Εργασίας

Η εργασία ασχολείται με τον **ποσοτικό έλεγχο και τη συστηματική βελτίωση** ενός υπάρχοντος παιχνιδιού καρτών για την κυβερνοασφάλεια. Συγκεκριμένα, αναπτύσσεται και αξιολογείται το **Card-Game-Auditor**: ένα εργαλείο αυτόματου ελέγχου (deterministic skills auditor) που μετρά πόσο καλά το περιεχόμενο ενός card game καλύπτει προκαθορισμένους μαθησιακούς στόχους και δεξιότητες.

Το βασικό πρόβλημα που αντιμετωπίζεται είναι η ασυμφωνία μεταξύ σχεδίασης (design intent) και πραγματικής κάλυψης (content coverage): σε serious games είναι συχνό οι κάρτες, οι δράσεις ή τα γεγονότα να μην κατανέμονται ισορροπημένα σε γνωστικά/δεξιολογικά πεδία, δημιουργώντας κενά ή υπερκάλυψη. Ο auditor στοχεύει να κάνει αυτή την ευθυγράμμιση μετρήσιμη, επαναλήψιμη και διαφανή.

Η προσέγγιση βασίζεται σε **συντακτική αντιστοίχιση δεξιοτήτων (skills mapping)**: κάθε κάρτα/στοιχείο του παιχνιδιού περιγράφεται με ένα μικρό σύνολο ικανών (skills/tags) με σαφήνεια, βάσει ενός καθορισμένου λεξικού (controlled vocabulary). Ο deterministic auditor υπολογίζει μετρήσεις κάλυψης (coverage), κατανομής βάρους (weight distribution), ανισορροπίας (imbalance), επαναληψιμότητας (redundancy), καθώς και ανιχνεύει κενά (gaps) και πιθανές ασυμφωνίες (misalignments). Όλα τα αποτελέσματα εξάγονται σε JSON/CSV για αναπαραγωγιμότητα και τεκμηρίωση.

Η μεθοδολογία περιλαμβάνει: (α) αποσυμπίεση/μοντελοποίηση της τράπουλας (deck model), (β) ορισμό μαθησιακού πλαισίου-στόχου (target skills matrix) — π.χ. ευθυγράμμιση με γνωστά πλαίσια (MITRE ATT&CK, NICE/NIST, CyBOK ή διδακτικούς στόχους μαθήματος), (γ) κανόνες auditor (deterministic, χωρίς τυχαιότητα) για υπολογισμό δεικτών, (δ) προτάσεις διόρθωσης/ανακατανομής (repair suggestions) με αιτιολόγηση. Η «διόρθωση» (repair) δεν αλλάζει αυθαίρετα το gameplay, αλλά προτείνει συγκεκριμένες τροποποιήσεις (αφαίρεση/προσθήκη/αναταξινόμηση καρτών) με τεκμηριωμένη επίδραση στα metrics.

Στόχος είναι να καταστεί η αξιολόγηση περιεχομένου του serious game **αντικειμενική και επαναλήψιμη**, παρέχοντας στον σχεδιαστή ένα εργαλείο ανάλυσης (design analytics) που συνδέει το παιχνίδι με μετρήσιμα μαθησιακά αποτελέσματα.

## Αξιολόγηση και Σημαντικά Αποτελέσματα

**Μεθοδολογία.** Αξιολόγηση μέσω case study: εφαρμογή του auditor σε υπάρχουσα τράπουλα Card-Game-Auditor/ ή σε συνθετικά decks. Μετρώνται: coverage ratio ανά θεματική, skill balance (Gini/variance), gap count, redundancy, distribution entropy. Πραγματοποιείται sensitivity analysis για να ελεγχθεί σταθερότητα των μετρικών, καθώς και expert review (instructional/game design) για την εγκυρότητα των προτάσεων repair. Ιδιαίτερη έμφαση σε determinism (ίδια είσοδος → ίδια έξοδος).

**Μετρήσιμα αποτελέσματα.** Αναμένονται: πίνακας κάλυψης πριν/μετά προτεινόμενες διορθώσεις, μείωση ανισορροπίας κατανομής, πλήρωση σημαντικών κενών χωρίς υπερβολική επαναληψιμότητα, αριθμός εφαρμόσιμων repair suggestions με αιτιολόγηση, καθώς και τεκμηρίωση ότι ο auditor είναι επαναλήψιμος, διαφανής και χρήσιμος για σχεδιαστική απόφαση (design decision support).

## Ενδεικτικές Δημοσιεύσεις (πραγματικές, χωρίς arXiv)

1. Deterding, S., et al. "From game design elements to gamefulness: defining 'gamification'." *MindTrek*, 2011.
2. Plass, J. L., Homer, B. D., Kinzer, C. K. "Foundations of Game-Based Learning." *Educational Psychologist*, 2015.
3. Yusoff, A., Crowder, R., Gilbert, L., Wills, G. "A Conceptual Framework for Serious Games." *ICICT*, IEEE, 2009.
4. Connolly, T. M., Boyle, E. A., MacArthur, E., Hainey, T., Boyle, J. M. "A systematic literature review of empirical evidence on computer games and serious games." *Computers & Education*, 2012.
5. Švábenský, V., Čeleda, P., Vykopal, J., Brišáková, S. "Cybersecurity knowledge and skills taught in Capture the Flag challenges." *Computers & Security* (Elsevier), 2021.
6. Calderón, A., Ruiz, M. "A systematic literature review on serious games evaluation." *Computers & Education*, 2015.
