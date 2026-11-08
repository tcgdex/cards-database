import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タイプ：ヌル",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'ja-jp': "ある任務の ために 開発された ポケモン兵器。 実験中に 暴走した ため 凍結された。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "けとばす" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "クイックアタック" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
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
				cardmarket: 557243,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [772],
};

export default card;
