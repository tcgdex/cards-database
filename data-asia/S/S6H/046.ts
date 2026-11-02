import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリーセン",
		'zh-tw': "千針魚",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "全身の 小さな 針は ウロコが 変化したもの。 刺さると 毒で 気を失う。",
		'zh-tw': "全身上下的小針是由鱗片變化而來的。如果被刺中的話，就會中毒並陷入昏迷。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "はれつばり",
				'zh-tw': "破裂針",
			},
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、ワザを使ったポケモンにダメカンを6個のせる。",
				'zh-tw': "當這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害而【氣絕】時，在使用招式的寶可夢身上放置6個傷害指示物。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "どくづき",
				'zh-tw': "毒擊",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560462,
				tcgplayer: 569178,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [211],
};

export default card;
