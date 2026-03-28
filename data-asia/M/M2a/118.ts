import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドドゲザン",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		ja: "大軍勢を 率いて 戦うが 難しい 作戦は 苦手なので 力で 押して 押しまくるだけ。",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "そうだいしょう"}, "effect": {"ja": "このポケモンが使うワザの、相手のバトルポケモンへのダメージは、相手がすでにとったサイド1枚につき「+30」される。"}}],

	attacks: [{"name": {"ja": "もろはぎり"}, "cost": ["Metal", "Metal"], "damage": 180, "effect": {"ja": "このポケモンにも50ダメージ。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "キリキザン",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [983],
};

export default card;
