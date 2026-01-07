import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ハトーボー",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "どんなに 遠く 離れても トレーナーの もとに かならず もどってくる ことが できる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "そらをとぶ" },
			damage: 40,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。オモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "マメパト",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "Common",
	dexId: [520],
};

export default card;
