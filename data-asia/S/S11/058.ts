import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴマゾウ",
		'zh-tw': "小小象",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "体は 小さいが 力持ち。 大人の 人を 軽々と 背中に 乗せて 歩いてしまう。",
		'zh-tw': "身體雖小卻很有力氣。能輕鬆地讓成年人 騎在牠背上移動。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はねとばす",
				'zh-tw': "擊飛",
			},
			damage: "10+",
			cost: ["Fighting"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667933,
				tcgplayer: 569989,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [231],
};

export default card;
