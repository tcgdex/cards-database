import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メタング",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "２匹の ダンバルが 合体した。 鋼の ボディは ジェット機と 衝突しても 傷つかない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "メタルクロー" },
			damage: 30,
			cost: ["Metal"],
		},
		{
			name: { ja: "ガードプレス" },
			damage: 70,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877321,
			},
		},
	],

	evolveFrom: {
		ja: "ダンバル",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [375],
};

export default card;
