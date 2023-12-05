import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Maraiste",
		de: "Morlord"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		195,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wooper",
	},
	stage: "Stage1",


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
				en: "This attack does 20 damage plus 10 more damage for each Energy attached to Quagsire but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Maraiste mais non utilisée pour payer le coût d'Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Morlord angelegte -Energiekarte, die nicht verwendet wurde, um für die Energiekosten dieses Angriffs zu bezahlen, zu. Du kannst auf diese Weise höchstens 20 weitere Schadenspunkte zufügen."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
				de: "Slam"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "50x",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
