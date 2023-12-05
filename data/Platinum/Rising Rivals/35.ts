import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Vespiquen 4",
		fr: "Apireine  Niv. 50",
		de: "Honweisel 4"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		416,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Royal Gain",
				fr: "Gain royal",
				de: "Königlicher Vorteil"
			},
			effect: {
				en: "When you attach a Grass Energy card from your hand to Vespiquen , remove 1 damage counter from Vespiquen .",
				fr: "Lorsque vous attachez une carte Énergie Grass à Apireine , retirez-lui 1 marqueur de dégât.",
				de: "Wenn du 1 -Energiekarte von deiner Hand an Honweisel 4 anlegst, entferne 1 Schadensmarke von Honweisel 4."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Needle",
				fr: "Feuille-aiguille",
				de: "Nadelblätter"
			},
			effect: {
				en: "Flip a coin for each Grass Energy attached to Vespiquen . This attack does 30 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Grass attachée à Apireine . Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Wirf 1 Münze für jede an Honweisel 4 angelegte -Energie. Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
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
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
