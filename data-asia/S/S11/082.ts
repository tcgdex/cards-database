import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ピジョットV",
		'zh-tw': "大比鳥V",
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "きえさるつばさ",
				'zh-tw': "消逝之翼",
			},
			effect: {
				ja: "このポケモンがベンチにいるなら、自分の番に1回使える。このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
				'zh-tw': "若這隻寶可夢在備戰區，則在自己的回合時可使用1次。將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "フライトサーフ",
				'zh-tw': "飛行衝浪",
			},
			damage: "80+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "場に自分のスタジアムが出ているなら、80ダメージ追加。",
				'zh-tw': "若場上有自己的競技場卡，則增加80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667957,
				tcgplayer: 570013,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [18],
};

export default card;
