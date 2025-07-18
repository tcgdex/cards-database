import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Gastly",
		ja: "ガストリー",
		fr: "Vigoureux",
		de: "Gastly",
		es: "Duende",
		it: "Gastly",
		pt: "Gastly",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [92],
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				en: "Sleeping Gas",
				ja: "睡眠ガス",
				fr: "Gaz endormi",
				de: "Schlafgas",
				es: "Gas para dormir",
				it: "Gas addormentato",
				pt: "Gás de dormir",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokemon is now Asleep.",
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
				fr: "Retourner une pièce. Si la tête, le Pokémon en défense est maintenant endormi.",
				de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt.",
				es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido.",
				it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora addormentato.",
				pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está dormindo.",
			},

		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				en: "Destiny Bond",
				ja: "Destiny Bond",
				fr: "Bond de destin",
				de: "Schicksalbindung",
				es: "Destiny Bond",
				it: "Destiny Bond",
				pt: "Vínculo de destino",
			},
			effect: {
				en: "Discard 1 Psychic Energy card attached to Gastly in order to use this attack. If a Pokemon Knocks Out Gastly during your opponent's next turn, Knock Out that Pokemon.",
				ja: "この攻撃を使用するために、ガストリーに取り付けられた1つのサイキックエネルギーカードを捨てます。相手の次のターン中にポケモンが激しくノックアウトした場合、そのポケモンをノックアウトします。",
				fr: "Jetez 1 carte d'énergie psychique attachée à Gastly afin d'utiliser cette attaque. Si un Pokémon élimine Gastly pendant le prochain tour de votre adversaire, assommez ce Pokémon.",
				de: "Verwerfen Sie 1 psychische Energiekarte, die an Gastly verbunden ist, um diesen Angriff zu verwenden. Wenn ein Pokemon während der nächsten Runde Ihres Gegners Gastly ausschlägt, schlag das Pokemon aus.",
				es: "Descarte 1 Tarjeta de energía psíquica unida a Gastly para usar este ataque. Si un Pokémon noquea a Gastly durante el próximo turno de tu oponente, elimine a ese Pokémon.",
				it: "Scartare 1 carta di energia psichica collegata a gastly per usare questo attacco. Se un Pokemon elimina Gastly durante il prossimo turno del tuo avversario, elimina quel Pokemon.",
				pt: "Descarte 1 cartão de energia psíquica ligada a Gastly para usar esse ataque. Se um Pokémon derruba Gastly durante o próximo turno do seu oponente, nocauteia aquele Pokémon.",
			},

		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};
