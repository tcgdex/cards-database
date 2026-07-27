import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "アグノム",
		'zh-tw': "亞克諾姆",
		'zh-cn': "亞克諾姆",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "意思の神と 呼ばれている。 湖の 底で 眠り続け 世界の バランスを とっている。",
		'zh-tw': "被稱為意志之神。 在湖底沉睡著， 維持世界的平衡。",
		'zh-cn': "被稱為意志之神。 在湖底沉睡著， 維持世界的平衡。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "マインドキネシス",
				'zh-tw': "意志強念",
				'zh-cn': "意志強念",
			},
			damage: "10+",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のポケモン全員にのっているダメカンの数×10ダメージ追加。",
				'zh-tw': "增加對手的所有寶可夢身上放置的傷害指示物的數量×10點傷害。",
				'zh-cn': "增加對手的所有寶可夢身上放置的傷害指示物的數量×10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793484,
				tcgplayer: 587630,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [482],
};

export default card;
