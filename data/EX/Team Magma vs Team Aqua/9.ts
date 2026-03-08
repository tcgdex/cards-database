import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Groudon",
		fr: "Groudon de Team Magma",
		de: "Team Magmas Groudon"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 100,

	types: [
		"Fighting",
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Power Saver",
				fr: "Économisateur de puissance",
				de: "Power Saver"
			},
			effect: {
				en: "As long as the number of Pokémon in play (both yours and your opponent's) that has Team Magma in its name is 3 or less, Team Magma's Groudon can't attack.",
				fr: "Tant que jusqu'à 3 Pokémon (les vôtres et ceux de votre adversaire) dont les noms comportent Team Magma sont en jeu, Groudon de Team Magma ne peut pas attaquer.",
				de: "As long as the number of Pokémon in play (both yours and your opponent's) that Team Magma in its name is 3 or less, Team Magma's Groudon can't attack."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Linear Attack",
				fr: "Attaque linéaire",
				de: "Linear Attack"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Choose 1 of your opponent's Pokémon. This attack doeas 20 damage to that Pokémon. (Don't apply Weakness and resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Pulverize",
				fr: "Pulvériser",
				de: "Pulverize"
			},
			effect: {
				en: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 50 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède au moins 2 marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				de: "If the Defending Pokémon already has at last 2 damage counters on it, this attack does 50 damage plus 20 more damage."
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

	thirdParty: {
		cardmarket: 275986,
		tcgplayer: 89827
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			stamp: ["tsuguyoshi-yamato"]
		},
		{
			type: "normal",
		}
	]
}

export default card
