import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "プラスル",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "火花の ボンボンを 作って 仲間を 応援する。 電柱から 電気を 吸い取る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "タッグブースト" },
			damage: "10+",
			cost: ["Lightning"],
			effect: {
				ja: "自分のベンチに「マイナン」がいるなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560192,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [311],
};

export default card;
