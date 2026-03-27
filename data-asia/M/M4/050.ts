import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット",
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "よるこうさく" },
			effect: {
				ja: "自分の番に、このポケモンがバトル場にいるとき、1回使える。自分の山札からカードを1枚選び、山札を切る。そして選んだカードを山札の一番上に置く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "どくおんぱ" },
			damage: 80,
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくとこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	evolveFrom: {
		ja: "ゴルバット",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [169],
};

export default card;
