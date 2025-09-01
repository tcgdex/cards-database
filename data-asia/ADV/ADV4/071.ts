import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "Metagross Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [376],
	hp: 150,
	types: ["Metal"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "金属反転",
			},
			effect: {
				ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンの1つで切り替えることができます。対戦相手は、防御するポケモンを選択して切り替えます。もしそうなら、この攻撃は新しい防御ポケモンに40のダメージを与えます。",
			},
			damage: 40,
		},
		{
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
			name: {
				ja: "余分な彗星パンチ",
			},
			effect: {
				ja: "次のターン中に、追加の彗星パンチは50のダメージと50のダメージを与えます。",
			},
		},
	],

	retreat: 4,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
