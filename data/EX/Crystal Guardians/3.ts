import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Camerupt",
		fr: "Camerupt",
		de: "Camerupt"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		323,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Numel",
		fr: "Chamallot"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Delta Protection",
				fr: "Protection Delta",
				de: "Delta-Schutz"
			},
			effect: {
				en: "Any damage done to Camerupt by attacks from your opponent's Pokémon that has δ on its card is reduced by 40 (after applying Weakness and Resistance).",
				fr: "Tous dégâts infligés à Camerupt par des attaques de Pokémon de votre adversaire possédant le symbole δ sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
				de: "Jeder Schaden, der Camerupt durch Angriffe von gegnerischen Pokémon, auf denen δ zu sehen ist, zugefügt wird, wird um 40 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Linear Attack",
				fr: "Attaque linéaire",
				de: "Linearer Angriff"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				de: "Glühen"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277084,
		tcgplayer: 84092
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
