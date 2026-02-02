import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "Mew δ",
		fr: "Mew δ"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Copy",
				fr: "Copiage"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon’s attacks. Copy copies that attack. This attack does nothing if Mew doesn’t have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Mew performs that attack.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Copiage copie cette attaque. Cette attaque est sans effet si Mew ne possède pas suffisamment d'Énergie pour utiliser cette attaque. (Vous devez toujours faire ce que l'attaque indique.) Mew utilise cette attaque."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Extra Draw",
				fr: "Pioche supplémentaire"
			},
			effect: {
				en: "If your opponent has any Pokémon-ex in play, search your deck for up to 2 basic Energy cards and attach them to Mew. Shuffle your deck afterward.",
				fr: "Si votre adversaire a des Pokémon-ex en jeu, cherchez dans votre deck jusqu'à 2 cartes Énergie de base et attachez-les à Mew. Ensuite, mélangez votre deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277485
	}
}

export default card
