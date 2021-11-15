import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Tangela",
		fr: "Saquedeneu"
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		114,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reactive Healing",
				fr: "Guérison réactive"
			},
			effect: {
				en: "Whenever you attach a React Energy card from your hand to Tangela, remove all damage counters from Tangela.",
				fr: "Lorsque vous attachez une carte Énergie réaction de votre main à Saquedeneu, retirez à Saquedeneu tous ses marqueurs de dégât."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Entangling Vines",
				fr: "Plantes emmêlantes"
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, that Pokémon can't attack during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est une Pokémon de base, il ne peut pas attaquer lors du prochain tour de votre adversaire."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gentle Wrap",
				fr: "Enveloppe douce"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card
