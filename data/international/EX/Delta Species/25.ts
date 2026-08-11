import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'de-de': "Porygon2"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		233,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Porygon",
		'fr-fr': "Porygon"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Backup",
				'fr-fr': "Sauvegarde",
				'de-de': "Backup"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if you have less than 6 cards in your hand, you may draw cards until you have 6 cards in your hand. This power can't be used if Porygon2 is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si vous avez moins de 6 cartes en main, vous pouvez piocher des cartes jusqu'à ce vous ayez 6 cartes en main. Ce pouvoir ne peut pas être utilisé si Porygon2 est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), if you have less than 6 cards in your hand, you may draw cards until you have 6 cards in your hand. This power can't be used if Porygon2 is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			name: {
				'en-us': "Machine Burst",
				'fr-fr': "Éclate-machine",
				'de-de': "Maschinelle Explosion"
			},

			effect: {
				'en-us': "If Porygon2 has a Technical Machine card attached to it, the Defending Pokémon is now Asleep and Burned.",
				'fr-fr': "Si Porygon2 possède une carte Machine Technique, le Pokémon Défenseur est maintenant Endormi et Brûlé.",
				'de-de': "Wenn an Porygon2 eine Technische Maschine anliegt, ist das Verteidigende Pokémon verbrannt und schläft."
			},

			damage: 30,
			cost: ["Colorless", "Colorless"]
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276788,
		tcgplayer: 88325
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

