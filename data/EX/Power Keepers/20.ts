import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Omastar",
		fr: "Amonistar",
		de: "Amoroso"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Omanyte",
		fr: "Amonita"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pull Down",
				fr: "Mise à terre",
				de: "Runterziehen"
			},
			effect: {
				en: "If your opponent has any Evolved Pokémon in play, remove the highest Stage Evolution card from each of them and put those cards back into his or her hand.",
				fr: "Si votre adversaire possède des Pokémon Évolués en jeu, retirez à chacun leur carte Évolution au niveau le plus élevé et replacez ces cartes dans sa main.",
				de: "Falls dein Gegner mindestens 1 entwickeltes Pokémon im Spiel hat, entferne die höchste Evolutionskarte von allen seinen entwickelten Pokémon. Er nimmt diese Karten zurück auf die Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydrocannon",
				fr: "Canon à O",
				de: "Aquahaubitze"
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each Water Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque Énergie  attachée à Amonistar qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Amoroso angelegte -Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 40 Schadenspunkte hinzufügen."
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

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277326,
		tcgplayer: 87869
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

