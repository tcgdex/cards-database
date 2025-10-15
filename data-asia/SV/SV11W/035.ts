import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "シンボラー",
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "古代都市を 守っていた 記憶を 残しているため いつも 同じ ルートを 飛んでいるらしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リフレクター" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-40」される。",
			},
		},
		{
			name: { ja: "テレキネシス" },
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、70ダメージ。このワザのダメージは弱点・抵抗力を計算しない。",
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

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [561],
};

export default card;
