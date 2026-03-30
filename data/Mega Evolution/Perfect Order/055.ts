import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Méga-Airmure-ex",
	},
	set: Set,
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				fr: "Étripage Sonique",
			},
			effect: {
				fr: "Mélangez toutes les Énergies attachées à ce Pokémon avec votre deck. Cette attaque inflige 220 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	regulationMark: "J",
	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 877471
	}
}

export default card
