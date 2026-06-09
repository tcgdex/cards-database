import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ランドロス",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "ランドロスが 訪れる 土地は  作物が たくさん 実るため  畑の神様 と 言われている。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "がんせきおとし"}, "damage": 50, "cost": ["Fighting", "Fighting"], "effect": {"ja": "このワザのダメージは抵抗力を計算しない。"}}, {"name": {"ja": "スクリューナックル"}, "damage": 120, "cost": ["Fighting", "Fighting", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーを1個選び、手札にもどす。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [645],

	thirdParty: {
		cardmarket: 867962,
		tcgplayer: 674359,
	},
};

export default card;