import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Braségali",
		de: "Lohgock"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [257],

	hp: 130,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
		de: "Jungglut"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fire Breath",
				fr: "Haleine de feu",
				de: "Feueratem"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 1 of the Defending Pokémon. That Pokémon is now Burned. This power can't be used if Blaziken is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Brûlé. Ce pouvoir ne peut pas être utilisé si Brasegali est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Verteidigendes Pokémon wählen. Das gewählte Pokémon ist jetzt verbrannt. Diese Poké-Power kann nicht benutzt werden, wenn Lohgock von einem Speziellen Zustand betroffen ist."
			}
		},
	],

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
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				fr: "Danseflamme",
				de: "Feuerwirbel"
			},
			effect: {
				en: "Discard 2 Energy attached to Blaziken.",
				fr: "Défaussez 2 Énergies attachées à Brasegali.",
				de: "Lege 2 an Lohgock angelegte Energien auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	retreat: 1,

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 83910,
				cardmarket: 278424
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278424,
				tcgplayer: 83910
			}
		}
	],

}

export default card
