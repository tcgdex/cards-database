import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
		es: "Meowstic",
		it: "Meowstic",
		pt: "Meowstic",
		de: "Psiaugon"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		678,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Allure",
				fr: "Allure",
				es: "Atractivo",
				it: "Affascinante",
				pt: "Fascinar",
				de: "Verlockung"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
				es: "Roba 3 cartas.",
				it: "Pesca tre carte.",
				pt: "Compre 3 cartas.",
				de: "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hand Kinesis",
				fr: "Télékinésie en Main",
				es: "Manoquinesis",
				it: "Manocinèsi",
				pt: "Cinese de Mão",
				de: "Handkinese"
			},
			effect: {
				en: "This attack does 10 damage for each card in your hand.",
				fr: "Cette attaque inflige 10 dégâts pour chaque carte dans votre main.",
				es: "Este ataque hace 10 puntos de daño por cada carta en tu mano.",
				it: "Questo attacco infligge 10 danni per ogni carta nella tua mano.",
				pt: "Este ataque causa 10 pontos de dano para cada carta na sua mão.",
				de: "Diese Attacke fügt 10 Schadenspunkte mal der Anzahl der Karten auf deiner Hand zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299464,
		tcgplayer: 138542
	}
}

export default card
