import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "フーパ",
		'zh-tw': "皮卡丘",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "気に入った ものを リングを 使い 秘密の 住処へ 集めている。 リングを 潜って テレポートする。",
		'zh-tw': "最近發表了聚集大量皮卡丘來建造發電廠的計畫。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "アサルトゲート",
				'zh-tw': "電擊",
			},
			damage: 90,
			cost: ["Darkness"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていないなら、このワザは失敗。このワザのダメージは弱点を計算しない。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 468289,
				tcgplayer: 597292,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [720],
};

export default card;
