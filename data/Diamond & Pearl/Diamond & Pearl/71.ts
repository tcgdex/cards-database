import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Bonsly",
		fr: "Manzai",
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		438,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Sudowoodo from your hand onto Bonsly (this counts as evolving Bonsly) and remove all damage counters from Bonsly.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Simularbre de votre main sur Manzai (vous le faites ainsi évoluer) et retirer à Manzai tous ses marqueurs de dégât.",
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Fake Tears",
				fr: "Croco Larme",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Trainer cards from his or her hand during your opponent's next turn, and any damage done to Bonsly by attacks is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur de sa main lors de son prochain tour et tous dégâts infligés à Manzai par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "On dirait qu'il pleure constamment. En fait, il régule ses fluides corporels en éliminant le surplus."
	}
}

export default card
