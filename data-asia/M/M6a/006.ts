import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ファイヤー",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "羽ばたくと 翼の 炎が 赤く 美しく きらめく 伝説の 鳥ポケモンの １匹。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "もえるはばたき" },
			effect: {
				ja: "自分の場に「フリーザー」「サンダー」がいるなら、自分の番に1回使える。自分の手札から「基本[R]エネルギー」を1枚選び、このポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ほのおのうず" },
			damage: 130,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908184,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [146],
};

export default card;
