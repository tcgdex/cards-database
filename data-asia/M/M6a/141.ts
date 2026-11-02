import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ひかるセレビィ",
	},

	illustrator: "Hironobu Yoshida",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いやしのみず" },
			cost: ["Water"],
			effect: {
				ja: "自分の控えポケモンを1匹選ぶ。その後、自分についている「水」エネルギーの数ぶんのダメージカウンターを、選んだポケモンからとりのぞく。（自分に控えがいないとき、このワザは失敗する。）",
			},
		},
		{
			name: { ja: "ミラクルリーフ" },
			damage: 10,
			cost: ["Grass", "Psychic"],
			effect: {
				ja: "［相手］についている「エネルギー」の数ぶんコインを投げる。1枚でも「おもて」なら、「どく・ねむり・こんらん」の中から1つを選び、相手をその状態にする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908319,
			},
		},
	],

	retreat: 1,
	rarity: "Classic Collection",
	dexId: [251],
};

export default card;
