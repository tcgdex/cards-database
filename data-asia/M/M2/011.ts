import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトカゲ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "尻尾で 燃える 炎は 生命力の 表れ。 元気がないと 炎は 弱まる。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "みがる"}, "effect": {"ja": "このポケモンにエネルギーがついていないなら、このポケモンはにげるためのエネルギーが、すべてなくなる。"}}],

	attacks: [{"name": {"ja": "ひだね"}, "damage": 20, "cost": ["Fire"]}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [4],

	thirdParty: {
		cardmarket: 850518,
		tcgplayer: 655790,
	},
};

export default card;