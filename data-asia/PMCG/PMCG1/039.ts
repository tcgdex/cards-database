import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Magneton",
		ja: "マグネトン",
		fr: "Magnéton",
		de: "Magneton",
		es: "Magnetón",
		it: "Magneton",
		pt: "Magneton",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [82],
	hp: 60,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Colorless"],
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
			damage: 30,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
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
				en: "Does 20 damage to each Pokemon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokemon.) Magneton does 80 damage to itself.",
				ja: "各プレイヤーのベンチで各ポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）マグネトンはそれ自体に80のダメージを与えます。",
				fr: "Fait 20 dégâts à chaque pokemon sur le banc de chaque joueur. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Magneton se fait 80 dégâts.",
				de: "Schädigt jedes Pokémon 20 auf der Bank jedes Spielers. (Wenden Sie keine Schwäche und Widerstand für ein Bankpokémon an.) Magneton schädigt sich 80.",
				es: "Hace 20 daños a cada Pokémon en el banco de cada jugador. (No aplique debilidad y resistencia para Pokémon de banca). Magneton hace 80 daños a sí mismo.",
				it: "Fa 20 danni a ciascun Pokemon sulla panchina di ogni giocatore. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Magneton fa 80 danni a se stesso.",
				pt: "Causam 20 danos a cada Pokémon no banco de cada jogador. (Não aplique fraqueza e resistência ao Pokemon em bancada.) Magneton causa 80 danos a si mesmo.",
			},
			damage: 80,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};
