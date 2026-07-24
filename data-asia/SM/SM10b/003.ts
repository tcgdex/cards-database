import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "イワパレス",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "重たい 岩を 背負って 乾燥した 土地を 何日でも 移動できる 脚力を 持つ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "シェルアーマー" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "れんぞくぎり" },
			damage: "50+",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げる。オモテが1回なら、40ダメージ追加。オモテが2回なら、80ダメージ追加。すべてオモテなら、150ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557194,
			},
		},
	],

	evolveFrom: {
		ja: "イシズマイ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [558],
};

export default card;
