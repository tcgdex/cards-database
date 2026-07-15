import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "チャデス",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],

	description: {
		ja: "ヤバチャの リージョンフォームに 見えるが まったく 関係のない ポケモンと 最近 判明した。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ばけがくれ" },
			effect: {
				ja: "このポケモンは、相手のワザや特性の効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ひっそりのせる" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンに、ダメカンを1個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888241,
			},
		},
	],

	retreat: 0,
	regulationMark: "J",
	rarity: "Common",
	dexId: [1012],
};

export default card;
