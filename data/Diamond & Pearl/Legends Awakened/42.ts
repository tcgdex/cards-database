import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Unown !",
		fr: "Zarbi !",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
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
				en: "!",
				fr: "!",
			},
			effect: {
				en: "Once during your turn, when you put Unown ! from your hand onto your Bench, you may flip a coin. If heads, put 2 damage counters on 1 of your opponent's Pokémon. If tails, put 2 damage counters on 1 of your Pokémon.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Zarbi ! de votre main sur votre Banc, vous pouvez lancer une pièce. Si c'est face, placez 2 marqueurs de dégât sur 1 des Pokémon de votre adversaire. Si c'est pile, placez 2 marqueurs de dégât sur 1 de vos Pokémon.",
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
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, Unown ! does 10 damage to itself, and this attack's damage isn't affected by Weakness or Resistance.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si c'est pile, Zarbi ! s'inflige 10 dégâts et les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
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
