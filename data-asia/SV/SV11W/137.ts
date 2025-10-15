import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ズルズキン",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "縄張りに 入ってきた 相手を 集団で たたきのめす。 口から 酸性の 体液を 飛ばす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ごろつきアタック" },
			damage: "60x",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "自分の場のポケモンの数ぶんコインを投げ、オモテの数×60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "ズルッグ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [560],
};

export default card;
