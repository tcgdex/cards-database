import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Crobat",
		fr: "Nostenfer",
		de: "Iksbat"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Golbat",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Toxic",
				fr: "Toxik d'évolution",
				de: "Entwicklungsgift"
			},
			effect: {
				en: "Once during your turn, when you play Crobat from your hand to evolve 1 of your Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Nostenfer de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d'1 sur ce Pokémon entre deux tours.",
				de: "Einmal während deines Zuges kannst du, wenn du Iksbat von deiner Hand spielst, um 1 deiner Pokémon weiter zu entwickeln, 1 Verteidigendes Pokémon wählen. Das gewählte Pokémon ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das gewählte Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Strike and Fade",
				fr: "Frapper et s'effacer",
				de: "Zuschlagen und Abhauen"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 50 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If tails, shuffle Crobat and all cards attached to it back into your deck.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 50 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Lancez une pièce. Si c'est pile, mélangez Nostenfer et toutes les cartes qui lui sont attachées à votre deck.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 50 Schadenspunkte zu. (Wende Schwäche und Resistenz für Pokémon auf der Bank nicht an.) Wirf 1 Münze. Bei \"Zahl\" mische Iksbat und alle Karten, die an es angelegt sind, zurück in dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		fr: "Il vole rapidement et sans faire de bruit grâce à ses quatre ailes. C'est un Pokémon nocturne."
	}
}

export default card
