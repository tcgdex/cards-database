import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "レシラム&ゼクロムGX",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 270,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "らいえんむそう" },
			damage: "90×",
			cost: ["Fire", "Lightning"],
			effect: {
				ja: "自分のベンチポケモンについている[炎]と[雷]タイプの基本エネルギーを3枚までトラッシュし、その枚数×90ダメージ。",
			},
		},
		{
			name: { ja: "クロスブレイクGX" },
			cost: ["Fire", "Fire", "Lightning", "Lightning"],
			effect: {
				ja: "相手のベンチポケモン1匹に、170ダメージ。追加でこの番、手札から「Nの覚悟」を出して使っていたなら、相手の別のベンチポケモン1匹にも、170ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555213,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Double rare",
	dexId: [643, 644],

	suffix: "TAG TEAM-GX",
};

export default card;
