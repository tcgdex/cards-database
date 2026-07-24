import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "ラランテス",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "鮮やかな 体色を 保つには 非常に 手間が かかるが それを 趣味にする 好事家も いるのだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "にほんばれ" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の[草]または[炎]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ソーラービーム" },
			damage: 80,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560040,
			},
		},
	],

	evolveFrom: {
		ja: "カリキリ",
	},

	retreat: 2,
	rarity: "None",
	dexId: [754],
};

export default card;
