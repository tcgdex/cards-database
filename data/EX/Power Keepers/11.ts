import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Machoke",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Overzealous",
				fr: "Excès de zèle"
			},
			effect: {
				en: "If your opponent has any Pokémon-ex in play, each of Machamp's attacks does 30 more damage to the Defending Pokémon.",
				fr: "Si votre adversaire possède des Pokémon-ex en jeu, chacune des attaques de Mackogneur inflige 30 dégâts supplémentaires au Pokémon Défenseur."
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
				en: "Brick Smash",
				fr: "Casse-Brique"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross Chop",
				fr: "Coup-croix"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "60+",

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
