import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "カブトップス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [141],
	hp: 90,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "原始オーラ",
			},
			effect: {
				ja: "Kabutopsがあなたのアクティブなポクモンである限り、どちらのプレイヤーも、ベンチでベンチポクモンを進化させるために彼または彼女の手から基本的なポクモンカードや進化カードをプレイすることはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "デュアルカット",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の50回のダメージ時間を実行します。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
