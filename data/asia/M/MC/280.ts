import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "テツノカイナ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		'ja-jp': "ある探検記に 記された テツノカイナという 物体と 似た点が 多い ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ショックウェーブ" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ちょうごうきんハンド" },
			damage: "80+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが「ポケモンex・V」なら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863576,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [992],
};

export default card;
