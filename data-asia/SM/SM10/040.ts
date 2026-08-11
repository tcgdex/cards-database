import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャスパー",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "強力な サイコパワーが 漏れ出さないように 放出する 器官を 耳で ふさいでいるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねこびより" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。その後、このポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "イヤーキネシス" },
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹に、そのポケモンにのっているダメカンの数x20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557395,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [677],
};

export default card;
