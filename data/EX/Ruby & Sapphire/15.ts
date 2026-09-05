import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Braségali",
		de: "Lohgock"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [257],

	hp: 110,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
		de: "Jungglut"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clutch",
				fr: "Serre",
				de: "Greifer"
			},
			effect: {
				en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite tant que le prochain tour de votre adversaire n'est pas terminé.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegner nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-flamme",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard a Fire Energy card attached to Blaziken.",
				fr: "Défaussez une carte Énergie {R} attachée à Brasegali.",
				de: "Lege 1 an Lohgock angelegte {R}-Energiekarte auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275663,
				tcgplayer: 83904
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275663,
				tcgplayer: 83904
			}
		},
	],

}

export default card
