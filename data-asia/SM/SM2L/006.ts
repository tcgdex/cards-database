import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤトウモリ",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "体液を 燃やし 毒ガスを たく。 ガスを 吸った 敵が フラフラに なったあと 襲いかかるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 10,
			cost: ["Fire"],
		},
		{
			name: { ja: "ベノムショック" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンがどくなら、40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561410,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [757],
};

export default card;
