import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "バンバドロ",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "力仕事 だけでなく 陶器の 材料の 上質な 泥を 作り出すため 大事にされてきた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "マッドストック" },
			cost: ["Fighting"],
			effect: {
				ja: "自分のベンチポケモン全員に、トラッシュから「基本[F]エネルギー」を1枚ずつつける。",
			},
		},
		{
			name: { ja: "10まんばりき" },
			damage: 140,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863707,
			},
		},
	],

	evolveFrom: {
		ja: "ドロバンコ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [750],
};

export default card;
