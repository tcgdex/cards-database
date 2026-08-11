import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Groudon",
		'fr-fr': "Groudon de Team Magma",
		'de-de': "Team Magmas Groudon"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [383],

	hp: 100,

	types: [
		"Fighting",
		"Darkness"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Power Saver",
				'fr-fr': "Économisateur de puissance",
				'de-de': "Power Saver"
			},
			effect: {
				'en-us': "As long as the number of Pokémon in play (both yours and your opponent's) that has Team Magma in its name is 3 or less, Team Magma's Groudon can't attack.",
				'fr-fr': "Tant que jusqu'à 3 Pokémon (les vôtres et ceux de votre adversaire) dont les noms comportent Team Magma sont en jeu, Groudon de Team Magma ne peut pas attaquer.",
				'de-de': "As long as the number of Pokémon in play (both yours and your opponent's) that Team Magma in its name is 3 or less, Team Magma's Groudon can't attack."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Linear Attack",
				'fr-fr': "Attaque linéaire",
				'de-de': "Linear Attack"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack doeas 20 damage to that Pokémon. (Don't apply Weakness and resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Pulverize",
				'fr-fr': "Pulvériser",
				'de-de': "Pulverize"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède au moins 2 marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon already has at last 2 damage counters on it, this attack does 50 damage plus 20 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275786,
				tcgplayer: 89827
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275786,
				tcgplayer: 89827
			}
		},
		{
			type: "holo",
			stamp: ["tsuguyoshi-yamato"],
			thirdParty: {
				tcgplayer: 477451
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125255
			}
		}
	]
}

export default card
