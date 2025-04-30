import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Iono's Electrode",
		fr: "Électrode de Mashynn",
		es: "Electrode de e-Nigma",
		de: "Enigmaras Lektrobal",
		it: "Electrode di Kissara",
		pt: "Electrode da Kissera",
		'es-mx': "Electrode de e-Nigma"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Thump-Thump Boom",
			fr: "Boum Boum Boum",
			es: "Estallido Pum Pum",
			de: "Tick-Tick-Bumm",
			it: "Tum Tum Bum",
			pt: "Tum Tum Bum",
			'es-mx': "Corazonada Explosiva"
		},

		effect: {
			en: "This Pokémon does 100 damage to itself. Flip a coin. If heads, your opponent's Active Pokémon is Knocked Out.",
			fr: "Ce Pokémon s'inflige 100 dégâts. Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est mis K.O.",
			es: "Este Pokémon se hace 100 puntos de daño a sí mismo. Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival queda Fuera de Combate.",
			de: "Dieses Pokémon fügt sich selbst 100 Schadenspunkte zu. Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners kampfunfähig.",
			it: "Questo Pokémon infligge 100 danni a se stesso. Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene messo KO.",
			pt: "Este Pokémon causa 100 pontos de dano a si mesmo. Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Nocauteado.",
			'es-mx': "Este Pokémon se hace 100 puntos de daño a sí mismo. Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival queda Fuera de Combate."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
			es: "Bola Eléctrica",
			de: "Stromball",
			it: "Lamposfera",
			pt: "Bola de Eletricidade",
			'es-mx': "Bola Eléctrica"
		},

		damage: 100
	}],

	retreat: 0,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
