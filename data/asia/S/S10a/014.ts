import { Card } from "models/database/card";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピカチュウ",
		'zh-tw': "皮卡丘",
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'ja-jp': "つくる 電気が 強力な ピカチュウほど ほっぺの 袋は 軟らかく よく 伸びるぞ。",
		'zh-tw': "越是能製造出強大電流的皮卡丘，臉頰上的囊就越 柔軟，同時也越有伸展性。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ピカダッシュ",
				'zh-tw': "皮卡衝刺",
			},
			effect: {
				'ja-jp': "このポケモンにエネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
				'zh-tw': "若這隻寶可夢身上附有能量，則這隻寶可夢【撤退】所需的能量全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "きまぐれタックル",
				'zh-tw': "胡思亂撞",
			},
			damage: 50,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656253,
				tcgplayer: 570677,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577100,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [25],
};

export default card;
