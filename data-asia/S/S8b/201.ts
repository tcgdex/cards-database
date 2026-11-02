import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マホイップ",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "手から 生みだす クリームは マホイップが 幸せなとき 甘味と コクが 深まる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ついかオーダー" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、自分の「マスター」を使っても、自分の番は終わらない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "レインボーフレーバー" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている基本エネルギーのタイプの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586940,
				tcgplayer: 571453,
			},
		},
	],

	evolveFrom: {
		ja: "マホミル",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [869],
};

export default card;
