import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザV",
		'zh-tw': "烈空坐V",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 210,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "りゅうのはどう",
				'zh-tw': "龍之波動",
			},
			damage: 40,
			cost: ["Lightning"],
			effect: {
				ja: "自分の山札を上から2枚トラッシュする。",
				'zh-tw': "將自己的牌庫上方2張卡丟棄。",
			},
		},
		{
			name: {
				ja: "スパイラルバースト",
				'zh-tw': "螺旋爆破",
			},
			damage: "20+",
			cost: ["Fire", "Lightning"],
			effect: {
				ja: "のぞむなら、このポケモンについている[炎]または[雷]タイプのどちらかの基本エネルギーを2枚までトラッシュし、その枚数×80ダメージ追加。",
				'zh-tw': "若希望，將這隻寶可夢身上附加的【火】或者【雷】任一屬性的最多2張基本能量卡丟棄，增加其張數×80點傷害。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586635,
				tcgplayer: 571372,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [384],
};

export default card;
