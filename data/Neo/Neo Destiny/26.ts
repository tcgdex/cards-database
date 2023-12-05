import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Piloswine",
		fr: "Cochignon lumineux",
		de: "Helles Keifel"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Swinub",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knock Over",
				fr: "Culbute",
				de: "Knock Over"
			},
			effect: {
				en: "If there is a Stadium card in play, you may discard it.",
				fr: "s'il y a une carte Stade en jeu, vous pouvez vous en défausser.",
				de: "If there is a Stadium card ibn play, you may discard it."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Il a de courtes pattes, mais ses sabots sont larges et plats, ce qui lui permet de se déplacer facilement sur la neige."
	},

	abilities: [{
		name: {
			fr: "Duvet",
			de: "Fluffy Wool"
		},

		effect: {
			fr: "Pendant le tour de votre adversaire, si Cochignon est votre Pokémon Actif et si l'attaque de votre adversaire lui inflige des dégâts (même s'il est mis K.O.), lancez une pièce. Si c'est face, le Pokémon attaquant est maintenant Endormi. Ce pouvoir cesse de fonctionner si Cochignon est déjà Endormi, Confus ou Paralysé quand votre adversaire attaque.",
			de: "During your opponent's turn, if Light Piloswine is your Active Pokémon and is damaged by your oppnent's attack (even if it's Knocked Out), flip a coin. If heads, the attacking Pokémon is now Asleep. This power stops working if Light Piloswine is already Asleep, Confused, or Paralyzed when your opponent attacks."
		},

		type: "Pokemon Power"
	}]
}

export default card
