import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメイル",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "４本の ツノは 高性能の レーダー。 耳や 鼻の かわりに 音や においを 感じ取る。",
	},

	stage: "Stage1",
	attacks: [
		{ "name": { "ja": "ひっぱたく" }, "damage": "70", "cost": ["Water", "Psychic"], "effect": { "ja": "" } }
	],

	
	weaknesses: [],
	
	resistances: [],
	
	retreat: 3,

	variants: [{"type": "normal"}],
	evolveFrom: {
		ja: "ヌメラ",
	},
	rarity: "Common",
	dexId: [705],
	regulationMark: "I",
};

export default card;
