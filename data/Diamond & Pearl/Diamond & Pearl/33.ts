import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Munchlax",
		fr: "Goinfrex",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		446,
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
				fr: "Évolution bébé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Snorlax from your hand onto Munchlax (this counts as evolving Munchlax) and remove all damage counters from Munchlax.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Ronflex de votre main sur Goinfrex (vous le faites ainsi évoluer) et retirer à Goinfrex tous ses marqueurs de dégât.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Heave",
				fr: "Soulèvement",
			},
			effect: {
				en: "Discard 2 cards from your hand. (If you can't discard 2 cards, this attack does nothing.) Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas défausser 2 cartes, cette attaque est sans effet.) Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		fr: "Il avale son poids en nourriture chaque jour. Il avale tout sans prendre le temps de mâcher."
	}
}

export default card
