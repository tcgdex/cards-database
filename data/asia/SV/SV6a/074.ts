import { Card } from "models/database/card";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オノンド",
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		'ja-jp': "太い キバを 使って 獲物を きれいに 捌いて 食べるものと 保存する ものに 分けるのだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きんちょうかん" },
			effect: {
				'ja-jp': "このポケモンは、相手が手札からグッズまたはサポートを出して使ったとき、その効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "りゅうのはどう" },
			damage: 80,
			cost: ["Fighting", "Metal"],
			effect: {
				'ja-jp': "自分の山札を上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773823,
				tcgplayer: 566325,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "キバゴ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [611],
};

export default card;
