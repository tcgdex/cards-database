import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "シャリタツ",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "非常に 悪賢い ポケモン。 弱ったふりで 獲物を おびき寄せ 仲間の ポケモンに 襲わせる。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "きゃくよせ"}, "effect": {"ja": "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を上から6枚見て、その中からサポートを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。"}}],

	attacks: [{"name": {"ja": "なみのり"}, "cost": ["Fire", "Water"], "damage": 50}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [978],
};

export default card;
