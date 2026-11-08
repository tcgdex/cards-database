import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Blaziken",
		'fr-fr': "Brasegali",
		'de-de': "Lohgock"
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
		'en-us': "Combusken",
		'fr-fr': "Galifeu"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Fire Breath",
				'fr-fr': "Haleine de feu",
				'de-de': "Fire Breath"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may choose 1 of the Defending Pokémon. That Pokémon is now Burned. This power can't be used if Blaziken is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Brûlé. Ce pouvoir ne peut pas être utilisé si Brasegali est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may choose 1 of the Defending Pokémon. That Pokémon is now Burned. This power can't be used if Blaziken is affected by a Special Condition."
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
				'en-us': "Clutch",
				'fr-fr': "Serre",
				'de-de': "Clutch"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "The Defending Pokémon can't retreat during your opponent's next turn."
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
				'en-us': "Fire Spin",
				'fr-fr': "Danseflamme",
				'de-de': "Fire Spin"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to Blaziken.",
				'fr-fr': "Défaussez 2 Énergies attachées à Brasegali.",
				'de-de': "Discard 2 Energy attached to Blaziken."
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
