import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "マグマ団のポチエナ",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "ポチエナの 鼻は どんな 匂いも 嗅ぎ分けられるから 偵察のときに とても 役立つんだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "せんにゅう" },
			cost: ["Colorless"],
			effect: {
				ja: "相手の手札を見る。",
			},
		},
		{
			name: { ja: "かみつく" },
			damage: 20,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563737,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [261],
};

export default card;
