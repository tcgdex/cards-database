import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "トドゼルガ",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		ja: "大きな 氷を キバで 砕く。 厚い 脂肪は 寒さだけでなく 敵の 攻撃も はね返す。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "コールドウェーブ" },
			damage: 60,
			cost: ["Water"],
			effect: {
				ja: "次の相手の番、相手は手札からトレーナーズを出して使えない。前の自分の番に、自分のポケモンが「コールドウェーブ」を使っていたなら、このワザは使えない。",
			},
		},
		{
			name: { ja: "ふぶき" },
			damage: 120,
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554807,
			},
		},
	],

	evolveFrom: {
		ja: "トドグラー",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [365],
};

export default card;
