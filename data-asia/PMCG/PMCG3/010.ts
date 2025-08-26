import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Psyduck",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [54],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "頭痛",
			},
			effect: {
				ja: "対戦相手は、次のターン中にトレーナーカードをプレイできません。",
			},

		},
		{
			cost: ["Water"],
			name: {
				ja: "フューリースワイプ",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
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
