import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ザシアン",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "あらゆるものを 切り捨てるさまから 妖精王の剣 と 呼ばれ 敵味方に 恐れ崇められた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ハードブレード" },
			damage: "20+",
			cost: ["Metal"],
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、40ダメージ追加。",
			},
		},
		{
			name: { ja: "スラッシュダウン" },
			damage: 120,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「スラッシュダウン」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908263,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [888],
};

export default card;
