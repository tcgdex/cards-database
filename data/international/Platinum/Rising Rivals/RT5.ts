import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Wash Rotom",
		'fr-fr': "Motisma Lavage Niv. 46",
		'de-de': "Wasch-Rotom"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [479],

	hp: 90,

	types: [
		"Lightning"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Wash Shift",
				'fr-fr': "Mutation lavage",
				'de-de': "Wasch-Wechsel"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may use this power. Wash Rotom's type is Water until the end of your turn.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Motisma Lavage est de type Water jusqu'à la fin de votre tour.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power benutzen. Wasch-Rotoms Typ ist  bis zum Ende des Zuges."
			}
		},
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'en-us': "Cleanse Away",
				'fr-fr': "Grand nettoyage",
				'de-de': "Wunden lecken"
			},
			effect: {
				'en-us': "Remove 3 damage counters from each of your Benched Pokémon.",
				'fr-fr': "Retirez à chacun de vos Pokémon de Banc 3 marqueurs de dégât.",
				'de-de': "Entferne 3 Schadensmarken von jedem Pokémon auf deiner Bank."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Drain Wash",
				'fr-fr': "Jet d'O éliminatoire",
				'de-de': "Wasch-Sauger"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Wähle für jedes Mal, wenn die Münze \"Kopf\" gezeigt hat, eine Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Dein Gegner legt die gewählte Karte auf seinen Ablagestapel."
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

	variants: [
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 278573,
				tcgplayer: 90494
			}
		},
	]
}

export default card
