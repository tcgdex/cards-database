import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲコガシラ",
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "身軽さは だれにも 負けない。 ６００メートルを 超える タワーの 天辺まで １分で 登りきる。",
	},

	stage: "Stage1",
	attacks: [
		{ "name": { "ja": "よびよせのじゅつ" }, "damage": "", "cost": ["Water"], "effect": { "ja": "自分の山札からポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。" } },
		{ "name": { "ja": "アクアエッジ" }, "damage": "50", "cost": ["Water", "Water"], "effect": { "ja": "" } }
	],

	
	weaknesses: [{ "type": "Lightning", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	evolveFrom: {
		ja: "ケロマツ",
	},
	rarity: "Common",
	dexId: [657],
	regulationMark: "I",
};

export default card;
