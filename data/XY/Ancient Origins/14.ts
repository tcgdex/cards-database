import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Entei",
		fr: "Entei",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		244,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Burning Roar",
				fr: "Rugissement Brûlant",
			},
			effect: {
				en: "Discard the top 4 cards of your deck. If any of those cards are Fire Energy cards, attach them to your Pokémon in any way you like.",
				fr: "Défaussez les 4 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fire, attachez-les à vos Pokémon, de la manière que vous voulez.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Combat Blaze",
				fr: "Brasier de Combat",
			},
			effect: {
				en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
