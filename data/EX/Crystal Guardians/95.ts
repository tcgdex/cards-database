import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Kyogre ex",
		fr: "Kyogre ex",
		de: "Kyogre ex"
	},

	illustrator: "Yasuki Watanabe",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 100,

	types: [
		"Water",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Flotation",
				fr: "Flotage",
				de: "Schweben"
			},
			effect: {
				en: "As long as Kyogre ex has 1 Energy or less attached to it, the Retreat Cost for each of your Kyogre ex is 0.",
				fr: "Tant que Kyogre ex possède un maximum d'1 Énergie, le Coût de retraite de chacun de vos Kyogres est de 0.",
				de: "Solange an Kyogre ex 1 oder weniger Energien angelegt sind, haben alle deine Kyogre ex Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hydro Shot",
				fr: "Hydro-coup",
				de: "Hydroschuss"
			},
			effect: {
				en: "Discard 2 Energy attached to Kyogre ex. Choose 1 of your opponent's Pokémon. This attack does 70 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies attachées à Kyogre ex. Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 70 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Lege 2 Energien, die an Kyogre ex angelegt sind, auf deinen Ablagestapel. Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 70 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277176,
		tcgplayer: 86557
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
