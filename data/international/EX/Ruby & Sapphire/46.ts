import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Swellow",
		'fr-fr': "Heledelle",
		'de-de': "Schwalboss"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [277],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Taillow",
		'fr-fr': "Nirondelle"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Drive Off",
				'fr-fr': "Déroute",
				'de-de': "Wegtreiben"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Swellow is your Active Pokémon, you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. Your opponent picks the Benched Pokémon to switch. This power can't be used if Swellow is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), et si Heledelle est votre Pokémon Actif, vous pouvez échanger un des Pokémon Défenseur par un des Pokémon du Banc de votre adversaire. Votre adversaire peut choisir quel Pokémon de son Banc sera le remplaçant. Ce pouvoir ne peut être utilisé si Heledelle est affecté par un État Spécial.",
				'de-de': "Einmal in deinem Zug (vor deinem Angriff), wenn Schwalboss dein Aktives Pokémon ist, kannst du 1 Verteidigendes Pokémon mit einem gegnerischen Pokémon (dieses wählt dein Gegner aus) auf der Bank austauschen. Diese Poké-Power kann nicht verwendet werden, falls Schwalboss von einem Speziellen Zustand betroffen ist."
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
				'en-us': "Wing Attack",
				'fr-fr': "Cru-aile",
				'de-de': "Flügelschlag"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 0,


	variants: [		{
			type: "normal",
			thirdParty: {
				cardmarket: 275694,
				tcgplayer: 89688
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275694,
				tcgplayer: 89688
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125156
			}
		}
	],

}

export default card
