import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Wynaut",
		fr: "Okeoke"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
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
				en: "Once during your turn (before your attack), you may put Wobbuffet from your hand onto Wynaut (this counts as evolving Wynaut), and remove all damage counters from Wynaut.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer Qulbutoké de votre main sur Okeoke (vous faites ainsi évoluer Okeoke). Retirez à Okeoke tous ses marqueurs de dégât."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Alluring Smile",
				fr: "Sourire attractif"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon card or Evolution card for each Energy attached to Wynaut, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck un Pokémon de base ou une carte Évolution pour chaque Énergie attachée à Okeoke. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck."
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
