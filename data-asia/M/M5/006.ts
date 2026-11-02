import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤバソチャ",
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "民家の 床下や 棚の奥など 冷暗所を 好む。 日没後 獲物を 探して 徘徊する。",
	},

	stage: "Stage1",

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
			name: { ja: "まっちゃスピン" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュに、特性「ばけがくれ」を持つポケモンが6枚以上あるなら、相手のポケモン全員に、それぞれダメカンを4個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888243,
			},
		},
	],

	evolveFrom: {
		ja: "チャデス",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [1013],
};

export default card;
