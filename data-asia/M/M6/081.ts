import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキブル",
	},

	illustrator: "Rianti Hidayat",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "相手に 尻尾の先を 押しつけ 瞬時に ２万ボルト 以上の 高圧 電流を 送りこむ。"
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

	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900107,
				tcgplayer: 709234,
				cardtrader: 403164,
			},
		},
	],

	evolveFrom: {
		ja: "エレブー",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [466],
};

export default card;
