import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Feunard",
		de: "Vulnona"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [171],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix"
	},

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Ion Coating",
			},
			effect: {
				en: "You may use this power once during each of your turns (before your attack). All Lightning Energy attached to your Active Pokémon becomes Water Energy for the rest of the turn. (This effect ends if your Active Pokémon retreats or is returned to your hand.) This power can't be used if Lanturn is affected by a Special Condition.",
			},
		},
	],,
	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Electric Tackle",
				fr: "Tromperie",
				de: "Mislead"
			},
			effect: {
				en: "This attack does 20 damage plus 10 damage for each Lightning Energy attached to Lanturn. Flip a coin. If tails, Lanturn does 10 damage to itself for each Lightning Energy attached to it.",
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
				en: "Ethereal Flame",
				fr: "Flamme éthérée",
				de: "Ethereal Flame"
			},
			effect: {
				en: "Discard all R Energy cards attached to Ninetales. This attack does 30 damage plus 10 more damage for each cards discarded this way.",
				fr: "Défaussez-vous de toutes les cartes Énergie  attachées à Feunard. Cette carte inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte défaussée de cette manière.",
				de: "Discard all  Energy cards attached to Ninetales. This attack does 30 damage plus 20 more damage for each card discarded this way."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87765,
				cardmarket: 274896
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
