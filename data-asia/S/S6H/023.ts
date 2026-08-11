import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "トドグラー",
		'zh-tw': "海魔獅",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "まるければ モンスターボールでも タマザラシでも 鼻の上に 乗せて 自由自在に くるくる 回すぞ。",
		'zh-tw': "只要是圓形的東西，無論是精靈球還是海豹球，都能頂在鼻子上隨心所欲地轉動。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "電磁吸附",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "オーロラビーム",
				'zh-tw': "極巨衝刺",
			},
			damage: 70,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560439,
				tcgplayer: 569155,
			},
		},
	],

	evolveFrom: {
		ja: "タマザラシ",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Common",
	dexId: [364],
};

export default card;
