import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "キョジオーン",
	},

	illustrator: "danciao",
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

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ジオヅム",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [934],

	thirdParty: {
		cardmarket: 840331,
		tcgplayer: 647145,
	},
};

export default card;