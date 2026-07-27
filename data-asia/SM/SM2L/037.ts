import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "エルフーン",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Fairy"],

	description: {
		ja: "風に 乗り 民家に 侵入。 部屋中を 綿まみれに すると ニコニコ 笑って 去っていく。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "よけいなわたげ" },
			cost: ["Colorless"],
			effect: {
				ja: "次の自分の番、このワザを受けたポケモンがきぜつしたとき、サイドを2枚多くとる。",
			},
		},
		{
			name: { ja: "ようせいのかぜ" },
			damage: 30,
			cost: ["Fairy"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561441,
			},
		},
	],

	evolveFrom: {
		ja: "モンメン",
	},

	retreat: 0,
	rarity: "Uncommon",
	dexId: [547],
};

export default card;
