import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "クワガノン",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		ja: "腹部に 発電 器官を 持つ。 大アゴに エネルギーを 集め 凄まじい 電撃を 放つ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ステルスボディ" },
			effect: {
				ja: "場にスタジアムが出ているなら、このポケモンの弱点は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エレキほう" },
			damage: "120+",
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンについている[雷]エネルギーを、すべてトラッシュする。その場合、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558205,
			},
		},
	],

	evolveFrom: {
		ja: "デンヂムシ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [738],
};

export default card;
