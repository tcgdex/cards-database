import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Happiny",
		fr: "Ptiravi"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		440,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Chansey from your hand onto Happiny (this counts as evolving Happiny) and remove all damage counters from Happiny.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Leveinard de votre main sur Ptiravi (vous le faites ainsi évoluer) et retirer à Ptiravi tous ses marqueurs de dégât."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Lively",
				fr: "Vitalité"
			},
			effect: {
				en: "Remove 2 damage counters from 1 of your Pokémon.",
				fr: "Retirez à 1 de vos Pokémon 2 marqueurs de dégât."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	description: {
		fr: "Ce Pokémon aime ce qui est rond et blanc et transporte un caillou en forme d'œuf pour imiter Leveinard."
	}
}

export default card
