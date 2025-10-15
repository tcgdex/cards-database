import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ダンゴロ",
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "６角形の 耳を 持つ。 地底で 圧縮された 体は 鉄に 負けないくらい 硬い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かたくなる" },
			cost: ["Fighting"],
			effect: {
				ja: "次の相手の番、このポケモンは「40」以下のワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "いわころがり" },
			damage: 30,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [524],
};

export default card;
