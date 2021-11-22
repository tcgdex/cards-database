import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Unown Y",
		fr: "Zarbi Y",
	},

	illustrator: "Kazuaki Aihara",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
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
				en: "YAWN",
				fr: "YAWN",
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown Y is on your Bench, you may remove 1 damage counter from 1 of your Active Unown and that Unown is now Asleep.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi Y est sur votre Banc, vous pouvez retirer à votre Zarbi Actif 1 marqueur de dégât. Ce Zarbi est maintenant Endormi.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
			},
			effect: {
				en: "Search your deck for up to 2 Trainer cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 cartes Dresseur, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
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

	description: {
		fr: "Il rappelle une écriture ancienne. Reste à savoir qui du langage ou de Zarbi est apparu en premier."
	}
}

export default card
