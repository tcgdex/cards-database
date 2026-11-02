import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒノヤコマ",
		'zh-tw': "火箭雀",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "飛びはじめた 直後の スピードは すべての とりポケモンの 中でも トップクラスの 速さ なのだ。",
		'zh-tw': "剛起飛時的速度在所有的鳥寶可夢之中是數一數二的。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "でんこうせっか",
				'zh-tw': "電光一閃",
			},
			damage: "20+",
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560844,
				tcgplayer: 569284,
			},
		},
	],

	evolveFrom: {
		ja: "ヤヤコマ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [662],
};

export default card;
