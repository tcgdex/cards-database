import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Mawile",
		fr: "Mysdibule"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		303,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mining",
				fr: "Minage"
			},
			effect: {
				en: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. If that card is a Pokémon Tool card, you may attach it to 1 of your Pokémon instead. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main. Si cette carte est une carte Outil Pokémon, vous pouvez l'attacher à 1 de vos Pokémon. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Bite Off",
				fr: "Arracher d'un coup de dent"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 20 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
