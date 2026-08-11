import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "タマタマ",
		'zh-tw': "蛋蛋",
		'zh-cn': "蛋蛋",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "タマタマだけに 伝わる テレパシーを 出し合っているので どんなときでも ６匹 集まれる。",
		'zh-tw': "會發出只有蛋蛋才能收到的 心靈感應，因此不論何時 都能６隻聚集在一起。",
		'zh-cn': "會發出只有蛋蛋才能收到的 心靈感應，因此不論何時 都能６隻聚集在一起。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "すいとる",
				'zh-tw': "吸取",
				'zh-cn': "吸取",
			},
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
				'zh-tw': "將這隻寶可夢恢復「10」HP。",
				'zh-cn': "將這隻寶可夢恢復「10」HP。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793435,
				tcgplayer: 587581,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [102],
};

export default card;
