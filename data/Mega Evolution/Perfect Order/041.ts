import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Démétéros",
	},
	set: Set,
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Roule-Pierre",
			},
			damage: "50",
			effect: {
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Poing Vis",
			},
			damage: "120",
			effect: {
				fr: "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			},
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "aoki",

	thirdParty: {
		cardmarket: 877455
	}
}

export default card
