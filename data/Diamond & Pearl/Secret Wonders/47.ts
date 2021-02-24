import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Cloyster",
		fr: "Crustabri",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		91,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Withdraw",
				fr: "Repli",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Cloyster by attacks during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Crustabri par des attaques lors du prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Spine Missile",
				fr: "Missile dorsal",
			},
			effect: {
				en: "Flip 4 coins. For each heads, choose an opponent's Pokémon in play and this attack does 20 damage to those Pokémon. (You may choose the same Pokémon more than once.) (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez 4 pièces. Pour chaque face, choisissez un Pokémon en jeu de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous pouvez choisir le même Pokémon plus d'une fois).  (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
