import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "イノムー",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "４本の 脚は 短いが ひづめは 広く ギザギザ なので 雪の上でも 滑らず 歩ける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ふむ" },
			damage: 20,
			cost: ["Water"],
		},
		{
			name: { ja: "ねむる" },
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをねむりにする。このポケモンのHPを「90」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560255,
			},
		},
	],

	evolveFrom: {
		ja: "ウリムー",
	},

	retreat: 4,
	rarity: "Common",
	dexId: [221],
};

export default card;
