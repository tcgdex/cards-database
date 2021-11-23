import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Mamoswine",
		fr: "Mammochon"
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
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads or you may start again. Each time you start again, put 2 damage counters on Mamoswine. (If Mamoswine would be Knocked Out, you can't start again.)",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces ou vous pouvez recommencer depuis le début. Chaque fois que vous recommencez, placez 2 marqueurs de dégât sur Mammochon. (Si Mammochon est mis K.O, vous ne pouvez pas recommencer.)",
			},
			damage: "30×",

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
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each Swinub on your Bench, plus 20 more damage for each Piloswine on your Bench, and 40 more damage for each Mamoswine on your Bench.",
				fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque Marcacrin sur votre Banc, plus 20 dégâts supplémentaires pour chaque Cochignon sur votre Banc et 40 dégâts supplémentaires pour chaque Mammochon sur votre Banc.",
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



}

export default card
