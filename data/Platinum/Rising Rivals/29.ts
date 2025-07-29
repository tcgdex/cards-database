import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking Niv. 59",
		de: "Nidoking"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Territoriality",
				fr: "Territorialité",
				de: "Rasierverhalten"
			},
			effect: {
				en: "If your Active Pokémon is damaged by an opponent's attack (even if that Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon. You can't put more than 2 damage counters in this way.",
				fr: "Si l'attaque de votre adversaire inflige des dégâts à votre Pokémon Actif (même si ce Pokémon est mis K.O), placez 2 marqueurs de dégât sur le Pokémon Attaquant. Vous ne pouvez pas placer plus de 2 marqueurs de dégât de cette façon.",
				de: "Wenn dein Aktives Pokémon durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 2 Schadensmarken auf das Angreifende Pokémon. Du kannst auf diese Weise nicht mehr als 2 Schadensmarken verteilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fling Away",
				fr: "Catapulte",
				de: "Wegschleudern"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, this attack's base damage is 30 instead of 60 and this attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire possède des Pokémon de Banc, les dégâts de base de cette attaque sont de 30 au lieu de 60 et cette attaque inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Wenn dein Gegner mindestens 1 Pokémon auf seiner Bank hat, beträgt der Grundschaden dieses Angriffs 30 Schadenspunkte anstelle von 60 Schadenspunkten und dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Horn",
				fr: "Giga corne",
				de: "Gigahorn"
			},
			effect: {
				en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si ce sont des piles, cette attaque est sans effet.",
				de: "Wirf 2 Münzen. Wenn beide \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278603
	}
}

export default card
