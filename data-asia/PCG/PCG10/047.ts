import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "カブトップス",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [141],
	hp: 110,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "原始凝視",
			},
			effect: {
				ja: "Kabutopsがあなたのアクティブなポカモンである限り、あなたの対戦相手は、彼または彼女のアクティブなポカモンを進化させるために、彼または彼女の手からの基本的なポカモンまたは進化カードをプレイすることはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "誘惑アンテナ",
			},
			effect: {
				ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンの1つで切り替えることができます。もしそうなら、この攻撃は新しい防御ポケモンに20のダメージを与えます。対戦相手は、防御するポケモンを選択して切り替えます。",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "裂け目",
			},
			damage: 60,
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
