import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "プラスレ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [311],
	hp: 50,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "イベントのチェーン",
			},
			effect: {
				ja: "プラスレがあなたのアクティブなポカモンである限り、他のアクティブなポケモンが攻撃をするときはいつでも、最初の攻撃の後に応援を使用することができます（応援を使用するために必要なエネルギーが必要です）。他のアクティブなポカモンがイベントのチェーンを持っている場合でも、この方法で応援を使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "応援",
			},
			effect: {
				ja: "各ポケモン（Plusleを含む）から1つのダメージカウンターを取り外します。",
			},
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "余分な回路",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 Pokemon-Exを選択した場合、この攻撃は代わりに40のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
