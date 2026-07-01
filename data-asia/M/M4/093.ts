import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "ヌメイル",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "４本の ツノは 高性能の レーダー。 耳や 鼻の かわりに 音や においを 感じ取る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ひっぱたく",
			},
			damage: 70,
			cost: ["Water", "Psychic"],
		},
	],

	weaknesses: [],
	resistances: [],
	variants: [{ type: "holo" }],
	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [705],

	thirdParty: {
		cardmarket: 876964
	}
};

export default card;
