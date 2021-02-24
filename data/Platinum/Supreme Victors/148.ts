import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Articuno",
		fr: "Artikodin",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Rare",
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
				fr: "Poussière de diamant",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
