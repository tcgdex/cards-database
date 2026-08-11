import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ムゲンダイナVMAX",
		'zh-tw': "無極汰那VMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Darkness"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ムゲンゾーン",
				'zh-tw': "無極領域",
			},
			effect: {
				ja: "自分の場のポケモン全員が[悪]タイプならはたらく。自分のベンチに出せる[悪]ポケモンの数は8匹になり、別のタイプは場に出せない。（この特性がはたらかなくなったとき、ベンチが5匹になるまでトラッシュする。）",
				'zh-tw': "若自己的所有場上寶可夢皆為【惡】屬性則生效。可放置於自己的備戰區的【惡】寶可夢數量改為8隻，其他屬性無法放置於場上。（當這個特性不生效後，將備戰區的寶可夢丟棄直到變為5隻為止。）",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ドレッドエンド",
				'zh-tw': "忌憚之末",
			},
			damage: "30×",
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "自分の場の[悪]ポケモンの数×30ダメージ。",
				'zh-tw': "造成自己的場上【惡】寶可夢的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586626,
				tcgplayer: 571363,
			},
		},
	],

	evolveFrom: {
		ja: "ムゲンダイナV",
	},

	retreat: 3,
	regulationMark: "D",
	rarity: "Triple Rare",
	dexId: [890],
};

export default card;
