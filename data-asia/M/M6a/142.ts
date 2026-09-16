import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ルギア",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "クリスタルタイプ" },
			effect: {
				ja: "このポケモンに、「炎」「水」「超」いずれかの「基本エネルギーカード」を、手札から出してつけたなら、その番の終わりまで、このポケモンの「タイプ（色）」は、つけた「基本エネルギーカード」と同じになる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコキネシス" },
			damage: "10×",
			cost: ["Psychic", "Fire"],
			effect: {
				ja: "［相手］についている「エネルギーカード」の枚数×10ダメージ。",
			},
		},
		{
			name: { ja: "スチームブラスト" },
			damage: 50,
			cost: ["Water", "Water", "Fire", "Colorless"],
			effect: {
				ja: "［自分］についている「エネルギーカード」を1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908320,
			},
		},
	],

	retreat: 3,
	rarity: "Classic Collection",
	dexId: [249],
};

export default card;
