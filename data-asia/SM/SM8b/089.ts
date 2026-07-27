import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラキュウコン",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 110,
	types: ["Fairy"],

	description: {
		ja: "体毛から 氷の粒を 生み 敵に 浴びせかける。 怒らせると 一瞬で 氷漬けに される。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひかりのけっかい" },
			effect: {
				ja: "このポケモンは、相手の「ポケモンGX・EX」からワザのダメージや効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "オーロラビーム" },
			damage: 80,
			cost: ["Fairy", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550941,
			},
		},
	],

	evolveFrom: {
		ja: "アローラロコン",
	},

	retreat: 1,
	rarity: "None",
	dexId: [38],
};

export default card;
