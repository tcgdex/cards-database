import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Espeon",
		fr: "Mentali",
		de: "Psiana"
	},

	illustrator: "match",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Solar Suggestion",
				fr: "Suggestion solaire",
				de: "Sonnen-Andeutung"
			},
			effect: {
				en: "Move up to 4 damage counters from any of your Pokémon to any of your opponent's Pokémon in any way you like.",
				fr: "Retirez jusqu'à 4 marqueurs de dégât à vos Pokémon et placez-les comme vous le voulez sur les Pokémon de votre adversaire.",
				de: "Verschiebe bis zu 4 Schadensmarken von beliebigen deiner Pokémon in beliebiger Verteilung auf die gegnerischen Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale psy",
				de: "Psystrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 279647,
		tcgplayer: 85324
	}
}

export default card
