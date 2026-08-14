import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Kingdra ex",
		fr: "Hyporoi ex",
		de: "Seedraking ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [230],

	hp: 150,

	stage: "Basic",
	types: [
		"Water"
	],

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
		de: "Seemon"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Genetic Memory",
				fr: "Mémoire Génétique",
				de: "Genetisches Gedächtnis"
			},
			effect: {
				en: "Use any attack from Kingdra ex's Basic Pokémon card or Stage 1 Evolution card. (Kingdra ex doesn't have to pay for that attack's Energy cost.)",
				fr: "Utilisez n'importe quelle attaque de la carte Pokémon de base ou de la carte Évolution Niveau 1 d'Hyporoi ex. (Hyporoi ex ne paye pas le Coût en Énergie de cette attaque).",
				de: "Du kannst alle Angriffe von Seedraking ex Basis-Pokémon-Karte oder Phase 1 Evolutionskarte verwenden. (Seedraking ex muss nicht die Energiekosten dieser Angriffe bezahlen.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydrocannon",
				fr: "Canon à O",
				de: "Aquahaubitze"
			},
			effect: {
				en: "Does 50 damage plus 20 more damage for each Water Energy attached to Kingdra ex but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				fr: "Inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie  attachée à Hyporoi ex qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
				de: "Dieser Angriff fügt 50 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Seedraking ex angelegte {W}-Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 40 Schadenspunkte hinzufügen."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86451,
				cardmarket: 275969
			},
		},
	],

}

export default card
