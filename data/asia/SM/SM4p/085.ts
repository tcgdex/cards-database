import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "タイプ：ヌル",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "重い 制御マスクを つけており 本来の 能力を だせない。 特別な 力を 秘めている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "むじひないちげき" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、30ダメージ追加。",
			},
		},
		{
			name: { ja: "ヘッドバング" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560118,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [772],
};

export default card;
