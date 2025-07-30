import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "ミンン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [312],
	hp: 50,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "イベントのチェーン",
			},
			effect: {
				ja: "MinunがアクティブなPokã©Monである限り、他のアクティブなPokã©Mon（もしあれば、攻撃があれば、最初の攻撃後に応援を使用することができます（応援を使用するために必要なエネルギーが必要です）。他のアクティブなポカモンがイベントのチェーンを持っている場合でも、この方法で応援を使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "応援",
			},
			effect: {
				ja: "各ポケモン（Minunを含む）から1つのダメージカウンターを取り外します。",
			},
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "特別なサーキット",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。ポケパワーまたはポケボディを持つポケモンを選択する場合、この攻撃は代わりに40のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
