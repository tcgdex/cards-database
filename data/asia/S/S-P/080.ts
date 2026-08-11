import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ムゲンダイナVMAX",
		'zh-tw': "皮卡丘",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Darkness"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ムゲンゾーン" },
			effect: {
				ja: "自分の場のポケモン全員が[悪]タイプならはたらく。自分のベンチに出せる[悪]ポケモンの数は8匹になり、別のタイプは場に出せない。（この特性がはたらかなくなったとき、ベンチが5匹になるまでトラッシュする。）",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ドレッドエンド",
				'zh-tw': "搖尾巴",
			},
			damage: "30×",
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "自分の場の[悪]ポケモンの数×30ダメージ。",
				'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，受到這個招式的寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 468284,
				tcgplayer: 597291,
			},
		},
	],

	evolveFrom: {
		ja: "ムゲンダイナV",
	},

	retreat: 3,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [890],
};

export default card;
