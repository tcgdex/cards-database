import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Wash Rotom",
		fr: "Motisma Lavage Niv. 46",
		de: "Wasch-Rotom"
	},
	illustrator: "Hiroki Fuchino",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		479,
	],
	hp: 90,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Wash Shift",
				fr: "Mutation lavage",
				de: "Wasch-Wechsel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Wash Rotom's type is Water until the end of your turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Motisma Lavage est de type Water jusqu'à la fin de votre tour.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power benutzen. Wasch-Rotoms Typ ist  bis zum Ende des Zuges."
			},
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Cleanse Away",
				fr: "Grand nettoyage",
				de: "Wunden lecken"
			},
			effect: {
				en: "Remove 3 damage counters from each of your Benched Pokémon.",
				fr: "Retirez à chacun de vos Pokémon de Banc 3 marqueurs de dégât.",
				de: "Entferne 3 Schadensmarken von jedem Pokémon auf deiner Bank."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Drain Wash",
				fr: "Jet d'O éliminatoire",
				de: "Wasch-Sauger"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Wähle für jedes Mal, wenn die Münze \"Kopf\" gezeigt hat, eine Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Dein Gegner legt die gewählte Karte auf seinen Ablagestapel."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
