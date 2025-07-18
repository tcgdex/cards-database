import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Dewgong",
		ja: "デューゴン",
		fr: "Dewgong",
		de: "Dewgong",
		es: "Rocío",
		it: "Dewgong",
		pt: "Orvalho",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [87],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				en: "Aurora Beam",
				ja: "オーロラビーム",
				fr: "Faisceau auroré",
				de: "Aurora Strahl",
				es: "Haz de aurora",
				it: "Raggio di aurora",
				pt: "Feixe de aurora",
			},
			damage: 50,
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				en: "Ice Beam",
				ja: "アイスビーム",
				fr: "Faisceau de glace",
				de: "Eisstrahl",
				es: "Haz de hielo",
				it: "Raggio di ghiaccio",
				pt: "Feixe de gelo",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
				fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
				de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
				es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
				it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
				pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
			},
			damage: 30,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};
