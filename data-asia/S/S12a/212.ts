import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "リザードンVSTAR",
		'zh-tw': "噴火龍VSTAR",
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "ばくれつファイヤー",
				'zh-tw': "爆裂火焰",
			},
			damage: "130+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンにダメカンがのっているなら、100ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加100點傷害。",
			},
		},
		{
			name: {
				ja: "スターブレイズ",
				'zh-tw': "[VSTAR力量]星星火焰",
			},
			damage: 320,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687774,
				tcgplayer: 571750,
			},
		},
	],

	evolveFrom: {
		ja: "リザードンV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [6],
};

export default card;
