import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクト",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "３億年前に いた ポケモン。  プラズマ団に 改造 され  背中に 砲台を つけられた。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "バグズキャノン"}, "cost": ["Grass"], "effect": {"ja": "相手のポケモン1匹に、このポケモンについているエネルギーの数×20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}, {"name": {"ja": "スピードアタック"}, "damage": 110, "cost": ["Grass", "Grass", "Colorless"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [649],

	thirdParty: {
		cardmarket: 850515,
		tcgplayer: 655787,
	},
};

export default card;