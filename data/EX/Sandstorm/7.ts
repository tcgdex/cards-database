import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
		de: "Kappalores"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		272,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rain Dish",
				fr: "Cuvette",
				de: "Regengenuss"
			},
			effect: {
				en: "At any time between turns, remove 1 damage counter from Ludicolo.",
				fr: "N'importe quand entre deux tours, retirez un marqueur de dégât à Ludicolo.",
				de: "Entferne zu einem beliebigen Zeitpunkt zwischen zwei Zügen 1 Schadensmarke von Kappalores."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Punch",
				fr: "Hydro-poing",
				de: "Hydroschlag"
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each Water Energy attached to Ludicolo but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Ludicolo qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Dieser Angriff fügt 50 Schadenspunkte plus 10 weitere Schadenspunkte for jede an Kappalores angelegte -Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 20 Schadenspunkte hinzufügen."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 275784,
		tcgplayer: 86895
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
