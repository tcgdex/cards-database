import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Méga-Staross-ex",
	},
	set: Set,
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	stage: "Stage1",
	evolveFrom: {
		fr: "Stari",
	},
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Coup Éclaboussant",
			},
			damage: "120",
			effect: {
				fr: "Cette attaque inflige aussi 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Rayon Nébuleux",
			},
			damage: "210",
			effect: {
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			},
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 877519
	}
}

export default card
