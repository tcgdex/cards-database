import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピカチュウVMAX",
		'zh-tw': "皮卡丘VMAX",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				'ja-jp': "キョダイボルテッカー",
				'zh-tw': "超極巨伏特攻擊",
			},
			damage: "120+",
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				'ja-jp': "のぞむなら、このポケモンについているエネルギーを、すべてトラッシュする。その場合、150ダメージ追加。",
				'zh-tw': "若希望，將這隻寶可夢身上附加的能量全部丟棄。這個情況下，增加150點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586562,
				tcgplayer: 571299,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ピカチュウV",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Triple Rare",
	dexId: [25],
};

export default card;
