import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Brock's Vulpix（LV.16）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [37],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "催眠術",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "火のリング",
			},
			effect: {
				ja: "対戦相手がベンチでポケモンを持っている場合は、1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
