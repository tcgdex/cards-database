import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウV",
		'zh-tw': "皮卡丘V",
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "じゅうでん",
				'zh-tw': "充電",
			},
			cost: ["Lightning"],
			effect: {
				ja: "自分の山札から[雷]エネルギーを2枚まで選び、このポケモンにつける。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張【雷】能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "10まんボルト",
				'zh-tw': "十萬伏特",
			},
			damage: 200,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
				'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586561,
				tcgplayer: 571298,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Double rare",
	dexId: [25],
};

export default card;
