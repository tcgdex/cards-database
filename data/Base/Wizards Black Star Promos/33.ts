import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox",
		de: "Scherox"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
		de: "Sichlor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leer",
				fr: "Groz'yeux",
				de: "Silberblick"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack Scizor during your opponent's next turn. (Benching either Pokémon ends this effect.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer Cizayox pendant le prochain tour de votre adversaire. (Mettre l'un des deux Pokémon sur le Banc met fin à cet effet.)",
				de: "Wirf eine Münze. Bei „Kopf“ kann das verteidigende Pokémon Scherox während des nächsten Zugs deines Gegners nicht angreifen. (Kommt eins der beiden Pokémon auf die Bank, endet diese Wirkung.)"
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Pincer",
				fr: "Pinces de Métal",
				de: "Metallschneider"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage plus 10 more damage for each heads.",
				fr: "Lancez une pièce jusqu'à ce que ce soit pile. Cette attaque inflige 30 dégâts plus 10 fois le nombre de faces.",
				de: "Wirf eine Münze, bis „Zahl“ kommt. Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte pro geworfenem „Kopf“ zu."
			},
			damage: "30+",

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
	retreat: 2,


	description: {
		en: "Its wings are not used for flying. They are flapped at high speed to adjust its body temperature.",
		fr: "Il n'utilise pas ses ailes pour voler. Elles lui servent à ajuster la température de son corps en les faisant battre rapidement.",
		de: "Seine Flügel sind nicht zum Fliegen gedacht. Das schnelle Flattern hilft dabei, die Körpertemperatur auszugleichen."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88960
			},
		}
	]
}

export default card
