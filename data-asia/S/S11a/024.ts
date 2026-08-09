import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "フリーザー",
		'zh-tw': "急凍鳥",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "青く 美しい 羽根は 氷で できていると 言われている。 長い 尾を たなびかせ 雪山を 飛ぶ。",
		'zh-tw': "藍色的美麗羽毛據說是由冰構成的。會搖曳著長長的尾巴飛過雪山。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "アイスウイング",
				'zh-tw': "冰之翼",
			},
			damage: 20,
			cost: ["Water"],
		},
		{
			name: {
				ja: "ワイルドフリーズ",
				'zh-tw': "狂野冰凍",
			},
			damage: 70,
			cost: ["Water", "Water"],
			effect: {
				ja: "このポケモンにも50ダメージ。相手のバトルポケモンをマヒにする。",
				'zh-tw': "這隻寶可夢也受到50點傷害。將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673021,
				tcgplayer: 570787,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [144],
};

export default card;
