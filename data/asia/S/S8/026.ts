import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ケケンカニV",
		'zh-tw': "好勝毛蟹V",
	},

	illustrator: "MUGENUP",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "なだれおこし",
				'zh-tw': "起崩",
			},
			cost: ["Water"],
			effect: {
				ja: "相手の山札を上から2枚トラッシュする。",
				'zh-tw': "將對手的牌庫上方2張卡丟棄。",
			},
		},
		{
			name: {
				ja: "デストロイヤーパンチ",
				'zh-tw': "破壞者之拳",
			},
			damage: "90+",
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×60ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×60點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575581,
				tcgplayer: 569527,
			},
		},
	],

	retreat: 4,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [740],
};

export default card;
