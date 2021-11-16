import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Alakazam Star",
		fr: "Alakazam"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		65,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Select",
				fr: "Sélection psy"
			},
			effect: {
				en: "Put any 1 card from your discard pile into your hand.",
				fr: "Placez n'importe quelle carte de votre pile de défausse dans votre main."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Skill Copy",
				fr: "Copiage pro"
			},
			effect: {
				en: "Discard a Basic Pokémon or Evolution card from your hand. Choose 1 of that card's attacks. Skill Copy copies that attack. This attack does nothing if Alakazam Star doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Alakazam Star performs that attack.",
				fr: "Défaussez un Pokémon de base ou une carte Évolution de votre main. Choisissez 1 des attaques de cette carte. Copiage pro copie cette attaque. Cette attaque est sans effet si Alakazam  ne possède pas l'Énergie nécessaire pour utiliser cette attaque. (Vous devez faire tout ce qui est spécifié pour cette attaque.) Alakazam  utilise cette attaque."
			},

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
