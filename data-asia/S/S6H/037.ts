import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュペッタ",
		'zh-tw': "詛咒娃娃",
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "捨てられた 怨念で 生まれる。 大切に されると 満足して 元の ヌイグルミに 戻るという。",
		'zh-tw': "誕生自遭到捨棄時的怨念。據說只要讓牠感覺自己受到重視，牠就會滿意地變回原本的玩偶。",
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
			type: "normal",
			thirdParty: {
				cardmarket: 560453,
				tcgplayer: 569169,
			},
		},
	],

	evolveFrom: {
		ja: "カゲボウズ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [354],
};

export default card;
