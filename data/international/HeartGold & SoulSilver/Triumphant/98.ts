import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Yanmega",
		'fr-fr': "Yanmega",
		'de-de': "Yanmega"
	},

	illustrator: "Noriko Hotta",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [469],

	hp: 110,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Yanma",
		'fr-fr': "Yanma"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Insight",
				'fr-fr': "Point de vue",
				'de-de': "Einsicht"
			},
			effect: {
				'en-us': "If you have the same number of cards in your hand as your opponent, the attack cost of each of Yanmega's attacks is 0.",
				'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, le coût de chaque attaque de Yanmega est de 0.",
				'de-de': "Wenn du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner, kosten Yanmegas Angriffe 0."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Linear Attack",
				'fr-fr': "Attaque linéaire",
				'de-de': "Linearer Angriff"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 40 dégâts à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an)."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Sonicboom",
				'fr-fr': "Sonicboom",
				'de-de': "Ultraschall"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': "Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 70,

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
			value: "-20"
		},
	],

	retreat: 0,
	suffix: "Prime",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90694,
				cardmarket: 279584
			}
		},
		{
			type: "normal",
			stamp: ['gustavo-wada'],
			thirdParty: {
				tcgplayer: 480526
			}
		},
	],

}

export default card
