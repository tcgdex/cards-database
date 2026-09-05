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
	cameoDexIds: [220],

	dexId: [
		221,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Swinub",
		fr: "Marcacrin",
		de: "Quiekel"
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
				de: "Umwerfen"
			},
			effect: {
				en: "If there is a Stadium card in play, you may discard it.",
				fr: "s'il y a une carte Stade en jeu, vous pouvez vous en défausser.",
				de: "Falls eine Stadion-Karte im Spiel ist, darfst du sie auf den Ablagestapel ihres Besitzers legen."
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
	retreat: 3,


	description: {
		en: "Its legs are short, but its hooves are wide and flat, allowing it to easily walk over snow.",
		fr: "Il a de courtes pattes, mais ses sabots sont larges et plats, ce qui lui permet de se déplacer facilement sur la neige.",
		de: "Seine Beine sind kurz, aber seine Hufe sind breit und flach, sodass es einfach über Schnee gehen kann."
	},

	abilities: [{
		name: {
			fr: "Duvet",
			de: "Wuschelwolle"
		},

		effect: {
			fr: "Pendant le tour de votre adversaire, si Cochignon est votre Pokémon Actif et si l'attaque de votre adversaire lui inflige des dégâts (même s'il est mis K.O.), lancez une pièce. Si c'est face, le Pokémon attaquant est maintenant Endormi. Ce pouvoir cesse de fonctionner si Cochignon est déjà Endormi, Confus ou Paralysé quand votre adversaire attaque.",
			de: "Wirf eine Münze, wenn Helles Keifel dein aktives Pokémon ist und im Zug deines Gegners von einem Angriff deines Gegners Schaden nimmt (selbst wenn es kampfunfähig ist). Bei „Kopf“ schläft das verteidigende Pokémon jetzt. Diese Fähigkeit verliert ihre Wirkung, falls Helles Keifel bereits schläft, verwirrt oder gelähmt ist, wenn dein Gegner angreift."
		},

		type: "Pokemon Power"
	}],


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274678,
				tcgplayer: 86747
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274678,
				tcgplayer: 86747
			}
		}
	]
}

export default card
