import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Mélodelfe"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		36,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Clefairy",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metronome",
				fr: "Métronome"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. Metronome copies that attack except for its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. (No matter what type the Defending Pokémon is, Clefable's type is still Colorless.)",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Métronome copie cette attaque à l'exception de son coût d'Énergie et de toute autre action requise pour utiliser cette attaque, comme par exemple, défausser des cartes Énergie. (Quel que soit le type du Pokémon Défenseur, Mélodelfe demeure de type Incolore.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Minimize",
				fr: "Lilliput"
			},
			effect: {
				en: "All damage done by attacks to Clefable during your opponent's next turn is reduce by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Mélodelfe par des attaques pendant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance)."
			},

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
			value: "-30"
		},
	],

	description: {
		fr: "Une sorte de petite fée très rare. Il se cache en apercevant un être humain."
	}
}

export default card
