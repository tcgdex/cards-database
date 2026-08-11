import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ルージュラ",
		'zh-tw': "迷唇姐",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "ガラルの とある 地域では 氷の 女王と 呼んで ルージュラを 恐れ崇めていた。",
		'zh-tw': "在伽勒爾的某個地區，人們稱迷唇姐為冰之女王，並且敬畏崇拜牠。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "わがままリップ",
				'zh-tw': "任性唇",
			},
			effect: {
				ja: "このポケモンが、相手の「ポケモンV」からワザのダメージを受けてきぜつしても、相手はサイドをとれない。",
				'zh-tw': "這隻寶可夢就算受到對手的「寶可夢【V】」招式的傷害而【氣絕】，對手也無法獲得獎賞卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "サイコダメージ",
				'zh-tw': "精神傷害",
			},
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673032,
				tcgplayer: 570797,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570884,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [124],
};

export default card;
