import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Unown F",
		fr: "Zarbi F",
	},
	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "FAKE",
				fr: "FAUX",
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown F is on your Bench, you may use this power. Put a coin next to your Active Pokémon without showing your opponent and cover it with your hand. Your opponent guesses if the coin is heads or tails. If he or she is wrong, draw a card.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi F est sur votre Banc, vous pouvez utiliser ce pouvoir. Placez une pièce à côté de votre Pokémon Actif. Ne la montrez pas à votre adversaire et cachez-la avec votre main. Votre adversaire doit deviner si c'est pile ou face. S'il ou elle a tort, piochez une carte.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
			},
			effect: {
				en: "You may flip a coin. If tails, this attack does nothing. If heads, this attack's base damage is 30.",
				fr: "Vous pouvez lancer une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, les dégâts de base de cette attaque sont de 30.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
