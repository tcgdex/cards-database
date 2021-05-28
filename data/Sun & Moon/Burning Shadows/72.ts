import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Sawk",
		fr: "Karaclée",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		539,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Quick Guard",
				fr: "Prévention",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from Basic Pokémon during your opponent's next turn. This Pokémon can't use Quick Guard during your next turn.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base pendant le prochain tour de votre adversaire. Ce Pokémon ne peut pas utiliser Prévention pendant votre prochain tour.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Brick Break",
				fr: "Casse-Brique",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance or any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
