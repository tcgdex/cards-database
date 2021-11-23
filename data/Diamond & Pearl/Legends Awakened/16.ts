import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		442,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Curse Breath",
				fr: "Haleine maléfique",
			},
			effect: {
				en: "Once during your turn, when you put Spiritomb from your hand onto your Bench, you may put 1 damage counter on all Pokémon that already have any damage counters on them (both yours and your opponent's). You can't use more than 1 Curse Breath Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Spiritomb de votre main sur votre Banc, vous pouvez placer 1 marqueur de dégât sur tous les Pokémon possédant déjà des marqueurs de dégât (les vôtres et ceux de votre adversaire). Vous ne pouvez pas utiliser plus d'1 Poké-Power Haleine maléfique par tour.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Transfer Pain",
				fr: "Transfert de douleur",
			},
			effect: {
				en: "Move 1 damage counter from 1 of your Pokémon to 1 of your opponent's Pokémon.",
				fr: "Déplacez 1 marqueur de dégât d'1 de vos Pokémon sur 1 des Pokémon de votre adversaire.",
			},

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		fr: "Un Pokémon composé de 108 esprits. Il provient d'une fissure dans une clé de voûte étrange."
	}
}

export default card
