import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "フシギバナ&ツタージャGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かがやくつる" },
			effect: {
				ja: "自分の番に、このポケモンがバトル場にいるなら、自分の手札から[草]エネルギーをこのポケモンにつけるたび、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "フォレストダンプ" },
			damage: 160,
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ソーラープラントGX" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ50ダメージ。追加でエネルギーが2個ついているなら、自分のポケモン全員のHPを、すべて回復する。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556780,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [3, 495],

	suffix: "TAG TEAM-GX",
};

export default card;
