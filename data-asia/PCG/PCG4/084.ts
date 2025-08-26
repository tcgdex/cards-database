import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ウルサリング",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [217],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "威圧的なリング",
			},
			effect: {
				ja: "UrsaringがアクティブなPokã©Monである限り、相手の基本的なPokã©MonはPokã©Powersを攻撃したり使用したりすることはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ドラッグします",
			},
			effect: {
				ja: "ダメージを与える前に、対戦相手のベンチ付きポケモンを防御するポケモンと交換することができます。もしそうなら、この攻撃は新しい防御ポケモンに20のダメージを与えます。対戦相手は、防御するポケモンを選択して切り替えます。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ロックスマッシュ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて20ダメージを与えます。",
			},
		},
	],

	retreat: 2,

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
