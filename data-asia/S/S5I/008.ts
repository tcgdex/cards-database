import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "アップリューVMAX",
		'zh-tw': "蘋裹龍VMAX",
		th: "แอปปริวVMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "キョダイローリング 250-",
				'zh-tw': "超極巨滾翻回轉",
				th: "กิกะโรลลิ่ง",
			},
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
				'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
				th: "แดเมจของท่าต่อสู้นี้จะลดลงเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนตัวนี้ x10",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 533262,
				tcgplayer: 568956,
			},
		},
	],

	evolveFrom: {
		ja: "アップリューV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [841],
};

export default card;
