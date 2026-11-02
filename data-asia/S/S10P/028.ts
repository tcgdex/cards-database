import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲキッス",
		'zh-tw': "波克基斯",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "争い事や もめ事が 起こる 場所には 姿を 見せない。 近ごろは ほとんど 見かけない。",
		'zh-tw': "不會出現在發生爭端和紛亂的地方。 近來幾乎見不到牠的身影。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "しあわせシャイン",
				'zh-tw': "幸福閃耀",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のバトルポケモンのHPを「90」回復する。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。將自己的戰鬥寶可夢恢復「90」HP。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "マジカルショット",
				'zh-tw': "魔法射擊",
			},
			damage: 120,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651087,
				tcgplayer: 569871,
			},
		},
	],

	evolveFrom: {
		ja: "トゲチック",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [468],
};

export default card;
