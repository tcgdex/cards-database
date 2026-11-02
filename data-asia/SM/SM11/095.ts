import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤドン&コダックGX",
	},

	illustrator: "ConceptLab",
	category: "Pokemon",
	hp: 250,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぽいぽいスプラッシュ" },
			damage: "40×",
			cost: ["Water", "Water"],
			effect: {
				ja: "自分の手札にあるサポートを好きなだけトラッシュし、その枚数×40ダメージ。",
			},
		},
		{
			name: { ja: "どきどきタイムGX" },
			damage: "10+",
			cost: ["Water", "Water"],
			effect: {
				ja: "コインを1回投げオモテなら、100ダメージ追加。追加で[水]エネルギーが6個ついているなら、このワザで投げるコインの数は10回になり、オモテの数×100ダメージ追加。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557057,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [79, 54],

	suffix: "TAG TEAM-GX",
};

export default card;
