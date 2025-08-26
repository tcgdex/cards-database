import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "ノクトウル",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [164],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "まぶしい視線",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、相手の手を見てください。対戦相手がそこにトレーナーカードを持っている場合は、そのうち1枚を選択してください。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。 Noctowlが眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "翼攻撃",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
