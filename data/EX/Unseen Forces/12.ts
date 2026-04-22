import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Porygon2",
		fr: "Porygon2",
		de: "Porygon2"
	},

	illustrator: "Kagemaru Himeno",
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
				en: "3-D Reset",
				fr: "Redémarrage en 3-D",
				de: "3-D Reset"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), return a Pokémon Tool card attached to 1 of your Pokémon to your hand. This power can't be used if Porygon2 is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), reprenez dans votre main une carte Outil Pokémon attachée à 1 de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Porygon2 est affecté par un État Spécial.",
				de: "As often as you like during your turn (before your attack), return a Pokémon Tool card attached to 1 of your Pokémon to your hand. This power can't be used if Porygon2 is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Data Retrieval",
				fr: "Récupération d'informations",
				de: "Data Retrieval"
			},
			effect: {
				en: "If you have less than 8 cards in your hand, draw cards until you have 8 cards in your hand.",
				fr: "Si vous avez moins de 8 cartes en main, piochez des cartes jusqu'à ce que vous ayez 8 cartes en main.",
				de: "If you have less than 8 cards in your hand, draw cards until you have 8 cards in your hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scramble Trip",
				fr: "Croche-pied codé",
				de: "Scramble Trip"
			},
			effect: {
				en: "If Porygon2 has a Scramble Energy card attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Confused.",
				fr: "Si une carte Énergie codée est attachée à Porygon2, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
				de: "If Porygon2 has a Scramble Energy attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Confused."
			},
			damage: "40+",

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
		cardmarket: 276658,
		tcgplayer: 88324
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
