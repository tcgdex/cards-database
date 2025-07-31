import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Zapdos",
		ja: "ザプドス",
		fr: "Zapdos",
		de: "Zapdos",
		es: "Zapdos",
		it: "Zapdos",
		pt: "Zapdos",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [145],
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			name: {
				en: "Thunder",
				ja: "雷",
				fr: "Tonnerre",
				de: "Donner",
				es: "Trueno",
				it: "Tuono",
				pt: "Trovão",
			},
			effect: {
				en: "Flip a coin. If tails, Zapdos does 30 damage to itself.",
				ja: "コインをひっくり返します。尾の場合、Zapdosはそれ自体に30のダメージを与えます。",
				fr: "Retourner une pièce. Si Tails, Zapdos se fait 30 dégâts.",
				de: "Eine Münze drehen. Wenn Schwänze, verursacht Zapdos 30 Schäden an sich.",
				es: "Voltea una moneda. Si Tails, Zapdos hace 30 daños a sí mismo.",
				it: "Capovolgi una moneta. Se code, Zapdos infligge 30 danni a se stesso.",
				pt: "Vire uma moeda. Se as caudas, Zapdos causam 30 danos a si mesmos.",
			},
			damage: 60,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning", "Lightning"],
			name: {
				en: "Thunderbolt",
				ja: "落雷",
				fr: "Coup de tonnerre",
				de: "Blitz",
				es: "Rayo",
				it: "Fulmine",
				pt: "Raio",
			},
			effect: {
				en: "Discard all Energy cards attached to Zapdos or this attack does nothing.",
				ja: "Zapdosに取り付けられたすべてのエネルギーカードを廃棄するか、この攻撃は何もしません。",
				fr: "Jeter toutes les cartes d'énergie attachées à Zapdos ou cette attaque ne fait rien.",
				de: "Verwerfen Sie alle an Zapdos verbundenen Energiekarten, oder dieser Angriff tut nichts.",
				es: "Deseche todas las cartas de energía unidas a Zapdos o este ataque no hace nada.",
				it: "Scartare tutte le carte di energia collegate a Zapdos o questo attacco non fa nulla.",
				pt: "Descarte todos os cartões de energia anexados a Zapdos ou este ataque não faz nada.",
			},
			damage: 100,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};
