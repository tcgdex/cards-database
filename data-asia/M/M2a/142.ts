import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのバイウールー",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "立派に 伸びた ツノは 異性に アピールするために 生えている。 武器として 使うことはない。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "チャレンジホーン"}, "effect": {"ja": "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"}}],

	attacks: [{"name": {"ja": "ずつき"}, "cost": ["Colorless", "Colorless", "Colorless"], "damage": 80}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ホップのウールー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [832],
};

export default card;
