import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Victreebel",
		'fr-fr': "Empiflor",
		'de-de': "Sarzenia"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [71],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Fragrance Trap",
				'fr-fr': "Piège parfumé",
				'de-de': "Aromafalle"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it. This Power can't be used if Victreebel is affected by a Special Condition.",
				'fr-fr': "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, choisissez un des Pokémon du Banc de votre adversaire et échangez-le contre le Pokémon Défenseur. Ce pouvoir ne peut pas être utilisé si Empliflor est affecté par un État spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Wähle bei \"Kopf\" 1 der Pokémon auf der Bank deines Gegners und tausche es mit dem Verteidigenden Pokémon. Diese Fähigkeit kann nicht verwendet werden, falls Sarzenia von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Corrosive Acid",
				'fr-fr': "Acide corrosif",
				'de-de': "Zersetzendes Gift"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 90361,
				cardmarket: 275068
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90361,
				cardmarket: 275068
			}
		},
	]
}

export default card
