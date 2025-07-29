import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Mamoswine",
		fr: "Mammochon",
		de: "Mamutel"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		473,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Piloswine",
		fr: "Chochignon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ramming Strike",
				fr: "Coup collision",
				de: "Rammstoß"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads or you may start again. Each time you start again, put 2 damage counters on Mamoswine. (If Mamoswine would be Knocked Out, you can't start again.)",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces ou vous pouvez recommencer depuis le début. Chaque fois que vous recommencez, placez 2 marqueurs de dégât sur Mammochon. (Si Mammochon est mis K.O, vous ne pouvez pas recommencer.)",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu oder du kannst eine neue Münzwurfserie beginnen. Für jede Münzwurfserie, die du neu beginnst, lege 2 Schadensmarken auf Mamutel. (Du darfst nicht erneut werfen, wenn Mamutel dadurch kampfunfähig würde.)"
			},
			damage: "30x",

		},
		{
			cost: [
				"Water",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Parade",
				fr: "Parade",
				de: "Vorbeimarsch"
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each Swinub on your Bench, plus 20 more damage for each Piloswine on your Bench, and 40 more damage for each Mamoswine on your Bench.",
				fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque Marcacrin sur votre Banc, plus 20 dégâts supplémentaires pour chaque Cochignon sur votre Banc et 40 dégâts supplémentaires pour chaque Mammochon sur votre Banc.",
				de: "Dieser Angriff fügt 60 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Quiekel auf deiner Bank plus 20 weitere Schadenspunkte für jedes Keifel auf deiner Bank plus 40 weitere Schadenspunkte für jedes Mamutel auf deiner Bank zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 5,

	thirdParty: {
		cardmarket: 278319
	}
}

export default card
