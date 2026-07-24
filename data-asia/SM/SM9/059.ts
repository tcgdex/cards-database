import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "カブトプス",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "陸でも 活動 できるよう 身体が 変化を 始めていたが 間に合わず 絶滅 してしまった。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かせきのきおく" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手は手札からサポートを出して使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "いわなだれ" },
			damage: 80,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン2匹にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558385,
			},
		},
	],

	evolveFrom: {
		ja: "カブト",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [141],
};

export default card;
