import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル サニゴーン",
		'zh-tw': "伽勒爾 魔靈珊瑚",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "魂を 被う 霊体の 体には 注意。 触れると 石のように 動けなく なるぞ。",
		'zh-tw': "一定要小心牠那包覆著靈魂的靈體。如果觸摸到，就會像石頭一樣動彈不得。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "おしつけさいせい",
				'zh-tw': "強迫再生",
			},
			cost: ["Psychic"],
			effect: {
				ja: "相手のトラッシュからたねポケモンの「ポケモンV」を1枚選び、相手のベンチに出す。その後、そのポケモンの残りHPが「30」になるように、ダメカンをのせる。",
				'zh-tw': "從對手的棄牌區選擇1張【基礎】寶可夢的「寶可夢【V】」卡，放置於對手的備戰區。然後，在身上放置傷害指示物直到那隻寶可夢的剩餘HP變為「30」為止。",
			},
		},
		{
			name: {
				ja: "ホロウショット",
				'zh-tw': "陰森射擊",
			},
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575599,
				tcgplayer: 569545,
			},
		},
	],

	evolveFrom: {
		ja: "ガラル サニーゴ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [864],
};

export default card;
