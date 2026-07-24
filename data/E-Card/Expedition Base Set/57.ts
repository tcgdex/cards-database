import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Feunard",
		de: "Vulnona"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [123],

	hp: 60,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Quick Turn",
				fr: "Tromperie",
				de: "Mislead"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Si vous obtenez au moins une face, le Pokémon Défenseur est maintenant Confus.",
				de: "Flip 2 coins. If either of them is heads, the Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
				fr: "Flamme éthérée",
				de: "Ethereal Flame"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 20 damage plus 20 more damage.",
				fr: "Défaussez-vous de toutes les cartes Énergie  attachées à Feunard. Cette carte inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte défaussée de cette manière.",
				de: "Discard all  Energy cards attached to Ninetales. This attack does 30 damage plus 20 more damage for each card discarded this way."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87766,
				cardmarket: 274896
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
