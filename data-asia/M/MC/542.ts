import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オノンド",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		ja: "太い キバを 使って 獲物を きれいに 捌いて 食べるものと 保存する ものに 分けるのだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きんちょうかん" },
			effect: {
				ja: "このポケモンは、相手が手札からグッズまたはサポートを出して使ったとき、その効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "りゅうのはどう" },
			damage: 80,
			cost: ["Fighting", "Metal"],
			effect: {
				ja: "自分の山札を上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863844,
			},
		},
	],

	evolveFrom: {
		ja: "キバゴ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [611],
};

export default card;
