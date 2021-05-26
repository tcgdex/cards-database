import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Sandile",
		fr: "Mascaïman",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		551,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Grandiose Fangs",
				fr: "Crocs Grandioses",
			},
			effect: {
				en: "If your opponent's Pokémon is Knocked Out by damage from this attack, this Pokémon's attacks do 120 more damage to your opponent's Active Pokémon during your next turn (before applying Weakness and Resistance).",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, les attaques de ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire pendant votre prochain tour (avant application de la Faiblesse et de la Résistance).",
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
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
