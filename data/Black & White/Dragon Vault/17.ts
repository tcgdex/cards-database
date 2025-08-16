import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		621,
	],

	hp: 110,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tight Jaw",
				fr: "Mâchoire Serrée",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dragon Tail",
				fr: "Draco-Queue",
			},
			effect: {
				en: "Flip 2 coins. This attack does 80 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281017,
		tcgplayer: 84979
	}
}

export default card
