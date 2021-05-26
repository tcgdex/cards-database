import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Mandibuzz",
		fr: "Vaututrice"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Vullaby",
		fr: "Vostourno"
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bone Rush",
				fr: "Charge Os"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage for each heads.",
				fr: "Lancez une pièce jusqu’à obtenir un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face."
			},
			damage: "30×",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Blindside",
				fr: "Angle Mort"
			},
			effect: {
				en: "This attack does 100 damage to 1 of your opponent’s Pokémon that has any damage counters on it. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 100 dégâts à l’un des Pokémon de votre adversaire ayant au moins un marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},

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
			value: "-30"
		},
	],

	retreat: 2,
	hp: 120,
	types: ["Darkness"]
}

export default card
