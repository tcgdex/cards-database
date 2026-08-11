import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒードランGX",
	},

	illustrator: "ConceptLab",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バーニングロード" },
			effect: {
				ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の場のポケモンについている[炎]エネルギーを好きなだけ、このポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ばくねつスタンプ" },
			damage: 130,
			cost: ["Fire", "Fire", "Colorless"],
		},
		{
			name: { ja: "ヒートボンバーGX" },
			damage: "50×",
			cost: ["Fire"],
			effect: {
				ja: "このポケモンについている[炎]エネルギーの数×50ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557334,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [485],

	suffix: "GX",
};

export default card;
