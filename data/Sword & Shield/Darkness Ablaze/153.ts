import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Greedent",
		fr: "Rongrigou"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Skwovet",
		fr: "Rongourmand"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scrape Off",
				fr: "Racler"
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tools from your opponent’s Active Pokémon.",
				fr: "Avant d’infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smack and Run",
				fr: "Gifle et Fuite"
			},
			effect: {
				en: "Put this Pokémon and all attached cards into your hand.",
				fr: "Ajoutez à votre main ce Pokémon et toutes les cartes attachées."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
