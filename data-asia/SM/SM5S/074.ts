import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ネクロズマ たそがれのたてがみGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ツメできりさく" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: { ja: "メテオテンペスト" },
			damage: 220,
			cost: ["Metal", "Metal", "Metal", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、3個トラッシュする。",
			},
		},
		{
			name: { ja: "イクリプスサンGX" },
			damage: 250,
			cost: ["Metal", "Metal", "Metal"],
			effect: {
				ja: "このワザは、自分のサイドの残り枚数が、相手より多いときにしか使えない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560028,
			},
		},
	],

	retreat: 3,
	rarity: "Hyper rare",
	dexId: [800],

	suffix: "GX",
};

export default card;
