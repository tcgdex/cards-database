import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "Camouflaged as rotten kelp, this Pokemon sprays liquid poison to take down prey that approach unawares.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886450,
				tcgplayer: 693543
			}
		},
	],

	name: {
		en: "Skrelp",
		fr: "Venalgue",
		es: "Skrelp",
		'es-mx': "Skrelp",
		de: "Algitt",
		it: "Skrelp",
		pt: "Skrelp"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [690],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Hook",
			fr: "Crochet",
			es: "Garfio",
			'es-mx': "Gancho",
			de: "Haken",
			it: "Uncino",
			pt: "Gancho"
		},

		cost: ["Colorless"],
		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card