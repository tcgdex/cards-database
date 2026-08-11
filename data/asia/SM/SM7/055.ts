import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロス",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		ja: "２匹の メタングが 連結。 ４つの 脳の 並列処理で どんな 計算も あっという間。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エクステンド" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、自分の「ダイゴの決断」を使っても、自分の番は終わらない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "コメットパンチ" },
			damage: 60,
			cost: ["Metal"],
			effect: {
				ja: "次の自分の番、このポケモンの「コメットパンチ」のダメージは「+60」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559016,
			},
		},
	],

	evolveFrom: {
		ja: "メタング",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [376],
};

export default card;
