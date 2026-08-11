import { Card } from "models/database/card";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "パラセクト",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "森にて 背の茸が 外れ 動かぬ 個体あり。 大きな茸こそ本体 との 学説を 証明する サンプルなり。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぐったりほうし" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。おたがいのバトルポケモンを、それぞれどくとねむりにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シザークロス" },
			damage: "50+",
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657051,
				tcgplayer: 570735,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "パラス",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Character Rare",
	dexId: [47],
};

export default card;
