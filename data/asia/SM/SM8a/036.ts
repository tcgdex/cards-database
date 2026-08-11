import { Card } from "models/database/card";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドータクン",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'ja-jp': "ドータクンに 祈りを ささげると 雨が 降り 作物を 育てると 古代の 人々は 信じていた。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "たいねつ" },
			effect: {
				'ja-jp': "このポケモンは、相手の[炎]ポケモンからワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "あやしいこくいん" },
			damage: 70,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558610,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドーミラー",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [437],
};

export default card;
