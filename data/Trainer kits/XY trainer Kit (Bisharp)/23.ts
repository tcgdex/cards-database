import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Bisharp)'

const card: Card = {
	dexId: [680],
	set: Set,

	name: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		it: "Doublade",
		pt: "Doublade",
		de: "Duokles"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
		es: "Honedge",
		it: "Honedge",
		pt: "Honedge",
		de: "Gramokles"
	},

	stage: "Stage1",
	retreat: 2,

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				fr: "Duo de Lames",
			},
			damage: "30×",
			effect: {
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
		},
	],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 98170
	}
}

export default card