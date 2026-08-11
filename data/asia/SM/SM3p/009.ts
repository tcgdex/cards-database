import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ビリジオン",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "頭の ツノは 鋭い 刃。 旋風のような 動きで 敵を 翻弄して 素早く 切りつける。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かぜをまとう" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "のぞむなら、自分の手札にある基本エネルギーを1枚、このポケモンにつける。",
			},
		},
		{
			name: { ja: "ロングスピア" },
			damage: 90,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560167,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [640],
};

export default card;
