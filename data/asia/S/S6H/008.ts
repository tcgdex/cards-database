import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "アママイコ",
		'zh-tw': "甜舞妮",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "突いてくる アオガラスには 頭の ヘタで 殴りつけてから 鋭い 蹴り技を おみまいする。",
		'zh-tw': "會用頭部的果蒂擊打飛來啄食自己的藍鴉，並且對牠使出猛烈的踢擊。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "はねる",
				'zh-tw': "戲法舞步",
			},
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ふみつけ" },
			damage: "50+",
			cost: ["Grass", "Colorless", "Colorless"],
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
				cardmarket: 560424,
				tcgplayer: 569140,
			},
		},
	],

	evolveFrom: {
		ja: "アマカジ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [762],
};

export default card;
