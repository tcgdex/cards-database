import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "パラセクト",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [47],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "アレルギー性花粉",
			},
			effect: {
				ja: "ParaSectがプレイしている限り、プレイヤーの破棄パイルのカードは、攻撃やポケモンパワーの影響を受けません。 ParaSectが眠り、混乱し、麻痺した場合、このパワーは機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "睡眠ピンチャー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
