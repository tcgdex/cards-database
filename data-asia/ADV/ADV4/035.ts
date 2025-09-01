import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴアビー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [368],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スタンニードル",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "神秘的な水",
			},
			effect: {
				ja: "20ダメージに加えて、プレー中の精神エネルギーごとにさらに10ダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
