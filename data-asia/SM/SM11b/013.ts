import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨワシ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		ja: "ヨワシたちが 敵に 立ち向かうため 陣形を 組んだ。 海の魔物と 呼ばれるほどの 力を 誇る。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ちりぢり" },
			effect: {
				ja: "このポケモンにダメカンがのっているなら、相手の番の終わりに、コインを1回投げる。ウラなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ハイドロスプラッシュ" },
			damage: 130,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555147,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [746],
};

export default card;
