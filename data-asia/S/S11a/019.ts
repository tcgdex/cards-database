import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ボルケニオン",
		'zh-tw': "波爾凱尼恩",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "背中の アームから 体内の 水蒸気を 噴射する。 山 ひとつ 吹き飛ばす 威力。",
		'zh-tw': "從背上的手臂噴出體內的水蒸氣。有著將整座山轟飛的威力。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶちかます",
				'zh-tw': "頭突",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ハイドロバーン",
				'zh-tw': "水炮灼燒",
			},
			damage: "80+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンに[W]エネルギーがついているなら、80ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上附有【水】能量，則增加80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673016,
				tcgplayer: 570782,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [721],
};

export default card;
