import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
		de: "Qurtel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [324],

	hp: 80,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Generation",
				fr: "Générateur de pouvoir",
				de: "Kräftige Generation"
			},
			effect: {
				en: "Search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put them into your hand.",
				fr: "Choisissez dans votre pile de défausse jusqu'à deux cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main.",
				de: "Durchsuche deinen Ablagestapel nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Scorching Smoke",
				fr: "Fumée brûlante",
				de: "Versengender Rauch"
			},
			effect: {
				en: "The Defending Pokémon is now Burned. Flip a coin. If tails, discard a Fire Energy card attached to Torkoal.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé. Lancez une pièce. Si c'est pile, défaussez une carte Énergie {R} attachée à Chartor.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt. Wirf 1 Münze. Bei „Zahl“ lege 1 an Qurtel angelegt {R}-Energiekarte auf deinen Ablagestapel."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89966,
				cardmarket: 275889
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89966,
				cardmarket: 275889
			},
		},
	],

}

export default card
