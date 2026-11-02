import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "イシズマイ",
		'zh-tw': "石居蟹",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "家に ちょうどいい 小石が 見つからないと カバルドンの 穴に 棲んでしまうことも。",
		'zh-tw': "如果找不到大小合適的石頭來當成自己的家，牠也會住到河馬獸的洞裡。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "拍擊",
			},
			damage: 10,
			cost: ["Grass"],
		},
		{
			name: {
				ja: "するどいツメ",
				'zh-tw': "出拳",
			},
			damage: "10+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560419,
				tcgplayer: 569135,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [557],
};

export default card;
