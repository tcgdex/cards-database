import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "サンドパン",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "トゲは 皮膚が 硬くなったもの。 体を 丸めて トゲトゲを 刺すように 相手を 攻撃する。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はんげきばり" },
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "あなほりクロー" },
			damage: 60,
			cost: ["Fighting"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899939,
				tcgplayer: 709189,
			},
		},
	],

	evolveFrom: {
		ja: "サンド",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [28],
};

export default card;
