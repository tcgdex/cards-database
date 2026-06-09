import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		de: "Alpollo"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Time Spiral",
				fr: "Spirale temporelle",
				de: "Zeitspirale"
			},
			effect: {
				en: "If your opponent has any Evolved Pokémon in play, choose 1 of them and flip a coin. If heads, remove the highest Stage Evolution card on that Pokémon and have your opponent shuffled it into his or her deck.",
				fr: "Si votre adversaire a des Pokémon Évolués en jeu, choisissez-en 1 et lancez une pièce. Si c'est face, retirez à ce Pokémon sa carte Évolution au niveau le plus élevé et demandez à votre adversaire de la mélanger à son deck.",
				de: "Falls dein Gegner mindestens 1 entwickeltes Pokémon im Spiel hat, wähle 1 seiner entwickelten Pokémon und wirf 1 Münze. Bei \"Kopf\" entferne die höchste Evolutionskarte von diesem Pokémon. Dein Gegner mischt diese Karte in sein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Haunt",
				fr: "Hanter",
				de: "Spuk"
			},
			effect: {
				en: "Put 2 damage counters on the Defending Pokémon.",
				fr: "Placez 2 marqueurs de dégât sur le Pokémon Défenseur.",
				de: "Lege 2 Schadensmarken auf das Verteidigende Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276912,
		tcgplayer: 86026
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
