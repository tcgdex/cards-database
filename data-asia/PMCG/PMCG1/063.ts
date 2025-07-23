import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Farfetch'd",
		ja: "Farfetch'd",
		fr: "Farfetch'd",
		de: "Farfetch'd",
		es: "Farfetch'd",
		it: "Farfetch'd",
		pt: "Farfetch'd",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [83],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Leek Slap",
				ja: "ネギの平手打ち",
				fr: "Gifle de poireau",
				de: "Lauch Slap",
				es: "Bofetada",
				it: "Slap di porro",
				pt: "Slap de alho -poró",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. Either way, you can't use this attack again as long as Farfetch'd stays in play (even putting Farfetch'd on the Bench won't let you use it again).",
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。いずれにせよ、Farfetch'dがプレイにとどまる限り、この攻撃を再び使用することはできません（BenchにFarfetch'dを置くことでさえ、再び使用することはできません）。",
				fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien. Quoi qu'il en soit, vous ne pouvez pas utiliser cette attaque à nouveau tant que Farfetch reste en jeu (même mettre Farfetch'd sur le banc ne vous permettra pas de l'utiliser à nouveau).",
				de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts. In jedem Fall können Sie diesen Angriff nicht mehr so lange verwenden, wie es im Spiel bleibt (selbst wenn Sie auf die Bank legen, lässt Sie ihn nicht wieder verwenden).",
				es: "Voltea una moneda. Si Tails, este ataque no hace nada. De cualquier manera, no puedes usar este ataque nuevamente siempre que Farfetch'd permanezca en juego (incluso poner Farfetch'd en el banco no te permitirá volver a usarlo).",
				it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla. Ad ogni modo, non puoi usare di nuovo questo attacco fintanto che Farfetch rimane in gioco (anche mettendo in panchina non ti permetterà di usarlo di nuovo).",
				pt: "Vire uma moeda. Se caudas, esse ataque não faz nada. De qualquer forma, você não pode usar esse ataque novamente, o tempo que Farfetch'd permanecer em jogo (mesmo colocando o Farfetch'd no banco não permitirá que você o use novamente).",
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Pot Smash",
				ja: "ポットスマッシュ",
				fr: "Casserole",
				de: "Pot Smash",
				es: "Pot Smash",
				it: "Pot Smash",
				pt: "Smash de maconha",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};
