import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Magikarp.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Magicarpe."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Dragon Rage",
				fr: "Draco-rage"
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez une pile, cette attaque est sans effet."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	description: {
		fr: "Ce Pokémon est réputé pour être le plus faible au monde. Nul ne sait comment son espèce perdure."
	}
}

export default card
