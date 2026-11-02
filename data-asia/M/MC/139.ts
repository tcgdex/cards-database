import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エースバーンex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "フレアストライク" },
			damage: 280,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「フレアストライク」が使えない。",
			},
		},
		{
			name: { ja: "ガーネットボレー" },
			cost: ["Fire", "Fighting", "Darkness"],
			effect: {
				ja: "相手のポケモン1匹に、180ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863435,
			},
		},
	],

	evolveFrom: {
		ja: "ラビフット",
	},

	retreat: 0,
	regulationMark: "H",
	rarity: "None",
	dexId: [815],

	suffix: "EX",
};

export default card;
