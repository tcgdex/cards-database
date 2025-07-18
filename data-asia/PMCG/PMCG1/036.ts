import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Magnemite",
		ja: "マグナイト",
		fr: "Magnémite",
		de: "Magnemit",
		es: "Magnemita",
		it: "Magnemite",
		pt: "Magnemita",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				en: "Thunder Wave",
				ja: "サンダーウェーブ",
				fr: "Vague de tonnerre",
				de: "Donnerwelle",
				es: "Trueno",
				it: "Onda del tuono",
				pt: "Thunder Wave",
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
				en: "Selfdestruct",
				ja: "セルフデストラクト",
				fr: "Auto-destruction",
				de: "Selbstdestrukturierung",
				es: "Auto -inestructo",
				it: "Autodestrutto",
				pt: "Autodestruir",
			},
			effect: {
				en: "Does 10 damage to each Pokemon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokemon.) Magnemite does 40 damage to itself.",
				ja: "各プレイヤーのベンチで各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）マグネミテはそれ自体に40のダメージを与えます。",
				fr: "Fait 10 dégâts à chaque pokemon sur le banc de chaque joueur. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) La magnémite se fait 40 dégâts.",
				de: "Schädigt jedes Pokémon auf der Bank jedes Spielers. (Wenden Sie keine Schwäche und Widerstand für ein Bankpokémon an.) Magnemite schädigt sich 40.",
				es: "Hace 10 daños a cada Pokémon en el banco de cada jugador. (No aplique debilidad y resistencia para Pokémon de banca). Magnemite hace 40 daños a sí mismo.",
				it: "Fa 10 danni a ogni Pokemon sulla panchina di ogni giocatore. (Non applicare debolezza e resistenza per i Pokemon in panchina.) Magnemite fa 40 danni a se stesso.",
				pt: "10 danos a cada Pokémon no banco de cada jogador. (Não aplique fraqueza e resistência ao Pokemon em bancada.) Magnemite causa 40 danos a si mesmo.",
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
