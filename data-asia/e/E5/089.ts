import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "カリザード",
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [6],
	hp: 110,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "クリスタルタイプ",
			},
			effect: {
				ja: "火、稲妻、または基本的なエネルギーカードとの戦いを手からチャリザードに取り付けると、Charizardのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire", "Fighting"],
			name: {
				ja: "ファイアブラスト",
			},
			effect: {
				ja: "Charizardに取り付けられたエネルギーカードを廃棄します。",
			},
			damage: 40,
		},
		{
			cost: ["Fire", "Lightning", "Lightning", "Colorless"],
			name: {
				ja: "ドラゴンテール",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の50回のダメージ時間を実行します。",
			},
		},
	],

	retreat: 4,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",

		},
		{
			type: "normal",
			stamps: ["1st Edition"],
		},
	],
};
