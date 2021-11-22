import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Azurill",
		fr: "Azurill",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		298,
	],

	hp: 40,

	types: [
		"Colorless",
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
				en: "Once during your turn (before your attack), you may put Marill from your hand onto Azurill (this counts as evolving Azurill) and remove all damage counters from Azurill.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Marill de votre main sur Azurill (vous le faites ainsi évoluer) et retirer à Azurill tous ses marqueurs de dégât.",
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Delivery",
				fr: "Livraison",
			},
			effect: {
				en: "Put any 1 card from your discard pile into your hand.",
				fr: "Placez n'importe quelle carte de votre pile de défausse dans votre main.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Un Pokémon qui vit près de l'eau. Au sol, il se déplace rapidement en rebondissant sur sa grosse queue"
	}
}

export default card
