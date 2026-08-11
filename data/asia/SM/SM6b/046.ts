import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ガルーラ",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'ja-jp': "お腹の 子どもは およそ ３年で 親離れする。 母親が 大声で 鳴くのは その時だけ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こどものおつかい" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "ずつき" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "おやこパンチ" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559196,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [115],
};

export default card;
