import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "サニーゴ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "頭の 枝を 狙い ヒドイデが 追いかけてくると 自分で 枝を ポキリと 折って 逃げだすよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バブルシュート" },
			cost: ["Water"],
			effect: {
				ja: "相手のポケモン1匹に、このポケモンについている[水]エネルギーの数x20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559271,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [222],
};

export default card;
