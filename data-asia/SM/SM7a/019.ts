import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "クマシュン",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "鼻水は 健康の バロメータ。 調子が いいと 粘り強くなり 氷の 技の 威力も 増す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あとびえ" },
			cost: ["Colorless"],
			effect: {
				ja: "このワザは、後攻プレイヤーの最初の番にだけ使える。相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "たたく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558907,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [613],
};

export default card;
