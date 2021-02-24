import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Jolteon-GX",
		fr: "Voltali-GX",
	},
	illustrator: "PLANETA Otani",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		135,
	],
	hp: 200,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electrobullet",
				fr: "Électrojectile",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Head Bolt",
				fr: "Éclair Frontal",
			},

			damage: 110,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Swift Run GX",
				fr: "Course Rapide-GX",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
				fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
