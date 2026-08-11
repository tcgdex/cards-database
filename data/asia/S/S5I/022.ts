import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バネブー",
		'zh-tw': "跳跳豬",
		'th-th': "บาเนบู",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "尻尾で 飛び跳ねて 心臓を 動かしている。 パールルの 作った 真珠を 頭に 乗せている。",
		'zh-tw': "用尾巴跳來跳去，藉此讓自己的心臟搏動。會把珍珠貝產出的珍珠戴在頭上。",
		'th-th': "ใช้หางกระโดดเด้งเพื่อให้หัวใจทำงาน เอาไข่มุกที่ปาลูลุทำมาวางไว้บนศีรษะ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "とびだしヘッド",
				'zh-tw': "魯莽頭擊",
				'th-th': "กระโดดโหม่ง",
			},
			damage: 10,
			cost: ["Psychic"],
		},
		{
			name: {
				'ja-jp': "パワージェム",
				'zh-tw': "力量寶石",
				'th-th': "พาวเวอร์เจม",
			},
			damage: 30,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533332,
				tcgplayer: 568971,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [325],
};

export default card;
