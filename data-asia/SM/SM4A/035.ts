import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "プクリン",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 120,
	types: ["Fairy"],

	description: {
		ja: "ふわふわの 毛は 季節の 変わり目に 抜け落ちる。 それを 拾い集めて 紡いだ 毛糸は 高級品。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "さいみんはどう" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "おしおきビンタ" },
			damage: "60+",
			cost: ["Fairy", "Colorless", "Colorless"],
			effect: {
				ja: "相手の場のポケモンに[悪]エネルギーがついているなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560281,
			},
		},
	],

	evolveFrom: {
		ja: "プリン",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [40],
};

export default card;
