import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [270],
	set: Set,

	name: {
		en: "Lotad",
		fr: "Nénupiot",
		es: "Lotad",
		it: "Lotad",
		pt: "Lotad",
		de: "Loturzel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	retreat: 1,

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Bélier",
			},
			damage: "40",
			effect: {
				fr: "Ce Pokémon s'inflige 10 dégâts.",
			},
		},
	],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98340
	}
}

export default card