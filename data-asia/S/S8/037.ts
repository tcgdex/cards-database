import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ストリンダー",
		'zh-tw': "顫弦蠑螈",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "発電器官が 胸に ある。 電気が つくられるとき ベースのような 音が 響く。",
		'zh-tw': "發電器官長在胸部。當牠製造出電力的時候，會發出貝斯般的聲音。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "マックスダウナー",
				'zh-tw': "極度洩氣",
			},
			effect: {
				ja: "自分の場のポケモン全員が「フュージョン」のポケモンなら、はたらく。このポケモンがいるかぎり、相手の場の「ポケモンVMAX」全員の最大HPは、それぞれ「30」小さくなる。",
				'zh-tw': "若自己的所有場上寶可夢皆為「匯流」寶可夢則生效。只要這隻寶可夢在場上，對手的場上的所有「寶可夢【VMAX】」的最大HP各減少「30」。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ヘッドボルト",
				'zh-tw': "伏特頭擊",
			},
			damage: 90,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575592,
				tcgplayer: 569538,
			},
		},
	],

	evolveFrom: {
		ja: "エレズン",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [849],
};

export default card;
