import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Exeggutor",
         ja: "exeggutor",
         fr: "Exégteur",
         de: "Exeggutor",
         es: "Exeggutor",
         it: "Exeggutor",
         pt: "Exeggutor",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [103],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Psychic Exchange",
            ja: "サイキック交換",
            fr: "Échange psychique",
            de: "Psychischer Austausch",
            es: "Intercambio psíquico",
            it: "Scambio psichico",
            pt: "Troca psíquica",
          },
          effect: {
            en: "Shuffle your hand into your deck. Draw up to 8 cards.",
            ja: "あなたの手をあなたのデッキにシャッフルします。最大8枚のカードを作成します。",
            fr: "Vous mélanger votre main dans votre deck. Dessinez jusqu'à 8 cartes.",
            de: "Mischen Sie Ihre Hand in Ihr Deck. Zeichnen Sie bis zu 8 Karten.",
            es: "Arrastra tu mano en tu mazo. Dibuje hasta 8 cartas.",
            it: "Shuffle la tua mano nel mazzo. Disegna fino a 8 carte.",
            pt: "Arraste sua mão em seu baralho. Desenhe até 8 cartas.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Big Eggsplosion",
            ja: "大きな卵の幅",
            fr: "Grosplosion d'oeufs",
            de: "Big Egslsplosion",
            es: "Gran huevo",
            it: "Grande uova",
            pt: "Grande eggsplosion",
          },
          effect: {
            en: "Flip a coin for each Energy attached to Exeggutor. This attack does 40 damage times the number of heads.",
            ja: "exeggutorに取り付けられた各エネルギーのコインをひっくり返します。この攻撃は、ヘッド数の40回のダメージ倍になります。",
            fr: "Retournez une pièce pour chaque énergie attachée à l'exagutateur. Cette attaque fait 40 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Münze für jede an Exeggogor befestigte Energie. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltee una moneda para cada energía unida al exeggutor. Este ataque hace 40 veces el número de cabezas.",
            it: "Capolare una moneta per ogni energia attaccata a Exeggutor. Questo attacco fa 40 danni il numero di teste.",
            pt: "Vire uma moeda para cada energia ligada ao exeggutor. Este ataque causa 40 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
