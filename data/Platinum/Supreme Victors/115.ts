import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Mime Jr.",
		fr: "Mime Junior",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		439,
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
				en: "Baby Evolution",
				fr: "Évolution bébé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Mr. Mime from your hand onto Mime Jr. (this counts as evolving Mime Jr.) and remove all damage counters from Mime Jr.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer M. Mime de votre main sur Mime Junior (vous le faites ainsi évoluer) et retirer à Mime Junior tous ses marqueurs de dégât.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Encore",
				fr: "Encore",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can use only that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut utiliser que cette attaque lors du prochain tour de votre adversaire.",
			},

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
