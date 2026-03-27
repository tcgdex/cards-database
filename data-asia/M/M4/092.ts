import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メタング",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "",
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
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「30」少なくなる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	evolveFrom: {
		ja: "ダンバル",
	},

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [375],
};

export default card;
