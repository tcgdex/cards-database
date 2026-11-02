import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "アグノム",
		'zh-tw': "亞克諾姆",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "ユクシー エムリット アグノムは 同じ タマゴから 生まれた ポケモンと 考えられている。",
		'zh-tw': "由克希、艾姆利多和亞克諾姆 被認為是從同一個蛋裡 誕生出的寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "サイコトリップ",
				'zh-tw': "精神歪曲",
			},
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651090,
				tcgplayer: 569874,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [482],
};

export default card;
