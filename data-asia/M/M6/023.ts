import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキブル",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "相手に 尻尾の先を 押しつけ 瞬時に ２万ボルト 以上の 高圧 電流を 送りこむ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "のしかかり" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ボルテージハンマー" },
			damage: "60×",
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている基本エネルギーを好きなだけトラッシュし、その枚数×60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899905,
				tcgplayer: 709179,
			},
		},
	],

	evolveFrom: {
		ja: "エレブー",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [466],
};

export default card;
