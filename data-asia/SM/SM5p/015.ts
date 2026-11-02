import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "ジバコイル",
	},

	illustrator: "Yoshinobu Saito",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		ja: "怪電波を 発信 しながら 空を 飛び回り 未知の 電波を 受信 していると いう。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マグネサーキット" },
			effect: {
				ja: "自分の番に何回でも使える。自分の手札にある[雷]エネルギーを1枚、自分のポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "でんじほう" },
			damage: 130,
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「でんじほう」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559765,
			},
		},
	],

	evolveFrom: {
		ja: "レアコイル",
	},

	retreat: 2,
	rarity: "None",
	dexId: [462],
};

export default card;
