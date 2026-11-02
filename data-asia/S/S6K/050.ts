import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロスVMAX",
		'zh-tw': "巨金怪VMAX",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "でんじきゅうちゃく",
				'zh-tw': "極巨衝刺",
			},
			cost: ["Metal"],
			effect: {
				ja: "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
				'zh-tw': "在下個自己的回合，這隻寶可夢「極巨衝刺」的傷害「+150」點。",
			},
		},
		{
			name: { ja: "ダイラッシュ" },
			damage: 100,
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンの「ダイラッシュ」のダメージは「+150」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560836,
				tcgplayer: 569278,
			},
		},
	],

	evolveFrom: {
		ja: "メタグロスV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [376],
};

export default card;
