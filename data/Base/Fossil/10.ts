import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
		de: "Lapras"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Lapras but not used to pay for this attack's Energy cost. You can't add more than 20 damage this way.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Lokhlass en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Fügt 10Schadenspunkte plus 10 weitere Schadenspunkte für jede auf Lapras abgelegte  Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich nicht mehr als 20 Schadenspunkte auf diese Artund Weise hinzufügen."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei Kopf ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Ce Pokémon en voie d'extinction peut transporter des passagers sur son dos par-delà les océans."
	},

	thirdParty: {
		cardmarket: 273871,
		tcgplayer: 44419
	},

	variants: [
		{
			type: "holo",
			foil: "galaxy"
		},
		{
			type: "holo",
			stamp: ["1st edition"],
			foil: "galaxy"
		},
	]
}

export default card
