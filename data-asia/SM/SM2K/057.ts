import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラキュウコンGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こおりのやいば" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ブリザードエッジ" },
			damage: 160,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
		{
			name: { ja: "クリアゲートGX" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561523,
			},
		},
	],

	evolveFrom: {
		ja: "アローラロコン",
	},

	retreat: 1,
	rarity: "Hyper rare",
	dexId: [38],

	suffix: "GX",
};

export default card;
