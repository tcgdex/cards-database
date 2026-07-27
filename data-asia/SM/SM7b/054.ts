import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミッキュGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Fairy"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まどわす" },
			cost: ["Fairy"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "ぽかぼかフォール" },
			damage: "10+",
			cost: ["Fairy", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数x30ダメージ追加。",
			},
		},
		{
			name: { ja: "ドリームフィアーGX" },
			cost: ["Fairy"],
			effect: {
				ja: "相手のベンチポケモン1匹と、そのポケモンについているすべてのカードを、相手の山札にもどして切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558879,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [778],

	suffix: "GX",
};

export default card;
