import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラガラガラ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "仲間を 弔う 習性。 道の すみに 盛り上がった 土が あったら それは ガラガラの 墓。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "リンボーリンボー" },
			cost: [],
			effect: {
				ja: "自分の山札にある基本エネルギーを2枚まで、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "アローラサークル" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場の、名前に「アローラ」とつくポケモンの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550686,
			},
		},
	],

	evolveFrom: {
		ja: "カラカラ",
	},

	retreat: 2,
	rarity: "None",
	dexId: [105],
};

export default card;
