import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "カメックス&ポッチャマGX",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スプラッシュメーカー" },
			damage: 150,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札にある[水]エネルギーを3枚まで、自分のポケモンに好きなようにつける。その後、つけたポケモンのHPを、それぞれつけた枚数×50ダメージぶん回復する。",
			},
		},
		{
			name: { ja: "バブルランチャーGX" },
			damage: "100+",
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをマヒにする。追加で[水]エネルギーが3個ついているなら、150ダメージ追加。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556768,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [9, 393],

	suffix: "TAG TEAM-GX",
};

export default card;
