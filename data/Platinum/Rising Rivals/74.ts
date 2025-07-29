import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Nidorino",
		fr: "Nidorino Niv. 30",
		de: "Nidorino"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Toxic",
				fr: "Toxik",
				de: "Toxin"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das Verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frustration",
				fr: "Frustration",
				de: "Frustration"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that doesn't have any damage counters on it. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire qui ne possède pas de marqueurs de dégât. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Wähle 1 Pokémon deines Gegners, auf dem keine Schadensmarken liegen. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278648
	}
}

export default card
