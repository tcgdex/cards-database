import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダンバル",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'ja-jp': "磁力を 放って 相手を ひき寄せた ところで お尻の ツメで 切り裂くのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "シングルスマッシュ" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559014,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [374],
};

export default card;
