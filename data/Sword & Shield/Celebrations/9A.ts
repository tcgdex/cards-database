import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [383],
	set: Set,

	name: {
		en: "Team Magma's Groudon",
		fr: "Pikachu Surfeur-VMAX"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Poke-BODY",

		name: {
			en: "Power Saver",
			fr: "Économisateur de puissance"
		},

		effect: {
			en: "As long as the number of Pokémon in play (both yours and your opponent's) that has Team Magma in its name is 3 or less, Team Magma's Groudon can't attack.",
			fr: "Tant que jusqu'à 3 Pokémon (les vôtres et ceux de votre adversaire) dont les noms comportent Team Magma sont en jeu, Groudon de Team Magma ne peut pas attaquer."
		}
	}],

	attacks: [
		{
			name: {
				en: "Linear Attack",
				fr: "Surfeuromax",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			cost: [
				"Fighting",
				"Colorless",
			],
		},
		{
			name: {
				en: "Pulverize",
				fr: "Pulvériser",
			},
			effect: {
				en: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 50 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède au moins 2 marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: "50+",
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
		},
	],

	weaknesses: [{
		type: "Grass",
		value: ""
	}],

	retreat: 3,

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 576781
	}
}

export default card
