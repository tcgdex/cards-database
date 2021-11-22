import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Hyporoi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Seadra",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Kingdra.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Hyporoi."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Dragon Tornado",
				fr: "Tornade du dragon"
			},
			effect: {
				en: "If this attack doesn't Knock Out the Defending Pokémon, and if there are any Pokémon on your opponent's Bench, choose 1 of them and switch it with the Defending Pokémon.",
				fr: "Si cette attaque ne met pas K.O. le Pokémon Défenseur, et s'il y a des Pokémon sur le Banc de votre adversaire, choisissez l'un d'eux et échangez-le avec le Pokémon Défenseur"
			},
			damage: 50,

		},
	],

	description: {
		fr: "On prétend qu'il se cache dans des grottes sous-marines. Il peut créer des tourbillons rien que par son bâillement."
	}
}

export default card
