import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウVMAX",
		'zh-tw': "夢幻VMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "クロスフュージョン",
				'zh-tw': "交錯匯流",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチの「フュージョン」のポケモンが持っているワザを1つ選び、このワザとして使う。",
				'zh-tw': "選擇自己的備戰區的「匯流」寶可夢持有的1個招式，作為這個招式使用。",
			},
		},
		{
			name: {
				ja: "ダイミラクル",
				'zh-tw': "極巨奇跡",
			},
			damage: 130,
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
				'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575595,
				tcgplayer: 569541,
			},
		},
	],

	evolveFrom: {
		ja: "ミュウV",
	},

	retreat: 0,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [151],
};

export default card;
