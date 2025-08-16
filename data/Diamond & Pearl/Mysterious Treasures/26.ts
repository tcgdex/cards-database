import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Leviator",
		de: "Garados"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dragon DNA",
				fr: "ADN dragon",
				de: "Drachen-DNA"
			},
			effect: {
				en: "Gyarados can use any attack from its Basic Pokémon. (You still have to pay for that attack's Energy cost.) If Gyarados uses any attack from its Basic Pokémon, that attack does 30 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Leviator peut utiliser n'importe quelle attaque de son Pokémon de base. (Vous devez toujours payer le Coût en Énergie de cette attaque). Si Leviator utilise une attaque de son Pokémon de base, cette attaque inflige 30 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
				de: "Garados kann alle Angriffe seiner Basis-Pokémon-Karte einsetzen. (Du musst die Energiekosten für diesen Angriff trotzdem zahlen.) Wenn Garados einen Angriff seiner Basis-Pokémon-Karte einsetzt, fügt dieser Angriff den Aktiven Pokémon weitere 30 Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Enrage",
				fr: "Enrager",
				de: "Erzürnen"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, choose 1 card from your opponent's hand without looking and discard it. If the first coin is tails, Gyarados is now Confused.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la. Si la première pièce est pile, Leviator est maintenant Confus.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Wähle für jedes Mal, wenn die Münze \"Kopf\" gezeigt hat, eine Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Dein Gegner legt die gewählte Karte auf seinen Ablagestapel. Wenn der allererste Wurf \"Zahl\" gezeigt hat, ist Garados jetzt verwirrt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
		fr: "Lorsqu'il apparaît, sa rage ne cesse qu'après qu'il a rasé les plaines et montagnes alentour."
	},

	thirdParty: {
		cardmarket: 277655,
		tcgplayer: 85993
	}
}

export default card
