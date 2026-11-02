import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ドダイトス",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	description: {
		ja: "小さな ポケモンたちが 集まり 動かない ドダイトスの 背中で 巣作りを はじめることがある。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ギガドレイン" },
			damage: 50,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
		{
			name: { ja: "じしん" },
			damage: 180,
			cost: ["Grass", "Grass", "Grass", "Colorless"],
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559962,
			},
		},
	],

	evolveFrom: {
		ja: "ハヤシガメ",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [389],
};

export default card;
