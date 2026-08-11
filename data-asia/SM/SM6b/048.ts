import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ホウオウ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "心正しき トレーナーの 前に 七色の 翼を 光らせながら 姿を 現すと 伝えられる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "レインボーバーン" },
			damage: "30+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている基本エネルギーのタイプの数x30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559198,
			},
		},
	],

	retreat: 2,
	rarity: "Uncommon",
	dexId: [250],
};

export default card;
