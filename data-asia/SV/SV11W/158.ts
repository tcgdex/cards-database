import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "トルネロス",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "雲のような エネルギー体に 下半身が 包まれている。 時速３００キロで 空を 飛ぶ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かぜをまとう" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札から基本エネルギーを1枚選び、このポケモンにつける。",
			},
		},
		{
			name: { ja: "ぼうふう" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている基本エネルギーを1個選び、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [641],
};

export default card;
