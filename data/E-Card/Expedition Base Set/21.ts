import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
		de: "Vulnona"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Mislead",
				fr: "Tromperie",
				de: "Mislead"
			},
			effect: {
				en: "Flip 2 coins. If either of them is heads, the Defending Pokémon is now Confused.",
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
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274896,
		tcgplayer: 87765
	}
}

export default card
