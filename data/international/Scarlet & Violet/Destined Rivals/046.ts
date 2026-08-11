import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [120],
	set: Set,

	name: {
		'en-us': "Misty's Staryu",
		'fr-fr': "Stari d'Ondine",
		'de-de': "Mistys Sterndu",
		'it-it': "Staryu di Misty",
		'es-es': "Staryu de Misty",
		'pt-br': "Staryu da Misty",
		'es-mx': "Staryu de Misty"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Bubble Beam",
			'fr-fr': "Bulles d'O",
			'de-de': "Blubbstrahl",
			'it-it': "Bollaraggio",
			'es-es': "Rayo Burbuja",
			'pt-br': "Jato de Bolhas",
			'es-mx': "Rayo Burbuja"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825920,
				tcgplayer: 630813
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825920,
				tcgplayer: 630813
			}
		},
	],
}

export default card
