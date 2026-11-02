import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "チャデス",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "ヤバチャの リージョンフォームに 見えるが まったく 関係のない ポケモンと 最近 判明した。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おちゃだし" },
			cost: ["Grass"],
			effect: {
				ja: "自分のトラッシュから「基本[G]エネルギー」を1枚選び、相手に見せて、手札に加える。",
			},
		},
		{
			name: { ja: "ふいをつく" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863369,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [1012],
};

export default card;
