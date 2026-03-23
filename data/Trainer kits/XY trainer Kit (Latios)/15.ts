import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	dexId: [111],
	set: Set,

	name: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
		es: "Rhyhorn",
		it: "Rhyhorn",
		pt: "Rhyhorn",
		de: "Rihorn"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 3,

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
		type: "Grass",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98371
	}
}

export default card