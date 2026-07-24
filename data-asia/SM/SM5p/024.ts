import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "ドダイトス",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "小さな ポケモンたちが 集まり 動かない ドダイトスの 背中で 巣作りを はじめることがある。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ギガドレイン" },
			damage: 50,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
		{
			name: { ja: "じしん" },
			damage: 180,
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559774,
			},
		},
	],

	evolveFrom: {
		ja: "ハヤシガメ",
	},

	retreat: 4,
	rarity: "None",
	dexId: [389],
};

export default card;
