import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [101],
	set: Set,

	name: {
		'en-us': "Iono's Electrode",
		'fr-fr': "Électrode de Mashynn",
		'es-es': "Electrode de e-Nigma",
		'de-de': "Enigmaras Lektrobal",
		'it-it': "Electrode di Kissara",
		'pt-br': "Electrode da Kissera",
		'es-mx': "Electrode de e-Nigma"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Iono's Voltorb",
		'fr-fr': "Voltorbe de Mashynn",
		'es-es': "Voltorb de e-Nigma",
		'de-de': "Enigmaras Voltobal",
		'it-it': "Voltorb di Kissara",
		'pt-br': "Voltorb da Kissera",
		'es-mx': "Voltorb de e-Nigma"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Thump-Thump Boom",
			'fr-fr': "Boum Boum Boum",
			'es-es': "Estallido Pum Pum",
			'de-de': "Tick-Tick-Bumm",
			'it-it': "Tum Tum Bum",
			'pt-br': "Tum Tum Bum",
			'es-mx': "Corazonada Explosiva"
		},

		effect: {
			'en-us': "This Pokémon does 100 damage to itself. Flip a coin. If heads, your opponent's Active Pokémon is Knocked Out.",
			'fr-fr': "Ce Pokémon s'inflige 100 dégâts. Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est mis K.O.",
			'es-es': "Este Pokémon se hace 100 puntos de daño a sí mismo. Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival queda Fuera de Combate.",
			'de-de': "Dieses Pokémon fügt sich selbst 100 Schadenspunkte zu. Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners kampfunfähig.",
			'it-it': "Questo Pokémon infligge 100 danni a se stesso. Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene messo KO.",
			'pt-br': "Este Pokémon causa 100 pontos de dano a si mesmo. Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Nocauteado.",
			'es-mx': "Este Pokémon se hace 100 puntos de daño a sí mismo. Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival queda Fuera de Combate."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Electric Ball",
			'fr-fr': "Boule de Foudre",
			'es-es': "Bola Eléctrica",
			'de-de': "Stromball",
			'it-it': "Lamposfera",
			'pt-br': "Bola de Eletricidade",
			'es-mx': "Bola Eléctrica"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "I",
	illustrator: "GOTO minori",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817200,
				tcgplayer: 623475
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817200,
				tcgplayer: 623475
			}
		},
	],
}

export default card
