import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴチルゼル",
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "強力な サイコパワーの 影響で ゴチルゼルの 周囲の 空間が ねじれ 何万光年も 遠くの 星空が 映る。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ねじれたみらい" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手は相手自身の手札をすべて山札にもどして切る。その後、相手は山札を3枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シンクロショット" },
			damage: "90+",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "自分の手札と相手の手札が同じ枚数なら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "ゴチミル",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [576],
};

export default card;
