import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Shuppet",
         ja: "シュペット",
         fr: "Brouiller",
         de: "Shuppet",
         es: "Shuppet",
         it: "Shuppet",
         pt: "Shuppet",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [353],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Shadow Crush",
            ja: "シャドウクラッシュ",
            fr: "Coup de poule",
            de: "Schattenquarmant",
            es: "Crush Sombe",
            it: "Shadow Crush",
            pt: "Crush de sombra",
          },
          effect: {
            en: "You may discard 1 Psychic Energy card attached to Shuppet. If you do, your opponent discards 1 Energy card attached to the Defending Pokemon.",
            ja: "Shuppetに取り付けられた1つのサイキックエネルギーカードを捨てることができます。もしそうなら、相手は防御ポケモンに取り付けられた1つのエネルギーカードを破棄します。",
            fr: "Vous pouvez éliminer 1 carte d'énergie psychique attachée à Shuppet. Si vous le faites, votre adversaire élimine 1 carte d'énergie attachée au Pokémon en défense.",
            de: "Sie können 1 psychische Energiekarte an Shuppet verwerfen. Wenn Sie dies tun, verwaltet Ihr Gegner eine Energiekarte, die dem verteidigenden Pokemon angeschlossen ist.",
            es: "Puede descartar 1 tarjeta de energía psíquica unida a Shuppet. Si lo haces, tu oponente descarta 1 tarjeta de energía unida al Pokémon defensor.",
            it: "Puoi scartare 1 carta di energia psichica attaccata a Shuppet. Se lo fai, il tuo avversario scarta 1 carta di energia collegata al Pokemon in difesa.",
            pt: "Você pode descartar 1 cartão de energia psíquica anexada ao shuppet. Se o fizer, seu oponente descarta 1 cartão de energia anexado ao pokemon defensor.",
          },
          damage: 10,
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
