import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "コイル",
		'zh-tw': "小磁怪",
		'zh-cn': "小磁怪",
	},

	illustrator: "Hoshino KURO",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "空中に 浮いたまま 移動して 左右の ユニットから 電磁波などを 放射する。",
		'zh-tw': "會浮在空中移動， 從左右兩邊的組件發射 電磁波之類的東西。",
		'zh-cn': "會浮在空中移動， 從左右兩邊的組件發射 電磁波之類的東西。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ピッカリだま",
				'zh-tw': "光彈",
				'zh-cn': "光彈",
			},
			damage: 20,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793468,
				tcgplayer: 587614,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [81],
};

export default card;
