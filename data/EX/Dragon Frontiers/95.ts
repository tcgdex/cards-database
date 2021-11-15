import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Latias ex δ",
		fr: "Latias ex δ"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 100,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fellow Boost",
				fr: "Boost amical"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a basic Energy card from your hand to your Latias, Latias ex, Latios or Latios ex. If you do, your turn ends. This power can't be used if Latias ex is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie de base de votre main à votre Latias, Latias ex, Latios ou Latios ex. Votre tour est alors terminé. Ce pouvoir ne peut pas être utilisé si Latias ex est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Power Crush",
				fr: "Puissance écrasante"
			},
			effect: {
				en: "If the Defending Pokémon is Knocked Out by this attack, discard 2 Fire Energy attached to Latias ex.",
				fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, défaussez 2 Énergies  attachées à Latias ex."
			},
			damage: 90,

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
