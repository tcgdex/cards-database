import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "エンペルトex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "こうていのかまえ"}, "effect": {"ja": "このポケモンは、相手のポケモンが使うワザの効果を受けない。"}}],

	attacks: [{"name": {"ja": "アイアンフェザー"}, "damage": 210, "cost": ["Metal", "Metal", "Colorless"], "effect": {"ja": "次の相手の番、このポケモンが受けるワザのダメージは「-60」される。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ポッタイシ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [395],

	suffix: "EX",

	thirdParty: {
		cardmarket: 850607,
		tcgplayer: 655878,
	},
};

export default card;