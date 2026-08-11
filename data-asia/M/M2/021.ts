import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "パウワウ",
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "頭に でっぱりが あって 非常に 硬い。 頭突きで 氷山を 割って 進む。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "バブルドレイン"}, "damage": 20, "cost": ["Water", "Colorless"], "effect": {"ja": "このポケモンのHPを「20」回復する。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [86],

	thirdParty: {
		cardmarket: 850528,
		tcgplayer: 655800,
	},
};

export default card;