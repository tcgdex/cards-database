import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "アマルス",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "おっとりした 性格の ポケモン。 ガチゴラスなど 凶暴な 敵の いない 寒い 土地に 住んでいた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こなゆき" },
			damage: 30,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "オーロラビーム" },
			damage: 60,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559568,
			},
		},
	],

	retreat: 3,
	rarity: "Uncommon",
	dexId: [698],
};

export default card;
