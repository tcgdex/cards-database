import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウVMAX",
		'zh-tw': "阿渡的噴火龍V",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "キョダイボルテッカー",
				'zh-tw': "噴射火焰",
			},
			damage: "120+",
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを、すべてトラッシュする。その場合、150ダメージ追加。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525300,
				tcgplayer: 597324,
			},
		},
	],

	evolveFrom: {
		ja: "ピカチュウV",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [25],
};

export default card;
