import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "アズマオウ",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "秋になると プロポーズのため 体に 脂が のってきて とても きれいな色に 変化する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ハイドロショット" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、このポケモンについている[W]エネルギーの数×30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	evolveFrom: {
		ja: "トサキント",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [119],

	thirdParty: {
		cardmarket: 888250,
	},
};

export default card;
