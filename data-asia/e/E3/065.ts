import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Sentret",
         ja: "セントレット",
         fr: "Déménager",
         de: "Sentret",
         es: "Pilón",
         it: "Sentert",
         pt: "Sentret",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [161],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Spy",
            ja: "スパイ",
            fr: "Espionner",
            de: "Spion",
            es: "Espiar",
            it: "Spiare",
            pt: "Espião",
          },
          effect: {
            en: "Look at the top 3 cards of your opponent's deck. Put them back in the same order.",
            ja: "対戦相手のデッキのトップ3カードを見てください。それらを同じ順序で戻します。",
            fr: "Regardez les 3 premières cartes du jeu de votre adversaire. Remettez-les dans le même ordre.",
            de: "Schauen Sie sich die Top 3 Karten des Decks Ihres Gegners an. Legen Sie sie wieder in die gleiche Reihenfolge.",
            es: "Mira las 3 principales cartas del mazo de tu oponente. Vuelve en el mismo orden.",
            it: "Guarda le prime 3 carte del mazzo del tuo avversario. Rimettili nello stesso ordine.",
            pt: "Veja as três principais cartas do baralho do seu oponente. Coloque -os de volta na mesma ordem.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Double Scratch",
            ja: "二重スクラッチ",
            fr: "À double égratignure",
            de: "Doppelkratzer",
            es: "Doble rasguño",
            it: "Doppio graffio",
            pt: "Arranhão duplo",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
      ],

      retreat: 1,

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
