import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		71,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Reactive Poison",
				fr: "Poison Réactif",
			},
			effect: {
				en: "This attack does 60 more damage for each Special Condition affecting your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gastro Acid",
				fr: "Suc Digestif",
			},
			effect: {
				en: "The Defending Pokémon has no Abilities until the end of your next turn.",
				fr: "Le Pokémon Défenseur n’a pas de talent jusqu’à la fin de votre prochain tour.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
