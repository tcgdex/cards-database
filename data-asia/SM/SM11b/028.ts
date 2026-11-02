import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミッキュ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "大人しい 寂しがり屋 だけど ボロ切れの 中身を 見ようとすると 激しく 嫌がり 抵抗する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なりすます" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札にあるサポートを1枚トラッシュする。その後、そのサポートの効果を、このワザの効果として使う。",
			},
		},
		{
			name: { ja: "いたずらなて" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のポケモン2匹に、それぞれダメカンを2個のせる。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555192,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [778],
};

export default card;
