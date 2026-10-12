# 6. CyberGM-UI — Διεπαφή Game Master για Gamified Κυβερνοασφάλεια (TUI/WEB)

### CyberGM-UI: Game Master Interface for Gamified Cybersecurity Tabletop/Interactive Scenarios

## Στοιχεία Έργου

- **Πηγαίος φάκελος:** CyberGM-UI/
- **Θεματική περιοχή:** Serious games, gamified cybersecurity, interactive fiction/Gamemaster tools, scenario authoring, TTRPG-inspired learning
- **Τεχνολογίες:** React/TypeScript, Vite, TailwindCSS, state management, JSON scenario format, real-time or turn-based UI, optional WebSocket
- **Ενδεικτικός αριθμός φοιτητών:** 1–2

## Εκφώνηση Διπλωματικής Εργασίας

Το **CyberGM-UI** είναι μια διεπαφή τύπου «Game Master» (GM) σχεδιασμένη για τη διεξαγωγή gamified σεναρίων κυβερνοασφάλειας. Στόχος είναι να επιτρέψει σε έναν εκπαιδευτή/GM να διευθύνει δυναμικά ένα σενάριο (incidents, puzzles, role-play) ενώ οι συμμετέχοντες λαμβάνουν πληροφορίες, λαμβάνουν αποφάσεις και βλέπουν τις συνέπειες σε πραγματικό χρόνο.

Η εργασία επικεντρώνεται στο **σχεδιασμό UX για GM workflows**: authoring σεναρίων, διαχείριση NPCs, clues, timers, injects, consequences matrix, hints, scoring. Τα σενάρια αποθηκεύονται σε δομημένο JSON (modular), επιτρέποντας επαναχρησιμοποίηση και επέκταση χωρίς αλλαγή κώδικα.

Βασικές λειτουργίες: scenario library, act/scene structure, branching (conditional branches), triggers/events, resource tracking (budget/time/visibility), log of actions (audit trail), reveal/hide clues, inject events based on time/player choices. Το UI εστιάζει σε σαφή οπτικοποίηση κατάστασης (state board) για γρήγορη λήψη αποφάσεων από τον GM.

Η προσέγγιση συνδυάζει στοιχεία από **interactive fiction**, **tabletop RPGs** (GM screen metaphor) και **serious games**. Δίνεται έμφαση σε διδακτικά κριτήρια: σαφή learning objectives ανά scene, aligned consequences, debrief prompts μετά από κάθε κρίσιμο σημείο.

## Αξιολόγηση και Σημαντικά Αποτελέσματα

**Μεθοδολογία.** Usability testing με εκπαιδευτές/φοιτητές, heuristic evaluation (Nielsen), think-aloud, SUS. Case studies με 2–3 σενάρια (incident response, phishing triage, access control).

**Μετρήσιμα αποτελέσματα.** SUS ≥ 70, low cognitive load (NASA-TLX), μειωμένος χρόνος setup/run ανά σενάριο, υψηλή αντιληπτή ευκολία χρήσης για GM, ικανοποιητική κάλυψη GM needs. Τεκμηρίωση επαναχρησιμοποίησης σεναρίων.

## Ενδεικτικές Δημοσιεύσεις

1. Fullerton, T. *Game Design Workshop*. CRC Press, 2008.
2. Plass et al. *Foundations of Game-Based Learning*. *Educational Psychologist*, 2015.
3. Connolly et al. *Computers & Education*, 2012.
4. Nielsen, J. *Usability Engineering*. Morgan Kaufmann, 1993.
5. Švábenský et al. *Computers & Security*, 2021.
6. Deterding et al. *MindTrek*, 2011.
