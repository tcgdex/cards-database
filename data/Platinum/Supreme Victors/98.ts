import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Chingling",
		fr: "Korillon",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		433,
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
				en: "Once during your turn (before your attack), you may put Chimecho from your hand onto Chingling (this counts as evolving Chingling) and remove all damage counters from Chingling.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Éoko de votre main sur Korillon (vous le faites ainsi évoluer) et retirer à Korillon tous ses marqueurs de dégât.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Chime",
				fr: "Carillon",
			},
			effect: {
				en: "Search your opponent's discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your opponent's discard pile.)",
				fr: "Choisissez dans la pile de défausse de votre adversaire une carte Supporter et utilisez l'effet de cette carte comme l'effet de cette attaque. (La carte Supporter reste dans la pile de défausse de votre adversaire.)",
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
