import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "venomoth",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [49],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "ツイスターをかき混ぜます",
			},
			effect: {
				ja: "対戦相手は、ディフェンディングポケモンを1匹のベンチポケモンで切り替えます。次に、ベンチ付きポケモン1枚でアクティブなポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "レインボーパウダー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御ポケモンは現在毒されます。",
			},
			damage: 20,
		},
	],

	retreat: 0,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
