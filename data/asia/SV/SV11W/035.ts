import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シンボラー",
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "古代都市を 守っていた 記憶を 残しているため いつも 同じ ルートを 飛んでいるらしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リフレクター" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-40」される。",
			},
		},
		{
			name: { ja: "テレキネシス" },
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のポケモン1匹に、70ダメージ。このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [561],
	thirdParty: {
		cardmarket: 829037,
		tcgplayer: 636588,
	},
};

export default card;
