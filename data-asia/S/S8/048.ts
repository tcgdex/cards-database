import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "メロエッタ",
		'zh-tw': "美洛耶塔",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "特殊な 発声法で 歌う メロディは 聞いた者の 感情を 自在に 操る。",
		'zh-tw': "以特殊的發聲法唱出的旋律，能自在地操控聽者的情緒。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "メロディアスエコー",
				'zh-tw': "旋律迴響",
			},
			damage: "70×",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている「フュージョンエネルギー」の数×70ダメージ。",
				'zh-tw': "造成自己的場上寶可夢身上附加的「匯流能量」的數量×70點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575603,
				tcgplayer: 569549,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [648],
};

export default card;
