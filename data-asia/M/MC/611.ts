import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "トリミアン",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "ボサボサの 体毛を 刈りこむと 姿が 美しくなる だけでなく 身体の キレが 良くなるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エネアシスト" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから基本エネルギーを1枚選び、ベンチポケモンにつける。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863913,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [676],
};

export default card;
