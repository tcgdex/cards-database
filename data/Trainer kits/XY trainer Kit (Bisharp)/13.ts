import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Bisharp)'

const card: Card = {
	dexId: [624],
	set: Set,

	name: {
		en: "Pawniard",
		fr: "Scalpion",
		es: "Pawniard",
		it: "Pawniard",
		pt: "Pawniard",
		de: "Gladiantri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",
	retreat: 1,

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				fr: "Transpercement",
			},
			damage: "10",
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Coupe",
			},
			damage: "20",
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
		tcgplayer: 98162
	}
}

export default card