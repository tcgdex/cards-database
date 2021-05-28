import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Victini V",
		fr: "Victini V",
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Fire",
	],

	stage: "Basic",
	suffix: "V",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spreading Flames",
				fr: "Flammes Rampantes",
			},
			effect: {
				en: "Attach up to 3 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
				fr: "Attachez jusqu’à 3 cartes Énergie Fire de votre pile de défausse à vos Pokémon comme il vous plaît.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Energy Burst",
				fr: "Explosion d’Énergie",
			},
			effect: {
				en: "This attack does 30 damage for each Energy attached to both Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
