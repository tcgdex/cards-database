import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Avalugg",
		fr: "Séracrawl",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		713,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Bergmite",
		fr: "Grelaçon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Melting Floe",
				fr: "Banquise Fondante",
			},
			effect: {
				en: "Discard the top 3 cards of your deck. For each Water Energy card you discarded in this way, discard the top 3 cards of your opponent's deck.",
				fr: "Défaussez les 3 cartes du dessus de votre deck. Pour chaque carte Énergie Water défaussée de cette façon, défaussez les 3 cartes du dessus du deck de votre adversaire.",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
