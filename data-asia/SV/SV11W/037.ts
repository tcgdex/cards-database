import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "デスカーン",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "近づいた 人間を 飲みこんで ミイラに してしまうという ウワサ。 金塊を 好んで 食べる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "のびるダメカーン" },
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のポケモン1匹にのせ替える。",
			},
		},
		{
			name: { ja: "まどわす" },
			damage: 60,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: { ja: "相手のバトルポケモンをこんらんにする。" },
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
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

	evolveFrom: {
		ja: "デスマス",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [563],
	thirdParty: {
		cardmarket: 829039,
		tcgplayer: 636590,
	},
};

export default card;
