import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [915],
	set: Set,

	name: {
		en: "Lechonk",
		fr: "Gourmelet",
		es: "Lechonk",
		it: "Lechonk",
		pt: "Lechonk",
		de: "Ferkuli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			it: "Tassa",
			pt: "Coleta",
			de: "Sammeln"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre uma carta.",
			de: "Ziehe 1 Karte."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
    {
      type: "normal",
      size: "standard"
    },
    {
      type: "reverse",
      size: "standard"
    }
  ],

	illustrator: "kodama",

	description: {
		en: "It searches for food all day. It possesses a keen sense of smell but doesn't use it for anything other than foraging.",
	},

	thirdParty: {
        cardmarket: 702451,
        tcgplayer: 485108
    }
}

export default card
