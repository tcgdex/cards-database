import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨマワル",
		'zh-tw': "夜巡靈",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "いいつけを 守らない 子供を 見つけると 夜中に どこかへ 連れていくと いわれている。",
		'zh-tw': "據說一旦發現不聽話的孩子，牠就會在深夜裡把那個孩子帶去某個不知名的地方。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みらいよち",
				'zh-tw': "預知未來",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分または相手の山札を上から4枚見て、好きな順番に入れ替えて、山札の上にもどす。",
				'zh-tw': "查看自己或者對手的牌庫上方4張卡，以任意順序排列，放回牌庫上方。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586582,
				tcgplayer: 571319,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578386,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "None",
	dexId: [355],
};

export default card;
