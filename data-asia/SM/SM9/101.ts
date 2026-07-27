import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ&ゼクロムGX",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 240,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フルドライブ" },
			damage: 150,
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				ja: "自分の山札にある[雷]エネルギーを3枚まで、自分のポケモン1匹につける。そして山札を切る。",
			},
		},
		{
			name: { ja: "タッグボルトGX" },
			damage: 200,
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				ja: "追加で[雷]エネルギーが3個ついているなら、相手のベンチポケモン1匹にも、170ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558476,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [25, 644],

	suffix: "TAG TEAM-GX",
};

export default card;
