import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Tropius",
		fr: "Tropius",
		de: "Tropius"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		357,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Tropical Motion",
				fr: "Mouvement tropical",
				de: "Tropical Motion"
			},
			effect: {
				en: "As long as Tropius is your Active Pokémon, your opponent's Pokémon have no Resistance.",
				fr: "Tant que Tropius est votre Pokémon Actif, le Pokémon de votre adversaire n'a pas de Résistance.",
				de: "As long as Tropius is your Active Pokémon, your opponent's Active Pokémon have noch Resistance."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Miracle Blow",
				fr: "Coup miraculeux",
				de: "Miracle Blow"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
				fr: "Lancez une pièce. Si c'est face, choisissez 1 État Spécial. Le Pokémon Défenseur est maintenant affecté par cet État Spécial.",
				de: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stomp",
				fr: "Écrasement",
				de: "Stomp"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 90058,
		cardmarket: 276430
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
