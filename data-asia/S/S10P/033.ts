import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "カラマネロ",
		'zh-tw': "烏賊王",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "発光体の 光を 見つめると たちまち 催眠状態になり カラマネロに 操られてしまう。",
		'zh-tw': "要是盯著牠的發光體看，就會馬上陷入催眠狀態， 並且受到牠的控制。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "シンクロキネシス",
				'zh-tw': "同步強念",
			},
			damage: "30+",
			cost: ["Psychic"],
			effect: {
				ja: "おたがいの手札を見せ合い、その中にそれぞれ同じ名前のカードがあるなら、90ダメージ追加。",
				'zh-tw': "互看雙方手牌，若其中有名稱相同的卡，則增加90點傷害。",
			},
		},
		{
			name: {
				ja: "ねんどうだん",
				'zh-tw': "念動彈",
			},
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651092,
				tcgplayer: 569876,
			},
		},
	],

	evolveFrom: {
		ja: "マーイーカ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [687],
};

export default card;
