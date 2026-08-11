import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [468],
	set: Set,

	name: {
		'en-us': "Togekiss",
		'fr-fr': "Togekiss",
		'es-es': "Togekiss",
		'it-it': "Togekiss",
		'pt-br': "Togekiss",
		'de-de': "Togekiss"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Togetic",
		'fr-fr': "Togetic",
		'es-es': "Togetic",
		'it-it': "Togetic",
		'pt-br': "Togetic",
		'de-de': "Togetic"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Wonder Kiss",
			'fr-fr': "Bisou Merveilleux",
			'es-es': "Beso Asombroso",
			'it-it': "Bacio Meraviglia",
			'pt-br': "Kiss Surpresa",
			'de-de': "Wunderkuss"
		},

		effect: {
			'en-us': "When your opponent's Active Pokémon is Knocked Out, flip a coin. If heads, take 1 more Prize card. The effect of Wonder Kiss doesn't stack.",
			'fr-fr': "Lorsque le Pokémon Actif de votre adversaire est mis K.O., lancez une pièce. Si c'est face, récupérez une carte Récompense supplémentaire. L'effet de Bisou Merveilleux n'est pas cumulable.",
			'es-es': "Cuando el Pokémon Activo de tu rival queda Fuera de Combate, lanza 1 moneda. Si sale cara, coge 1 carta de Premio más. El efecto de Beso Asombroso no se acumula.",
			'it-it': "Quando il Pokémon attivo del tuo avversario viene messo KO, lancia una moneta. Se esce testa, prendi una carta Premio in più. L'effetto di Bacio Meraviglia non è cumulabile.",
			'pt-br': "Quando o Pokémon Ativo do seu oponente for Nocauteado, jogue uma moeda. Se sair cara, pegue 1 carta de Prêmio a mais. O efeito de Kiss Surpresa não acumula.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners kampfunfähig wird, wirf 1 Münze. Nimm bei Kopf 1 Preiskarte mehr. Der Effekt von Wunderkuss stapelt sich nicht."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Speed Wing",
			'fr-fr': "Ailes Vives",
			'es-es': "Ala Veloz",
			'it-it': "Alaveloce",
			'pt-br': "Asa da Velocidade",
			'de-de': "Turboschwinge"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 833336,
				tcgplayer: 590078
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 833336,
				tcgplayer: 590078
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 794362,
			}
		},
	],

	illustrator: "Narano",
	
}

export default card
