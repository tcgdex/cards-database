import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "アマルルガ",
	},

	illustrator: "HACCAN",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		ja: "マイナス１５０度の 冷気を ひし形の 結晶から 出して 敵を 包み 氷漬けにする。",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "ツンドラウォール"}, "effect": {"ja": "このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-50」される。この特性の効果は重ならない。"}}],

	attacks: [{"name": {"ja": "いてつくれいき"}, "damage": 150, "cost": ["Water", "Water", "Colorless"], "effect": {"ja": "次の相手の番、このワザを受けたポケモンは、ワザが使えない。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "アマルス",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [699],

	thirdParty: {
		cardmarket: 867943,
		tcgplayer: 674342,
	},
};

export default card;