import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ホゲータ",
		'zh-tw': "呆火鱷",
		'zh-cn': "呆火鱷",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "炎袋が 小さく あふれ出た エネルギーが 頭の くぼみから 放出され ゆらゆら 揺れる。",
		'zh-tw': "火囊很小，因此能量會 溢出來，在牠頭上的 凹槽那裡搖曳晃動。",
		'zh-cn': "火囊很小，因此能量會 溢出來，在牠頭上的 凹槽那裡搖曳晃動。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ねつでこがす",
				'zh-tw': "熱灼燒",
				'zh-cn': "熱灼燒",
			},
			damage: 20,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
				'zh-cn': "將對手的戰鬥寶可夢【灼傷】。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793451,
				tcgplayer: 587597,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [909],
};

export default card;
