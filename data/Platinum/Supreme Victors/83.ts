import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Skarmory FB",
		fr: "Airmure ",
		de: "Panzaeron FB"
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		227,
	],
	hp: 80,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Silver Feather",
				fr: "Plume argentée",
				de: "Silberfeder"
			},
			effect: {
				en: "During your opponent's next turn, when your opponent puts a Basic Pokémon from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon.",
				fr: "Lors du prochain tour de votre adversaire, lorsque votre adversaire place un Pokémon de base de sa main sur son Banc, placez 2 marqueurs de dégât sur ce Pokémon.",
				de: "Wenn dein Gegner in seinem nächsten Zug ein Basis-Pokémon von seiner Hand auf seine Bank legt, lege 2 Schadensmarken auf dieses Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Max",
				fr: "Métal max",
				de: "Maximalmetall"
			},
			effect: {
				en: "Discard all Metal Energy attached to Skarmory FB. Flip a coin for each Energy card you discarded. This attack does 20 damage plus 40 more damage for each heads.",
				fr: "Défaussez toutes les Énergies Metal attachées à Airmure . Lancez une pièce pour chaque carte Énergie défaussée. Cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires pour chaque face.",
				de: "Lege alle an Panzaeron FB angelegten -Energien auf deinen Ablagestapel. Wirf für jede auf diese Weise auf den Ablagestapel gelegte -Energiekarte 1 Münze. Dieser Angriff fügt 20 Schadenspunkte plus 40 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
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

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			foil: "league",
		},
	]



}

export default card
