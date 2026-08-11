import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ズルズキン",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "縄張りに 入ってきた 相手を 集団で たたきのめす。 口から 酸性の 体液を 飛ばす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ごろつきアタック" },
			damage: "60x",
			cost: ["Darkness", "Darkness"],
			effect: {
				'ja-jp': "自分の場のポケモンの数ぶんコインを投げ、オモテの数×60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		'ja-jp': "ズルッグ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [560],
	thirdParty: {
		cardmarket: 829496,
		tcgplayer: 636690,
	},
};

export default card;
