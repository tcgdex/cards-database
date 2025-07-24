import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Sunflora",
         ja: "サンフロラ",
         fr: "Sunflora",
         de: "Sonnenflora",
         es: "Sunflora",
         it: "Sunfra",
         pt: "Sunflora",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [192],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Energy Plant",
            ja: "エネルギープラント",
            fr: "Usine d'énergie",
            de: "Energiepflanze",
            es: "Planta de energía",
            it: "Pianta energetica",
            pt: "Planta de energia",
          },
          effect: {
            en: "Search your deck for a basic Energy card and attach it to 1 of your Pokemon. Shuffle your deck afterward.",
            ja: "デッキを検索して、基本的なエネルギーカードを検索し、ポケモンの1枚に添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte d'énergie de base et fixez-la à 1 de votre Pokémon. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer grundlegenden Energiekarte und fügen Sie es an 1 Ihres Pokémon. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía básica y adjunte a 1 de su Pokémon. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una scheda energetica di base e collegala a 1 del tuo Pokemon. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de um cartão de energia básico e anexe -o a 1 do seu Pokemon. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Trip Over",
            ja: "旅をします",
            fr: "Faire une trébuche",
            de: "Auslösen",
            es: "Tropezar",
            it: "Inciampare",
            pt: "Viaje",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて30ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 30 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 30 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 30 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 30 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 30 mais danos.",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
