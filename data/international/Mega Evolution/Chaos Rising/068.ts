import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "This very friendly dragon Pokémon will hug its beloved Trainer, leaving that Trainer covered in sticky slime.",
	},


	name: {
		'en-us': "Goodra",
		'fr-fr': "Muplodocus",
		'es-es': "Goodra",
		'es-mx': "Goodra",
		'de-de': "Viscogon",
		'it-it': "Goodra",
		'pt-br': "Goodra"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [706],
	hp: 160,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Sliggoo"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Slimy Sliding",
			'fr-fr': "Glissade Gluante",
			'es-es': "Deslizamiento Viscoso",
			'es-mx': "Deslizamiento Viscoso",
			'de-de': "Schleimiges Schlittern",
			'it-it': "Scivolata Vischiosa",
			'pt-br': "Deslizamento Gosmento"
		},

		effect: {
			'en-us': "When your opponent's Active Pokémon retreats, your opponent flips a coin. If tails, Energy for its Retreat Cost is not discarded, and they don't switch Pokémon. The effect of Slimy Sliding doesn't stack.",
			'fr-fr': "Lorsque le Pokémon Actif de votre adversaire bat en retraite, votre adversaire lance une pièce. Si c'est pile, les Énergies pour son Coût de Retraite ne sont pas défaussées, et le Pokémon n'est pas échangé. L'effet de Glissade Gluante n'est pas cumulable.",
			'es-es': "Cuando el Pokémon Activo de tu rival se retira, tu rival lanza 1 moneda. Si sale cruz, no se descartan Energías por su Coste de Retirada, y tu rival no cambia su Pokémon. El efecto de Deslizamiento Viscoso no se acumula.",
			'es-mx': "Cuando el Pokémon Activo de tu rival se retira, tu rival lanza 1 moneda. Si sale cruz, las Energías de su Costo de Retirada no se descartan, y tu rival no cambia su Pokémon. El efecto de Deslizamiento Viscoso no se acumula.",
			'de-de': "Wenn sich das Aktive Pokémon deines Gegners zurückzieht, wirft dein Gegner 1 Münze. Bei Zahl wird keine Energie für dessen Rückzugskosten auf den Ablagestapel deines Gegners gelegt, und er tauscht keine Pokémon aus. Der Effekt von Schleimiges Schlittern stapelt sich nicht.",
			'it-it': "Quando il Pokémon attivo del tuo avversario si ritira, il tuo avversario lancia una moneta. Se esce croce, l'Energia per il suo costo di ritirata non viene scartata e il Pokémon non viene scambiato. L'effetto di Scivolata Vischiosa non è cumulabile.",
			'pt-br': "Quando o Pokémon Ativo do seu oponente recuar, seu oponente jogará uma moeda. Se sair coroa, a Energia usada para o Custo de Recuo não será descartada e ele não trocará o Pokémon. O efeito de Deslizamento Gosmento não acumula."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Dragon Pulse",
			'fr-fr': "Draco-Choc",
			'es-es': "Pulso Dragón",
			'es-mx': "Pulso Dragón",
			'de-de': "Drachenpuls",
			'it-it': "Dragopulsar",
			'pt-br': "Pulso do Dragão"
		},

		cost: ["Water", "Psychic"],
		damage: 160,

		effect: {
			'en-us': "Discard the top card of your deck.",
			'fr-fr': "Défaussez la carte du dessus de votre deck.",
			'es-es': "Descarta la primera carta de tu baraja.",
			'es-mx': "Descarta la primera carta de tu mazo.",
			'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel.",
			'it-it': "Scarta la prima carta del tuo mazzo.",
			'pt-br': "Descarte a carta de cima do seu baralho."
		}
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888530,
				tcgplayer: 694638
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886460,
				tcgplayer: 693495
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886460,
				tcgplayer: 693495
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886460,
				tcgplayer: 693495
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886460,
				tcgplayer: 693495
			}
		},
	],
}

export default card
