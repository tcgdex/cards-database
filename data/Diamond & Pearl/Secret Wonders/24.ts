import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Dig Trap",
				fr: "Creuse-piège",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Dugtrio during your opponent's next turn. If Dugtrio is your Active Pokémon at the end of your opponent's next turn, put 6 damage counters on 1 of your opponent's Benched Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Triopikeur lors du prochain tour de votre adversaire. Si Triopikeur est votre Pokémon Actif à la fin du prochain tour de votre adversaire, placez 6 marqueurs de dégât sur 1 des Pokémon de Banc de votre adversaire.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Pit Trap",
				fr: "Trou piégé",
			},
			effect: {
				en: "Your opponent flips a coin. If tails, this attack does 50 damage plus 50 more damage.",
				fr: "Votre adversaire lance une pièce. Si c'est pile, cette attaque inflige 50 dégâts plus 50 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],




}

export default card
