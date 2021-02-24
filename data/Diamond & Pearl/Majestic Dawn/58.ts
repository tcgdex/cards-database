import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Chingling",
		fr: "Korillon",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		433,
	],
	hp: 40,
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
				en: "Once during your turn (before your attack), you may put Chimecho from your hand onto Chingling (this counts as evolving Chingling) and remove all damage counters from Chingling.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Éoko de votre main sur Korillon (vous le faites ainsi évoluer) et retirer à Korillon tous ses marqueurs de dégât.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Uproar",
				fr: "Brouhaha",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
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
