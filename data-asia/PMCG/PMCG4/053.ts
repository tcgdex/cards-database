import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Dragonite",
         ja: "暗いドラゴナイト",
         fr: "Dragonite noire",
         de: "Dunkler Dragonit",
         es: "Dragonita oscura",
         it: "Dargonite scuro",
         pt: "Dragonite escura",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [149],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Summon Minions",
            ja: "ミニオンを召喚します",
            fr: "Invoquer les serviteurs",
            de: "Summe Schergen",
            es: "Invocar a los minions",
            it: "Evoca i servi",
            pt: "SOMOCIRA MINIONS",
          },
          effect: {
            en: "When you play Dark Dragonite from your hand, search your deck for up to 2 Basic Pokmon and put them onto your Bench. Shuffle your deck afterward.",
            ja: "手からダークドラゴナイトを演奏するときは、デッキを最大2つの基本的なPokmonを検索し、ベンチに置きます。その後、デッキをシャッフルします。",
            fr: "Lorsque vous jouez à Dark Dragonite de votre main, recherchez votre deck jusqu'à 2 pokmon de base et mettez-les sur votre banc. Mélanger votre deck par la suite.",
            de: "Wenn Sie dunkle Dragonit aus Ihrer Hand spielen, suchen Sie Ihr Deck nach bis zu 2 Basic -Pokmon und legen Sie sie auf Ihre Bank. Mischen Sie anschließend Ihr Deck.",
            es: "Cuando juegas Dark Dragonite de tu mano, busca en tu mazo hasta 2 Pokmon básico y póngalos en tu banco. Baraja tu mazo después.",
            it: "Quando giochi a Dark Dragonite dalla tua mano, cerca nel tuo mazzo fino a 2 Pokmon di base e mettili in panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Quando você tocar Dark Dragonite da sua mão, procure seu baralho até 2 Pokmon básico e coloque -o em seu banco. Afaste seu baralho depois.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Giant Tail",
            ja: "巨大な尾",
            fr: "Queue géante",
            de: "Riesenschwanz",
            es: "Cola gigante",
            it: "Coda gigante",
            pt: "Tail gigante",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 70,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
