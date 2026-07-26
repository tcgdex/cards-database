import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトカゲ",
		'zh-tw': "墨海馬",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "生まれたときから しっぽに 炎が ともっている。 炎が 消えたとき その 命は 終わって しまう。",
		'zh-tw': "會在水中跳舞似地游動來 製造漩渦。玩耍時會和夥伴 比賽誰做出的漩渦比較大。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひのこ",
				'zh-tw': "鉤住",
			},
			damage: 40,
			cost: ["Fire", "Fire"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 720940,
				tcgplayer: 587818,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [4],
};

export default card;
