import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ケケンカニV",
	},

	illustrator: "MUGENUP",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なだれおこし" },
			cost: ["Water"],
			effect: {
				ja: "相手の山札を上から2枚トラッシュする。",
			},
		},
		{
			name: { ja: "デストロイヤーパンチ" },
			damage: "90+",
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576181,
				tcgplayer: 569604,
			},
		},
	],

	retreat: 4,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [740],
};

export default card;
