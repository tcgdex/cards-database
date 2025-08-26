import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いゴルバット",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [42],
	hp: 50,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "スニーク攻撃",
			},
			effect: {
				ja: "ターン中に、このポケモンを手から演奏すると、対戦相手のポケモンの1人に10ダメージを与えることができます。 <em>（ベンチポクモンに衰弱と抵抗を適用しないでください。）</em>",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "フリッター",
			},
			effect: {
				ja: "この攻撃は、対戦相手のポケモンの1つに20のダメージを与えます。この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
			},
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
