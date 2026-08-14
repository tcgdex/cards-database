import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Conkeldurr",
		fr: "Bétochef",
		es: "Conkeldurr",
		it: "Conkeldurr",
		pt: "Conkeldurr",
		de: "Meistagrif"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		534,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Gurdurr",
		fr: "Ouvrifier",
		de: "Strepoli"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Chip Away",
				fr: "Attrition",
				de: "Zermürben"
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
				de: "Der Schaden dieses Angriffs wird durch Effekte auf dem Verteidigenden Pokémon nicht verändert."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Swing Around",
				fr: "Balançoire",
				de: "Gegenschwung"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 weitere Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "They use concrete pillars as walking canes. They know moves that enable them to swing the pillars freely in battle.",
		de: "Besitzt die Fähigkeit, die Säulen, die es als Gehstöcke verwendet, ganz ohne Krafteinsatz umherzuschwingen."
	},

	thirdParty: {
		cardmarket: 280187,
		tcgplayer: 84419
	}
}

export default card
