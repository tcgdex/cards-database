import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ウインディ",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "燃え盛る炎 牙に纏わせ 食らい付く。 体躯 大柄なれど 陽動 鮮やかなりて 敵 翻弄せしむる姿 演舞の如し。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はっぽうやぶれ" },
			damage: "10+",
			cost: [],
			effect: {
				ja: "自分の手札が1枚もないなら、150ダメージ追加。",
			},
		},
		{
			name: { ja: "するどいキバ" },
			damage: 100,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657054,
				tcgplayer: 570738,
			},
		},
	],

	evolveFrom: {
		ja: "ヒスイ ガーディ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Character Rare",
	dexId: [59],
};

export default card;
