import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Vespiquen",
		fr: "Apireine",
		es: "Vespiquen",
		it: "Vespiquen",
		pt: "Vespiquen",
		de: "Honweisel"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		416,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Gather Order",
				fr: "Ralliement",
			},
			effect: {
				en: "Search your deck for as many Combee as you like and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck autant d'Apitrini que vous voulez et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Damage Beat",
				fr: "Rouste Ravageuse",
			},
			effect: {
				en: "Does 20 damage times the number of damage counters on the Defending Pokémon.",
				fr: "Inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur le Pokémon Défenseur.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280745
	}
}

export default card
