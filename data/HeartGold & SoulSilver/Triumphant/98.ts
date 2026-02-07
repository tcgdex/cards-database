import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Yanmega",
		fr: "Yanmega",
		de: "Yanmega"
	},

	illustrator: "Noriko Hotta",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		469,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Yanma",
		fr: "Yanma",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Insight",
				fr: "Point de vue",
				de: "Einsicht"
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent the attack cost of each of Yanmega’s attacks is 0.",
				fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, le coût de chaque attaque de Yanmega est de 0.",
				de: "Wenn du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner, kosten Yanmegas Angriffe 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Linear Attack",
				fr: "Attaque linéaire",
				de: "Linearer Angriff"
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon. This attack does 40 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 40 dégâts à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an)."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sonicboom",
				fr: "Sonicboom",
				de: "Ultraschall"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness or Resistance.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
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
		{ type: 'holo', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 279584,
		tcgplayer: 90694
	}
}

export default card
