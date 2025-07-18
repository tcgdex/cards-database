import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Dodrio",
         ja: "ドドリオ",
         fr: "Conjurer",
         de: "Dodrio",
         es: "Ddrio",
         it: "Dodrio",
         pt: "Dodrio",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [85],
      hp: 80,
      types: [],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Fast Feet",
            ja: "速い足",
            fr: "Pieds rapides",
            de: "Schnelle Füße",
            es: "Pies rápidos",
            it: "Piedi veloci",
            pt: "Pés rápidos",
          },
          effect: {
            en: "Dodrio can retreat even while it is Asleep or Paralyzed.",
            ja: "ドドリオは、眠っている、または麻痺している間も後退することができます。",
            fr: "Dodrio peut se retirer même pendant son sommeil ou paralysé.",
            de: "Dodrio kann sich auch dann zurückziehen, wenn es schläft oder gelähmt ist.",
            es: "DDRIO puede retirarse incluso mientras está dormido o paralizado.",
            it: "Dodrio può ritirarsi anche se dorme o paralizzato.",
            pt: "Dodrio pode recuar mesmo enquanto está dormindo ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Retaliate",
            ja: "報復",
            fr: "User de représailles",
            de: "Revanchieren",
            es: "Tomar represalias",
            it: "Vendicarsi",
            pt: "Retaliar",
          },
          effect: {
            en: "Does 10 damage times the number of damage counters on Dodrio.",
            ja: "ダメージ数のダメージ数は、ドドリオのダメージ数を10回行います。",
            fr: "Fait 10 dégâts fois le nombre de compteurs de dégâts sur Dodrio.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schäden auf Dodrio.",
            es: "Hace 10 tiempos de daño el número de contadores de daños en DDRIO.",
            it: "Fa 10 danni volte il numero di contatori di danno su Dodrio.",
            pt: "10 danos vezes o número de contadores de danos no Dodrio.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Slashing Strike",
            ja: "スラッシングストライク",
            fr: "Frappe de frappe",
            de: "Streik senken",
            es: "Huelga de corte",
            it: "Colpire tagli",
            pt: "Greve",
          },
          effect: {
            en: "Flip a coin. If tails, Dodrio can't use Slashing Strike during your next turn.",
            ja: "コインをひっくり返します。テールの場合、ドドリオは次のターン中にスラッシングストライクを使用できません。",
            fr: "Retourner une pièce. Si Tails, Dodrio ne peut pas utiliser la frappe de frappe lors de votre prochain tour.",
            de: "Eine Münze drehen. Wenn Schwänze, kann Dodrio während Ihrer nächsten Kurve keinen Slashing -Streik verwenden.",
            es: "Voltea una moneda. Si Tails, Ddrio no puede usar Slashing Strike durante su próximo turno.",
            it: "Capovolgi una moneta. Se le code, Dodrio non può usare Slashing Strike durante il tuo prossimo turno.",
            pt: "Vire uma moeda. Se o Tails, Dodrio não pode usar um ataque de corte durante o seu próximo turno.",
          },
          damage: 40,
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
