import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "スリープ",
		'zh-tw': "催眠貘",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "突き出た 鼻を ひくひくさせると どこの だれが どんな 夢を 見ているのか 全部 わかるという。",
		'zh-tw': "據說當牠抽動凸出的鼻子， 無論是誰在哪裡做著什麼夢， 都會被牠知道得一清二楚。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶきみなしせん",
				'zh-tw': "不祥視線",
			},
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "相手の手札を見る。",
				'zh-tw': "查看對手的手牌。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773765,
				tcgplayer: 566267,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [96],
};

export default card;
