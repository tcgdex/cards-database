import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Rattatac",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	stage: "Stage1",
	evolveFrom: {
		fr: "Rattata",
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Racler",
			},
			damage: "20",
			effect: {
				fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			},
		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Incisives Vengeance",
			},
			damage: "40×",
			effect: {
				fr: "Cette attaque inflige 40 dégâts pour chaque marqueur de dégâts sur vos Rattata de Banc.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Minahamu",

	thirdParty: {
		cardmarket: 877477
	}
}

export default card
