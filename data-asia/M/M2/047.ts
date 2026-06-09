import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "フライゴン",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "砂漠の精霊 と 呼ばれる。 はばたくことで 巻き起こした 砂嵐の 中に 隠れている。",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "すなのはばたき"}, "effect": {"ja": "自分の番に、このカードを手札から出して進化させたときと、このポケモンがバトル場で相手のワザのダメージを受けてきぜつしたとき、それぞれ1回使える。相手の山札を上から2枚トラッシュする。"}}],

	attacks: [{"name": {"ja": "カッターウインド"}, "damage": 130, "cost": ["Fighting", "Fighting"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ビブラーバ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [330],

	thirdParty: {
		cardmarket: 850554,
		tcgplayer: 655826,
	},
};

export default card;