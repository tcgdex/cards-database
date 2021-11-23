import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		fr: "Pikachu",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pika Punch",
				fr: "Pika-poing",
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Bolt",
				fr: "Boulon vitesse",
			},
			effect: {
				en: "If Pikachu evolved from Pichu during this turn, prevent all effects of an attack, including damage, done to Pikachu during your opponent's next turn.",
				fr: "Si Pikachu a évolué de Pichu lors de ce tour, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Pikachu lors du prochain tour de votre adversaire.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		fr: "Il vit en forêt avec ses pairs. Il accumule l'électricité dans les poches de ses joues."
	}
}

export default card
