import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュペッタ",
	},

	illustrator: "Tomomi Kaneko",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "捨てられた 怨念で 生まれる。 大切に されると 満足して 元の ヌイグルミに 戻るという。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かくごのうらみ" },
			damage: "20×",
			cost: ["Psychic"],
			effect: {
				ja: "このポケモンにダメカンを7個までのせ、のせた数×20ダメージ。",
			},
		},
		{
			name: { ja: "ぶきみなひかり" },
			damage: 50,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586936,
				tcgplayer: 571449,
			},
		},
	],

	evolveFrom: {
		ja: "カゲボウズ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [354],
};

export default card;
