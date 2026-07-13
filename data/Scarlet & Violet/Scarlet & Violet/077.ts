import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [940],
	set: Set,

	name: {
		en: "Wattrel",
		fr: "Zapétrel",
		es: "Wattrel",
		it: "Wattrel",
		pt: "Wattrel",
		de: "Voltrel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
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
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Glide",
			fr: "Glissement",
			es: "Planeo",
			it: "Aliante",
			pt: "Planeio",
			de: "Gleiten"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
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

	illustrator: "Saya Tsuruta",

	description: {
		en: "When its wings catch the wind, the bones within produce electricity. This Pokémon dives into the ocean, catching prey by electrocuting them.",
	},

	thirdParty: {
        cardmarket: 702374,
        tcgplayer: 487932
    }
}

export default card