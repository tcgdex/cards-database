import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラナッシーGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トロピカルヘッド" },
			cost: ["Grass"],
			effect: {
				ja: "相手のポケモン1匹に、このポケモンについているエネルギーの数x20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ドラゴンハンマー" },
			damage: 120,
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "タワーゴーランドGX" },
			damage: 180,
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについているエネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560283,
			},
		},
	],

	evolveFrom: {
		ja: "タマタマ",
	},

	retreat: 3,
	rarity: "Double rare",
	dexId: [103],

	suffix: "GX",
};

export default card;
