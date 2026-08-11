import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドータクン",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

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
				'ja-jp': "次の相手の番、このポケモンが進化ポケモンから受けるワザのダメージは「-100」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560968,
				tcgplayer: 569224,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドーミラー",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Secret Rare",
	dexId: [437],
};

export default card;
