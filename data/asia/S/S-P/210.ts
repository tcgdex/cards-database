import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザV",
		'zh-tw': "皮卡丘",
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
				'zh-tw': "瘋狂伏特",
			},
			damage: 40,
			cost: ["Lightning"],
			effect: {
				ja: "自分の山札を上から2枚トラッシュする。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
			},
		},
		{
			name: { ja: "スパイラルバースト" },
			damage: "20+",
			cost: ["Fire", "Lightning"],
			effect: {
				ja: "のぞむなら、このポケモンについている[炎]または[雷]タイプのどちらかの基本エネルギーを2枚までトラッシュし、その枚数×80ダメージ追加。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 568804,
				tcgplayer: 597394,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [384],
};

export default card;
