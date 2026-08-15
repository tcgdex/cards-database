import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Moltres-EX",
		fr: "Sulfura-EX",
		es: "Moltres-EX",
		it: "Moltres-EX",
		pt: "Moltres-EX",
		de: "Lavados-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		146,
	],
	hp: 170,
	types: [
		"Fire",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Destructive Flame",
				fr: "Flamme Destructrice",
				de: "Verzehrende Flamme"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Lege bei „Kopf“ 1 an das Verteidigende Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Flame",
				fr: "Flamme Vigoureuse",
				de: "Mächtige Flamme"
			},
			effect: {
				en: "If this Pokémon has any Plasma Energy attached to it, this attack does 40 more damage.",
				fr: "Si de l'Énergie Plasma est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Wenn an dieses Pokémon bereits Plasma-Energie angelegt ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
