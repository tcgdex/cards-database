import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Clefable ex",
		fr: "Mélodelfe ex"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		36,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Clefairy",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metronome",
				fr: "Métronome"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) (No matter what type that Pokémon is, Clefable ex's type is still Colorless.) Clefable ex performs that attack. \"",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Métronome copie cette attaque sans tenir compte du Coût en Énergie. (Vous devez tout de même respecter les autres étapes si vous voulez utiliser cette attaque.) (Peu importe le type du Pokémon Défenseur, le type de Mélodelfe ex reste .) C'est Mélodelfe ex qui utilise cette attaque."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moon Impact",
				fr: "Impact lunaire"
			},

			damage: 40,

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
