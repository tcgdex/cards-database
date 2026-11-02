import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "タタッコ",
		'zh-tw': "拳拳蛸",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "３歳児 くらいの 賢さ。 触手は よくちぎれるが 再生するので 気にしない。",
		'zh-tw': "智商大致相當於３歲的兒童。雖然觸手經常斷掉，但因為能再生，所以牠並不在意。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "たたく",
				'zh-tw': "敲擊",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560817,
				tcgplayer: 569270,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [852],
};

export default card;
