import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ドータクン",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "別世界への 穴を 開けて そこから 雨を 降らしていた。 そのため 豊作の神 とされる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっぱたく" },
			damage: 40,
			cost: ["Metal"],
		},
		{
			name: { ja: "メタルブロック" },
			damage: 120,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが進化ポケモンから受けるワザのダメージは「-100」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888325,
			},
		},
	],

	evolveFrom: {
		ja: "ドーミラー",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [437],
};

export default card;
