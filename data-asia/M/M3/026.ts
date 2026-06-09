import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ルクシオ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "仲間と 尻尾を つなげると より 強力な 電撃を ツメから 出すことが できる。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "とうしのおたけび"}, "effect": {"ja": "相手のバトルポケモンが「ポケモンex」なら、このポケモンは、最初の自分の番や、出したばかりの番でも進化できる。"}}],

	attacks: [{"name": {"ja": "バチバチ"}, "damage": 40, "cost": ["Lightning", "Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "コリンク",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [404],

	thirdParty: {
		cardmarket: 867947,
		tcgplayer: 674345,
	},
};

export default card;