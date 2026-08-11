import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ディアルガGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 180,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "クロックアップ" },
			cost: ["Metal"],
			effect: {
				ja: "自分の手札が6枚になるように、山札を引く。",
			},
		},
		{
			name: { ja: "ひきさく" },
			damage: 80,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "タイムレスGX" },
			damage: 150,
			cost: ["Metal", "Metal", "Metal", "Colorless", "Colorless"],
			effect: {
				ja: "この番が終わったら、もう1回自分の番を始める。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560029,
			},
		},
	],

	retreat: 3,
	rarity: "Hyper rare",
	dexId: [483],

	suffix: "GX",
};

export default card;
