import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "ウーパー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [194],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "スライム",
			},
			effect: {
				ja: "対戦相手の次のターン中に攻撃がWooperにダメージを与える場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃からWooperへのすべての損傷を防ぎます。 （その攻撃の他の効果はすべて発生します。）",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "テールスラップ",
			},
			damage: 20,
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
