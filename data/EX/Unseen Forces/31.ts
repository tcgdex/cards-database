import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Smoochum",
		fr: "Lippouti",
		de: "Kussilla"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		238,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Jynx from your hand onto Smoochum (this counts as evolving Smoochum) and remove all damage counters from Smoochum.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Lippoutou de votre main sur Lippouti (vous faites ainsi évoluer Lippouti) et retirer à Lippouti tous ses marqueurs de dégât.",
				de: "Once during your turn (before your attack), you may put Jynx from your hand onto Smoochum (this counts as evolving Smoochum) and remove all damage counters from Smoochum."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Blown Kiss",
				fr: "Baiser volé",
				de: "Blown Kiss"
			},
			effect: {
				en: "Put 1 damage counter on 1 of your opponent's Pokémon.",
				fr: "Placez 1 marqueur de dégât sur 1 des Pokémon de votre adversaire.",
				de: "Put 1 damage counter on 1 of your opponent's Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276677,
		tcgplayer: 89361
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
