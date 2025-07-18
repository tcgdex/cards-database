import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Dragonair",
		ja: "ドラゴンエア",
		fr: "Dragonaire",
		de: "Dragonair",
		es: "Dragón",
		it: "Dragonair",
		pt: "Dragonair",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [148],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Slam",
				ja: "スラム",
				fr: "Claquer",
				de: "Zuschlagen",
				es: "Golpe",
				it: "Sbattere",
				pt: "Slam",
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
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				en: "Hyper Beam",
				ja: "ハイパービーム",
				fr: "Hyper faisceau",
				de: "Hyperstrahl",
				es: "Hiper viga",
				it: "Hyper Beam",
				pt: "Hyper Beam",
			},
			effect: {
				en: "If the Defending Pokemon has any Energy cards attached to it, choose 1 of them and discard it.",
				ja: "防御するポケモンにエネルギーカードが接続されている場合は、それらの1つを選択して破棄します。",
				fr: "Si le Pokémon en défense a des cartes d'énergie qui y sont attachées, choisissez-y 1 et jetez-la.",
				de: "Wenn das verteidigende Pokémon an Energiekarten verbunden ist, wählen Sie 1 davon und verwerfen Sie es.",
				es: "Si el Pokémon defensor tiene alguna tarjetas de energía unidas, elija 1 de ellas y deséchela.",
				it: "Se il Pokemon in difesa ha delle carte energetiche ad esso collegate, scegli 1 e scartalo.",
				pt: "Se o Pokémon atual tiver algum cartão de energia anexado a ele, escolha 1 deles e descarte -o.",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};
