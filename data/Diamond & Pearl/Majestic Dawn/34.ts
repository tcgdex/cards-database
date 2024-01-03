import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali",
		de: "Aquana"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		134,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Cleanse Away",
				fr: "Grand nettoyage",
				de: "Wunden lecken"
			},
			effect: {
				en: "Remove 2 damage counters from each of your Benched Pokémon.",
				fr: "Retirez 2 marqueurs de dégât à chacun de vos Pokémon de Banc.",
				de: "Entferne 2 Schadensmarken von jedem Pokémon auf deiner Bank."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Whirlpool",
				fr: "Hyper tourbillon",
				de: "Hyper Whirlpool"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Lege pro \"Kopf\" eine an das Verteidigende Pokémon angelegte Energiekarte auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
