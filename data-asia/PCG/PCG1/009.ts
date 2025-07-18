import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "NidoranM",
         ja: "nidoranm",
         fr: "Nidoranm",
         de: "Nidoranm",
         es: "Nidoranm",
         it: "Nidoranm",
         pt: "Nidoranm",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [32],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Call for Family",
            ja: "家族を呼びます",
            fr: "Appel à la famille",
            de: "Rufen Sie nach Familie",
            es: "Llamar a la familia",
            it: "Chiama per la famiglia",
            pt: "Ligue para a família",
          },
          effect: {
            en: "Search your deck for a Nidoran F or a Nidoran M card and put it onto your Bench.  Shuffle your deck afterward.",
            ja: "デッキを検索して、Nidoran fまたはnidoran mカードを探して、ベンチに置きます。  その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour une carte Nidoran F ou Nidoran M et mettez-la sur votre banc.  Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem Nidoran für eine Nidoran -M -Karte und legen Sie sie auf Ihre Bank.  Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Nidoran para una tarjeta Nidoran M y póngala en su banco.  Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una scheda N Iidoran F o Nidoran e mettila in panchina.  Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por um Nidoran para uma carta Nidoran M e coloque -a em seu banco.  Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Double Stab",
            ja: "二重吸い込み",
            fr: "Coup de couteau",
            de: "Doppelstab",
            es: "Apuñalamiento doble",
            it: "Doppia pugnalata",
            pt: "Facada dupla",
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
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
