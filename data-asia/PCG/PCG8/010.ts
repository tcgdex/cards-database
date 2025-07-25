import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Cacnea",
         ja: "カクネア",
         fr: "Cacnée",
         de: "Kaknoe",
         es: "Cacnea",
         it: "Cacnea",
         pt: "Cacnea",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [331],
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
            en: "Search your deck for a Basic Pokemon and put it onto your Bench. Shuffle your deck afterward.",
            ja: "デッキを検索して、基本的なポケモンを探して、ベンチに置きます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour un Pokémon de base et mettez-le sur votre banc. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem einfachen Pokémon und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Pokémon básico y colóquelo en su banco. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un Pokemon di base e mettilo in panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por um Pokémon básico e coloque -o em seu banco. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Rising Lunge",
            ja: "上昇する突進",
            fr: "Fente croissante",
            de: "Steigender Longe",
            es: "Estocada",
            it: "Affondo in aumento",
            pt: "Rising Bunge",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
