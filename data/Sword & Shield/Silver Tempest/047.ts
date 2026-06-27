import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [751],
	set: Set,

	name: {
		en: "Dewpider",
		fr: "Araqua",
		es: "Dewpider",
		it: "Dewpider",
		pt: "Dewpider",
		de: "Araqua"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Hook",
			fr: "Crochet",
			es: "Garfio",
			it: "Uncino",
			pt: "Gancho",
			de: "Haken"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "It forms a water bubble at the rear of its body and then covers its head with it. Meeting another Dewpider means comparing water-bubble sizes.",
	},

	thirdParty: {
		cardmarket: 682094,
		tcgplayer: 451694
	}
}

export default card