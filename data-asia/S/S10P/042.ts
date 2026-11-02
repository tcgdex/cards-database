import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ニューラ",
		'zh-tw': "洗翠 狃拉",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "鉤爪 逞しく 断崖絶壁を 踏破するに 有利な 形状。 先端より 毒液 滴り 獲物 捕らえしとき 神経を 侵す。",
		'zh-tw': "強健的爪子形狀有助於在斷崖絕壁上行動自如。爪子尖端滴出的毒液會在 捉住獵物時侵襲其神經。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひっかく",
				'zh-tw': "抓",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "ツメできりさく",
				'zh-tw': "利爪劈擊",
			},
			damage: 30,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651101,
				tcgplayer: 569885,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [215],
};

export default card;
