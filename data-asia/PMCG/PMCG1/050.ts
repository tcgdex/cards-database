import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Mewtwo",
		ja: "mewtwo",
		fr: "Miwtwo",
		de: "Mewtwo",
		es: "Mewtwo",
		it: "Mewtwo",
		pt: "Mewtwo",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [150],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				en: "Psychic",
				ja: "サイキック",
				fr: "Psychique",
				de: "Psychisch",
				es: "Psíquico",
				it: "Psichico",
				pt: "Psíquico",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokemon.",
				ja: "ディフェンディングポケモンに取り付けられた各エネルギーカードに対して、10のダメージと10ダメージがさらに10ダメージを与えます。",
				fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque carte d'énergie attachée au Pokémon en défense.",
				de: "Fügt 10 Schäden plus 10 weitere Schäden für jede an das verteidigende Pokémon angeschlossene Energiekarte.",
				es: "Hace 10 daños más 10 daños más por cada tarjeta de energía unida al Pokémon defensor.",
				it: "Fa 10 danni più 10 danni in più per ogni carta di energia collegata al Pokemon in difesa.",
				pt: "10 danos mais 10 mais danos para cada cartão de energia ligado ao Pokémon atual.",
			},

		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				en: "Barrier",
				ja: "バリア",
				fr: "Barrière",
				de: "Barriere",
				es: "Barrera",
				it: "Barriera",
				pt: "Barreira",
			},
			effect: {
				en: "Discard 1 Psychic Energy card attached to Mewtwo in order to use this attack. During your opponent's next turn, prevent all effects of attacks, including damage, done to Mewtwo.",
				ja: "この攻撃を使用するために、Mewtwoに取り付けられた1つのサイキックエネルギーカードを捨てます。対戦相手の次のターン中に、Mewtwoに行われた損害を含む攻撃のすべての影響を防ぎます。",
				fr: "Jetez 1 carte d'énergie psychique attachée à Mewtwo afin d'utiliser cette attaque. Au cours du prochain tour de votre adversaire, empêchez tous les effets des attaques, y compris les dégâts, faits à Mewtwo.",
				de: "Verwerfen Sie 1 psychische Energiekarte, die an Mewtwo angeschlossen ist, um diesen Angriff zu verwenden. Verhindern Sie während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden, die an Mewtwo angerichtet wurden.",
				es: "Descarte 1 Tarjeta de energía psíquica adjunta a Mewtwo para usar este ataque. Durante el próximo turno de tu oponente, evita que todos los ataques de los ataques, incluido el daño, se hagan a Mewtwo.",
				it: "Scartare 1 carta di energia psichica collegata a mewtwo per usare questo attacco. Durante il prossimo turno del tuo avversario, prevenire tutti gli effetti degli attacchi, inclusi i danni, fatti a Mewtwo.",
				pt: "Descarte 1 cartão de energia psíquica anexada a mewtwo para usar esse ataque. Durante o próximo turno do seu oponente, evite todos os efeitos dos ataques, incluindo danos, causados a Mewtwo.",
			},

		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};
