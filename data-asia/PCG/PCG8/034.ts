import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "seccepile ex（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [254],
	hp: 140,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "余分な液体",
			},
			effect: {
				ja: "各プレイヤーのpokã©mon-exは、攻撃を使用するために{{e}}より多くのエネルギーを支払うことができません。各ポカモンは、1つ以上の余分な液体Pokã©Bodyによって影響を受けることはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "パワーリベンジ",
			},
			effect: {
				ja: "対戦相手が取った各賞カードに対して60のダメージと10件のダメージがさらに10件のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
