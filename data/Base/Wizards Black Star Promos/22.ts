import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Articuno",
		fr: "Artikodin"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		144,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Diamond Dust",
				fr: "Poussière de diamant"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed, and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et cette attaque inflige 10 dégâts à chacun des Pokémon du Banc de votre adversaire. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)"
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "On prétend que ce Pokémon légendaire refroidit l'eau contenue dans l'air en hiver, au point de provoquer des chutes de neige."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			subtype: "aoki-error"
		}
	]
}

export default card
