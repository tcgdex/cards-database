import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [367],
	set: Set,

	name: {
		'en-us': "Huntail",
		'fr-fr': "Serpang",
		'es-es': "Huntail",
		'it-it': "Huntail",
		'pt-br': "Huntail",
		'de-de': "Aalabyss"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl",
		'es-es': "Clamperl",
		'it-it': "Clamperl",
		'pt-br': "Clamperl",
		'de-de': "Perlu"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "otumami",

	description: {
		'en-us': "Deep seas are their habitat. According to tradition, when Huntail wash up onshore, something unfortunate will happen."
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Single Strike Jammer",
			'fr-fr': "Bloqueur de Poing Final",
			'es-es': "Inhibidor de Golpe Brusco",
			'it-it': "Blocco Colpo Singolo",
			'de-de': "Fokussierter-Angriff-Störer",
			'pt-br': "Bloqueador Golpe Decisivo"
		},

		effect: {
			'en-us': "Your opponent's Single Strike Pokémon's attacks cost {C} more.",
			'fr-fr': "Les attaques des Pokémon Poing Final de votre adversaire coûtent {C} de plus.",
			'es-es': "Los ataques de los Pokémon Golpe Brusco de tu rival cuestan {C} más.",
			'it-it': "Il costo degli attacchi dei Pokémon Colpo Singolo del tuo avversario aumenta di {C}.",
			'de-de': "Die Kosten der Attacken der Fokussierter-Angriff-Pokémon deines Gegners erhöhen sich um {C}.",
			'pt-br': "Os ataques dos Pokémon Golpe Decisivo do seu oponente custam {C} a mais."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Cavernous Chomp",
			'fr-fr': "Mâchoire Caverneuse",
			'es-es': "Mordisco Cavernoso",
			'it-it': "Mandibola Cavernosa",
			'de-de': "Riesiger Biss",
			'pt-br': "Mastigada Cavernosa"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582200,
				tcgplayer: 253209
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582200,
				tcgplayer: 253209
			}
		},
	],
}

export default card
