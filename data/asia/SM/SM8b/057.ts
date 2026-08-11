import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジガルデ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'ja-jp': "生態系を 監視 していると 考えられている。 さらなる 力を 秘めているとの ウワサ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "へびにらみ" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "カームストライク" },
			damage: "60+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分がすでにGXワザを使っていたなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550771,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [718],
};

export default card;
