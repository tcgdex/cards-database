import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Sylveon)'

const card: Card = {
	dexId: [210],
	set: Set,

	name: {
		en: "Granbull",
		fr: "Granbull",
		es: "Granbull",
		it: "Granbull",
		pt: "Granbull",
		de: "Granbull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fairy"],

	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
		es: "Snubbull",
		it: "Snubbull",
		pt: "Snubbull",
		de: "Snubbull"
	},

	stage: "Stage1",
	retreat: 3,

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				fr: "Coup d'Boule",
			},
			damage: "30",
		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Double Écrasement",
			},
			damage: "50+",
			effect: {
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
		},
	],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	resistances: [{
		type: "Darkness",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 97979
	}
}

export default card