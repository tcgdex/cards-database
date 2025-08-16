import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Metapod",
		ja: "メタポッド",
		fr: "Métapode",
		de: "Metapod",
		es: "Metapod",
		it: "Metapode",
		pt: "Metapod",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [11],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Stiffen",
				ja: "硬直",
				fr: "Raidir",
				de: "Versteifen",
				es: "Endurecer",
				it: "Irrigidirsi",
				pt: "Endurecer",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Metapod during your opponent's next turn. (Any other effects of attacks still happen.)",
				ja: "コインをひっくり返します。頭の場合は、相手の次のターン中にメタポッドに与えられたすべての損傷を防ぎます。 （攻撃の他の影響はまだ発生しています。）",
				fr: "Retourner une pièce. Si les têtes, évitez tous les dégâts causés à Metapod lors du prochain tour de votre adversaire. (Tout autre effet des attaques se produit.)",
				de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Schäden an Metapod während der nächsten Kurve Ihres Gegners. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
				es: "Voltea una moneda. Si se dirige, evite todo el daño hecho a Metapod durante el próximo turno de su oponente. (Todavía ocurren cualquier otro efecto de los ataques).",
				it: "Capovolgi una moneta. Se le teste, impediscono tutti i danni fatti a Metapod durante il prossimo turno dell'avversario. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
				pt: "Vire uma moeda. Se as cabeças, impedem todos os danos causados ao Metapod durante o próximo turno do seu oponente. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
			},

		},
		{
			cost: ["Grass", "Grass"],
			name: {
				en: "Stun Spore",
				ja: "スタン胞子",
				fr: "Spored",
				de: "Stun Spore",
				es: "Espora",
				it: "Spora stordente",
				pt: "Esporo de atordoamento",
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
