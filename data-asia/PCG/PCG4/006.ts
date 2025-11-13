import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "アリアドス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [168],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "反応毒",
			},
			effect: {
				ja: "防御ポケモンに影響を与える特別な状態ごとに、10のダメージと30のダメージを与えます。",
			},
		},
		{
			cost: ["Grass"],
			name: {
				ja: "スパイダートラップ",
			},
			effect: {
				ja: "防御するポケモンは今眠っていて毒されています。この効果を適用する前に、対戦相手のベンチポケモンを1匹の防御ポケモンに切り替えることができます。もしそうなら、新しい防御ポケモンは眠って毒されています。対戦相手は、防御するポケモンを選択して切り替えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
