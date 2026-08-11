import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "フラージェス",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 120,
	types: ["Fairy"],

	description: {
		ja: "昔の 城の 主たちは 庭を 飾るため フラージェスを 招き入れ 花園を 作らせた。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ワンダーギフト" },
			effect: {
				ja: "自分の番に1回使える。コインを1回投げオモテなら、自分のトラッシュにあるグッズを1枚、相手に見せてから、山札の上にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ミストガード" },
			damage: 70,
			cost: ["Fairy", "Fairy", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンは[竜]ポケモンからワザのダメージを受けない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559605,
			},
		},
	],

	evolveFrom: {
		ja: "フラエッテ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [671],
};

export default card;
