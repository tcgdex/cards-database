import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ブリザポス",
		'zh-tw': "雪暴馬",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "蹄から 強力な 冷気を 放つ。 欲しいものは なんでも 力尽くで 奪う 暴れん坊。",
		'zh-tw': "會從蹄子釋放出強烈的寒氣。性情暴躁，只要是自己想要 的東西，就會強行去搶奪。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "フリーズダウン",
				'zh-tw': "冰凍在地",
			},
			damage: 40,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたたねポケモンは、ワザが使えない。",
				'zh-tw': "在下個對手的回合，受到這個招式的【基礎】寶可夢，無法使用招式。",
			},
		},
		{
			name: {
				ja: "ワイルドタックル",
				'zh-tw': "狂野衝撞",
			},
			damage: 130,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667909,
				tcgplayer: 569965,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [896],
};

export default card;
