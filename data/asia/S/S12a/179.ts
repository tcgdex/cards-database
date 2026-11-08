import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ケルディオ",
		'zh-tw': "凱路迪歐",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'ja-jp': "覚悟を 決めることで 全身に 力が みなぎって 素早くなり 飛び跳ねると 残像が みえる。",
		'zh-tw': "透過下定決心來讓全身充滿力量並變得敏捷。當跳躍起來的時候能看到殘影。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "けとばす",
				'zh-tw': "踢飛",
			},
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "ラインフォース",
				'zh-tw': "隊列之力",
			},
			damage: "10+",
			cost: ["Water", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチポケモンの数×20ダメージ追加。",
				'zh-tw': "增加自己的備戰寶可夢的數量×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687741,
				tcgplayer: 571717,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Illustration rare",
	dexId: [647],
};

export default card;
