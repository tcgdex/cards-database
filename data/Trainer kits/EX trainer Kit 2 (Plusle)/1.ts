import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [374],
	set: Set,

	name: {
		en: "Beldum"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Psychic",
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Call for Family"
		},
		effect: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward."
		}
	}, {
		cost: [
			"Psychic",
		],
		name: {
			en: "Metal Ball"
		},
		effect: {
			en: "Put 1 damage counter on the Defending Pokémon."
		}
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "2x"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 83786
	}
}

export default card
