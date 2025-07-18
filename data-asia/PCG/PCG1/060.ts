import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Primeape",
         ja: "プライム",
         fr: "Primepape",
         de: "Primape",
         es: "Primapia",
         it: "Prima",
         pt: "Primeape",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [57],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Toss",
            ja: "トス",
            fr: "Jeter",
            de: "Werfen",
            es: "Sacudida",
            it: "Lanciare",
            pt: "Jogue",
          },
          effect: {
            en: "You may discard from your hand as many Technical Machine and Pokemon Tool cards as you like. This attack does 30 damage times the number of cards you discarded.",
            ja: "多くのテクニカルマシンとポケモンツールカードと同じくらい多くのテクニカルマシンとポケモンのツールカードを捨てることができます。この攻撃は、廃棄したカードの数の30回のダメージ時間を実行します。",
            fr: "Vous pouvez jeter de votre main autant de cartes d'outils techniques et de pokemon que vous le souhaitez. Cette attaque fait 30 dégâts de temps le nombre de cartes que vous avez jetées.",
            de: "Sie können von Ihrer Hand so viele technische Maschine und Pokemon -Werkzeugkarten wie Sie möchten. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Karten, die Sie weggeworfen haben.",
            es: "Puede descartar de su mano tantas tarjetas de herramientas técnicas de máquina y Pokemon como desee. Este ataque hace 30 veces el número de cartas que descartaste.",
            it: "Puoi scartare dalla tua mano quante macchine tecniche e le schede degli strumenti Pokemon che desideri. Questo attacco fa 30 danni volte al numero di carte che hai scartato.",
            pt: "Você pode descartar da sua mão quantos cartões de ferramentas técnicos de máquina e Pokemon quiser. Este ataque causa 30 danos às vezes o número de cartas que você descartou.",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Low Kick",
            ja: "ローキック",
            fr: "Coup de pied bas",
            de: "Niedriger Kick",
            es: "Patada baja",
            it: "Calcio basso",
            pt: "Kick baixo",
          },
          damage: 40,
        },
      ],


      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
