import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Electabuzz δ",
		fr: "Elektek δ ESPÈCES DELTA"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		125,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Power of Evolution",
				fr: "Puissance d'évolution"
			},
			effect: {
				en: "Once during your turn (before your attack), if Electabuzz is an Evolved Pokémon, you may draw a card from the bottom of your deck. This power can't be used if Electabuzz is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Elektek est un Pokémon Évolué, vous pouvez piocher une carte du dessous de votre deck. Ce pouvoir ne peut pas être utilisé si Elektek est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Swift",
				fr: "Météores"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
