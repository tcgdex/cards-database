import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "パルデア ケンタロス",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "筋骨隆々の 体で 格闘戦が 得意。 短い ツノで 急所を 狙う。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "いかりのとっしん"}, "damage": "40x", "cost": ["Fighting"], "effect": {"ja": "自分の場の、ダメカンがのっている名前に「ケンタロス」とつくポケモンの数×40ダメージ。"}}, {"name": {"ja": "すてみタックル"}, "damage": 70, "cost": ["Fighting", "Fighting"], "effect": {"ja": "このポケモンにも20ダメージ。"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [128],

	thirdParty: {
		cardmarket: 850549,
		tcgplayer: 655821,
	},
};

export default card;