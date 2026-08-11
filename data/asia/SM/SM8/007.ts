import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "アリアドス",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "尻からも 口からも 糸をだす。 糸で 獲物を 絡め取り ゆっくりと 体液を すする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トラップスレッド" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、相手が手札からグッズまたはサポートを出して使ったとき、その効果を受けない。",
			},
		},
		{
			name: { ja: "どくづき" },
			damage: 70,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558646,
			},
		},
	],

	evolveFrom: {
		ja: "イトマル",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [168],
};

export default card;
