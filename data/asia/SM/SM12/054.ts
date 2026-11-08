import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダイノーズ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'ja-jp': "チビノーズと 呼ばれる ユニットを 操るが たまに 迷子に なって 帰ってこないことも あるらしい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ハードプレス" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "トリプルノーズ" },
			damage: "80+",
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを3回投げ、オモテの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554908,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ノズパス",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [476],
};

export default card;
