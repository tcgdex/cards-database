import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Raikou",
		fr: "Raikou",
		de: "Raikou"
	},
	illustrator: "Noriko Hotta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		243,
	],
	hp: 90,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Extreme Speed",
				fr: "Vitesse extrême",
				de: "Turbotempo"
			},
			effect: {
				en: "Raikou's Retreat Cost is Colorless less for each Lightning Energy attached to Raikou.",
				fr: "Le Coût de retraite de Raikou est Colorless de moins pour chaque Énergie Lightning attachée à Raikou",
				de: "Die Rückzugskosten von Raikou verringern sich für jede an Raikou angelegte -Energie um ."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Raging Thunder",
				fr: "Tonnerre déchaîné",
				de: "Tosender Donner"
			},
			effect: {
				en: "Does 20 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage.",
				fr: "Inflige 20 dégâts à 1 de vos Pokémon. N’appliquez ni la Faiblesse ni la Résistance à ces dégâts.",
				de: "Dieser Angriff fügt einem deiner Pokémon 20 Schadenspunkte zu; wende dabei Schwäche und Resistenz nicht an."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
