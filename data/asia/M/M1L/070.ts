import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "キョジオーン",
	},

	illustrator: "Yano Keiji",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "指先を 擦りあわせて 塩を ケガした ポケモンに 振りかけると ひどい 傷も たちまち 治る。",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "ちからのしお"}, "effect": {"ja": "このポケモンがいるかぎり、自分のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。"}}],

	attacks: [{"name": {"ja": "ぶちかます"}, "damage": 130, "cost": ["Fighting", "Fighting", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ジオヅム",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [934],

	thirdParty: {
		cardmarket: 840365,
		tcgplayer: 647179,
	},
};

export default card;