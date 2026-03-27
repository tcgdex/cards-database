import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ブリガロン",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ニードルアーマー" },
			effect: {
				ja: "相手のポケモンのワザによるダメージを受けたとき、このポケモンについている草エネルギー1個につき、ワザを使ったポケモンにダメージカウンターを3個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かこいこむ" },
			damage: 160,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "ハリボーグ",
	},

	variants: [{ type: "holo" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 4,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [652],
};

export default card;
