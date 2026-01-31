import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Porygon2",
		fr: "Porygon2",
		de: "Porygon2"
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
		en: "Porygon",
		fr: "Porygon"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Backup",
				fr: "Sauvegarde",
				de: "Backup"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have less than 6 cards in your hand, you may draw cards until you have 6 cards in your hand. This power can't be used if Porygon2 is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez moins de 6 cartes en main, vous pouvez piocher des cartes jusqu'à ce vous ayez 6 cartes en main. Ce pouvoir ne peut pas être utilisé si Porygon2 est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), if you have less than 6 cards in your hand, you may draw cards until you have 6 cards in your hand. This power can't be used if Porygon2 is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			name: {
				en: "Machine Burst",
				fr: "Éclate-machine",
				de: "Maschinelle Explosion"
			},

			effect: {
				en: "If Porygon2 has a Technical Machine card attached to it, the Defending Pokémon is now Asleep and Burned.",
				fr: "Si Porygon2 possède une carte Machine Technique, le Pokémon Défenseur est maintenant Endormi et Brûlé.",
				de: "Wenn an Porygon2 eine Technische Maschine anliegt, ist das Verteidigende Pokémon verbrannt und schläft."
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

