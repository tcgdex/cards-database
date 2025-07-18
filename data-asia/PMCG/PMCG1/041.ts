import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Electabuzz",
		ja: "Electabuzz",
		fr: "Electabuzz",
		de: "Electabuzz",
		es: "Electabuzz",
		it: "Electabuzz",
		pt: "Electabuzz",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [125],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				en: "Thundershock",
				ja: "サンダーショック",
				fr: "Thundershock",
				de: "Donnerschock",
				es: "Tortuga",
				it: "Thundershock",
				pt: "Thundershock",
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
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				en: "Thunderpunch",
				ja: "サンダーパンチ",
				fr: "Coup de fouet",
				de: "Thunderpunch",
				es: "Trueno",
				it: "Thunderpunch",
				pt: "Thunderpunch",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, Electabuzz does 10 damage to itself.",
				ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与えます。尾の場合、ElectaBuzzはそれ自体に10ダメージを与えます。",
				fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 10 dégâts supplémentaires. Si Tails, Electabuzz se fait 10 dégâts.",
				de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 10 weitere Schäden. Wenn Electabuzz bei Schwänzen 10 Schäden an sich selbst verursacht.",
				es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 10 más de daño. Si Tails, Electabuzz hace 10 daños a sí mismo.",
				it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 10 altri danni. Se code, Electabuzz fa 10 danni a se stesso.",
				pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 10 mais danos. Se a cauda, electabuzz causa 10 danos a si mesmo.",
			},

		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};
