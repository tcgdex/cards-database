import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Kyogre Star",
		fr: "Kyogre ☆"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		382,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Critical Collection",
				fr: "Collection difficile"
			},
			effect: {
				en: "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many Water Energy cards and attach them to Kyogre Star.",
				fr: "Comptabilisez le nombre de cartes Récompense récoltées par votre adversaire. Cherchez dans votre pile de défausse le même nombre de cartes Énergie  et attachez-les à Kyogre ."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sheer Cold",
				fr: "Glaciation"
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, chaque Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
