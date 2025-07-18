import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Kakuna",
		ja: "カクナ",
		fr: "Kakuna",
		de: "Kakuna",
		es: "Kakuna",
		it: "Kakuna",
		pt: "Kakuna",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [14],
	hp: 80,
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
				en: "Flip a coin. If heads, prevent all damage done to Kakuna during your opponent's next turn. (Any other effects of attacks still happen.)",
				ja: "コインをひっくり返します。頭の場合は、相手の次のターン中にカクナにすべての損害を与えないようにします。 （攻撃の他の影響はまだ発生しています。）",
				fr: "Retourner une pièce. Si les têtes, empêchent tous les dommages causés à Kakuna lors du prochain tour de votre adversaire. (Tout autre effet des attaques se produit.)",
				de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Schäden, die Kakuna während der nächsten Kurve Ihres Gegners angerichtet haben. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
				es: "Voltea una moneda. Si se dirige, evite todo el daño causado a Kakuna durante el próximo turno de tu oponente. (Todavía ocurren cualquier otro efecto de los ataques).",
				it: "Capovolgi una moneta. Se le teste, impediscono tutti i danni arrecati a Kakuna durante il prossimo turno dell'avversario. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
				pt: "Vire uma moeda. Se as cabeças, impedem todos os danos causados a Kakuna durante o próximo turno do seu oponente. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
			},

		},
		{
			cost: ["Grass", "Grass"],
			name: {
				en: "Poisonpowder",
				ja: "毒パウダー",
				fr: "Poudre empoisonnée",
				de: "Giftpulver",
				es: "Pozal de veneno",
				it: "Velenco",
				pt: "Poisonpowder",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned.",
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
				fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.",
				de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.",
				es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.",
				it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.",
				pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.",
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
