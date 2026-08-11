import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "レディアン",
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "夜空に 星が 瞬くとき 輝く 粉を 振りまきながら ひらひらと 飛んでいく。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きらぼしもよう" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のベンチの残りHPが「90」以下のポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スピードスター" },
			damage: 70,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863307,
			},
		},
	],

	evolveFrom: {
		ja: "レディバ",
	},

	retreat: 0,
	regulationMark: "H",
	rarity: "None",
	dexId: [166],
};

export default card;
