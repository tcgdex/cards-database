import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルダック",
		'zh-tw': "哥達鴨",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "流れの 穏やかな 川に 棲む。 長い 手足で 水を 掻きわけ 優雅な 泳ぎを みせる。",
		'zh-tw': "生活在水流平穩的河川裡。會用長長的手腳划水， 展現自己優雅的泳姿。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "アクアエッジ",
				'zh-tw': "水之刀鋒",
			},
			damage: 50,
			cost: ["Water", "Colorless"],
		},
		{
			name: {
				ja: "まきこみダイブ",
				'zh-tw': "捲入奇襲",
			},
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "おたがいのバトルポケモンと、ついているすべてのカードを、トラッシュする。［バトル場に次のポケモンを出すのは自分から。］",
				'zh-tw': "將雙方的戰鬥寶可夢與附加的卡全部丟棄。[自己先將下一隻寶可夢放置於戰鬥場。]",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651076,
				tcgplayer: 569860,
			},
		},
	],

	evolveFrom: {
		ja: "コダック",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [55],
};

export default card;
