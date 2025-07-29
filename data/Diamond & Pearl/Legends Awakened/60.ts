import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Ledian",
		fr: "Coxyclaque",
		de: "Ledian"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		166,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ledyba",
		fr: "Ledyba",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Comet Punch",
				fr: "Poing comète",
				de: "Kometenhieb"
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Baton Pass",
				fr: "Relais",
				de: "Stafette"
			},
			effect: {
				en: "You may switch Ledian with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Ledian as you like to the new Active Pokémon.",
				fr: "Vous pouvez échanger Coxyclaque avec 1 des Pokémon de votre Banc. Déplacez alors sur le nouveau Pokémon Actif autant de cartes Énergie attachées à Coxyclaque que vous le voulez.",
				de: "Du kannst Ledian gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, kannst du eine beliebige Anzahl an Ledian angelegter Energiekarten entfernen und an das neue Aktive Pokémon anlegen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il tire sa force de la lumière des étoiles. Plus il y en a et plus ses motifs dorsaux sont grands."
	},

	thirdParty: {
		cardmarket: 278209
	}
}

export default card
