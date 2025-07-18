import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Nidorino",
		ja: "ニドリーノ",
		fr: "Nidorino",
		de: "Nidorino",
		es: "Nido",
		it: "Nidorino",
		pt: "Nidorino",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [33],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				en: "Double Kick",
				ja: "ダブルキック",
				fr: "Coup de pied",
				de: "Double Kick",
				es: "Doble patada",
				it: "Doppio calcio",
				pt: "Chute duplo",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
				fr: "Flip 2 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
				de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
				es: "Flip 2 monedas. Este ataque hace 30 veces el número de cabezas.",
				it: "Flip 2 monete. Questo attacco fa 30 danni volte al numero di teste.",
				pt: "Flip 2 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
			},

		},
		{
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			name: {
				en: "Horn Drill",
				ja: "ホーンドリル",
				fr: "Perceuse à cornes",
				de: "Hornbohrer",
				es: "Taladro",
				it: "Trapano a corno",
				pt: "Broca de chifre",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};
