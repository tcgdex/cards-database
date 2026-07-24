import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "ランプラー",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "臨終の 際に 現れて 魂が 肉体を 離れると すかさず 吸い取ってしまうのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "のろう" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンに、ダメカンを3個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558847,
			},
		},
	],

	evolveFrom: {
		ja: "ヒトモシ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [608],
};

export default card;
