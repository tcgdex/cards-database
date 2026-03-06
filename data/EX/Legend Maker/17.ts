import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Gorebyss",
		fr: "Rosabyss",
		de: "Saganabyss"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		368,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reactive Booster",
				fr: "Booster réactif",
				de: "Reaktiver Energieschub"
			},
			effect: {
				en: "Each React Energy card attached to all of your Huntail and Gorebyss provides 2 Energy of every type but has no effect other than providing Energy.",
				fr: "Chaque carte Énergie réaction attachée à tous vos Serpangs et Rosabyss fournit 2 Énergies de tous les types mais n'a pas d'autre effet que de fournir de l'Énergie.",
				de: "Jede Reaktions-Energiekarte, die an allen deinen Aalabyss und Saganabyss angelegt ist, produziert 2 Energie jedes Energietyps, hat aber keinen anderen Effekt als Energie zu liefern."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Water",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				de: "Hydropumpe"
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each Water Energy attached to Gorebyss but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque Énergie  attachée à Rosabyss qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Saganabyss angelegte -Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 40 Schadenspunkte hinzufügen."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276894,
		tcgplayer: 85843
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
