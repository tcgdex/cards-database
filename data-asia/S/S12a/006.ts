import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ナエトル",
		'zh-tw': "草苗龜",
		th: "นาเอเติล",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "全身で 光合成を して 酸素を 作る。 のどが 渇くと 頭の 葉っぱが しおれてしまう。",
		'zh-tw': "用全身進行光合作用，製造氧氣。當口渴的時候， 頭上的葉子就會枯萎。",
		th: "ทั่วร่างกายจะสังเคราะห์แสงเพื่อสร้างออกซิเจน เมื่อคอแห้ง ใบไม้ที่หัวจะเหี่ยวเฉาลง",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かみつく",
				'zh-tw': "咬住",
				th: "กัดติด",
			},
			damage: 10,
			cost: ["Grass"],
		},
		{
			name: {
				ja: "とびだしヘッド",
				'zh-tw': "魯莽頭擊",
				th: "กระโดดโหม่ง",
			},
			damage: 20,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687486,
				tcgplayer: 571544,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577439,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "None",
	dexId: [387],
};

export default card;
