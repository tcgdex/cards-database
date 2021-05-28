import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fury Blaze",
				fr: "Flammes frénétiques",
			},
			effect: {
				en: "If your opponent has 3 or less Prize cards left, each of Charizard's attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Si votre adversaire possède moins de 3 cartes Récompense, chacune des attaques de Dracaufeu inflige 50 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Blast Burn",
				fr: "Rafale feu",
			},
			effect: {
				en: "Flip a coin. If heads, discard 2 Energy cards attached to Charizard. If tails, discard 4 Energy cards attached to Charizard. (If you can't, this attack does nothing.)",
				fr: "Lancez une pièce. Si c'est face, défaussez 2 cartes Énergie attachées à Dracaufeu. Si c'est pile, défaussez 4 cartes Énergie attachées à Dracaufeu. (Si vous ne pouvez pas, cette attaque est sans effet).",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+40"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
