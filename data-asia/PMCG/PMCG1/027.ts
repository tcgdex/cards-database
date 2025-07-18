import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Wartortle",
		ja: "wartortle",
		fr: "Wartortle",
		de: "Wartortle",
		es: "Verruga",
		it: "Wartortle",
		pt: "Wartortle",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [8],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				en: "Withdraw",
				ja: "撤回する",
				fr: "Retirer",
				de: "Zurückziehen",
				es: "Retirar",
				it: "Ritirare",
				pt: "Retirar",
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokemon by attacks.",
				ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、攻撃によってこのポケモンに与えられたすべてのダメージを防ぎます。",
				fr: "Retourner une pièce. Si les têtes, lors du prochain tour de votre adversaire, évitez tous les dégâts causés à ce pokemon par des attaques.",
				de: "Eine Münze drehen. Wenn Köpfe während der nächsten Kurve Ihres Gegners alle Schäden dieses Pokémon durch Angriffe verhindern.",
				es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan todo el daño causado a este Pokémon por ataques.",
				it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono tutti i danni arrecati a questo Pokemon dagli attacchi.",
				pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os danos causados a este Pokémon por ataques.",
			},

		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				en: "Bite",
				ja: "噛む",
				fr: "Mordre",
				de: "Beißen",
				es: "Morder",
				it: "Morso",
				pt: "Morder",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};
