import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "トランセル",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "カラの中は ドロドロの 液体。 進化に 備えて 体中の 細胞を 作りなおしている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "うか" },
			effect: {
				ja: "自分の番に1回使える。コインを1回投げオモテなら、このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "むしくい" },
			damage: 30,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558121,
			},
		},
	],

	evolveFrom: {
		ja: "キャタピー",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [11],
};

export default card;
