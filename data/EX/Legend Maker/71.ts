import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Wynaut",
		fr: "Okéoké"
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		360,
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
				fr: "Évolution bébé"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Wobbuffet from your hand onto Wynaut (this counts as evolving Wynaut) and remove all damage counters from Wynaut.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Qulbutoké de votre main sur Okéoké (vous le faites ainsi évoluer) et retirer à Okéoké tous ses marqueurs de dégât."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Confusion Wave",
				fr: "Vague de confusion"
			},
			effect: {
				en: "Both Wynaut and the Defending Pokémon are now Confused.",
				fr: "Okéoké et le Pokémon Défenseur sont maintenant Confus."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
