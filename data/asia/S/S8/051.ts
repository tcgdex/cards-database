import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラパルト",
		'zh-tw': "多龍巴魯托",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "ツノに 入った ドラメシヤは マッハの スピードで 飛ばされるのを 心待ちに しているらしい。",
		'zh-tw': "牠角裡的多龍梅西亞似乎滿心期待著能被以音速發射出去。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "フュージョンアサルト",
				'zh-tw': "匯流進擊",
			},
			damage: "30×",
			cost: ["Psychic"],
			effect: {
				ja: "自分の場の「フュージョン」のポケモンの数×30ダメージ。",
				'zh-tw': "造成自己的場上「匯流」寶可夢的數量×30點傷害。",
			},
		},
		{
			name: {
				ja: "スピードアタック",
				'zh-tw': "高速攻擊",
			},
			damage: 120,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575606,
				tcgplayer: 569552,
			},
		},
	],

	evolveFrom: {
		ja: "ドロンチ",
	},

	retreat: 0,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [887],
};

export default card;
