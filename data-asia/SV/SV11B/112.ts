import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ママンボウ",
	},

	illustrator: "Rond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "ママンボウの 体を おおう 特殊な 粘膜には 傷を 治す 効果が ある。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "やさしいヒレ" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分のトラッシュから、HPが「70」以下のたねポケモンを1枚選び、ベンチに出す。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たきのぼり" },
			damage: 70,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [594],

	thirdParty: {
		cardmarket: 829355,
		tcgplayer: 636466,
	},
};

export default card;
