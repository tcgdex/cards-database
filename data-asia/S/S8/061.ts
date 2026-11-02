import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル タチフサグマ",
		'zh-tw': "伽勒爾 堵攔熊",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "ケンカを 繰り返し 進化。 腕をクロスし 叫ぶ 雄叫びは どんな 相手も 怯ませるぞ。",
		'zh-tw': "在不斷的鬥爭中得到了進化。牠交叉著雙臂發出的怒吼能讓一切對手都為之膽怯。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "だまらせる",
				'zh-tw': "封口",
			},
			damage: 30,
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。",
				'zh-tw': "選擇對手的戰鬥寶可夢持有的1個招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。",
			},
		},
		{
			name: {
				ja: "むじひないちげき",
				'zh-tw': "狠心一擊",
			},
			damage: "60+",
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、90ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加90點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575616,
				tcgplayer: 569562,
			},
		},
	],

	evolveFrom: {
		ja: "ガラル マッスグマ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [862],
};

export default card;
