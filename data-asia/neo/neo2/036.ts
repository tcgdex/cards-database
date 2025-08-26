import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "Pupitar",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [247],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "頭蓋骨バッシュ",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "ダストデビル",
			},
			effect: {
				ja: "プレイ中の各戦闘ポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
