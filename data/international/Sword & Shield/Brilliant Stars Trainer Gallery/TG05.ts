import { Card } from "models/database/card"
import Set from "../Brilliant Stars Trainer Gallery"

const card: Card = {
	dexId: [644],
	set: Set,

	name: {
		'en-us': "Zekrom",
		'fr-fr': "Zekrom",
		'es-es': "Zekrom",
		'it-it': "Zekrom",
		'pt-br': "Zekrom",
		'de-de': "Zekrom"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Wild Shock",
			'fr-fr': "Éclair Sauvage",
			'es-es': "Voltio Salvaje",
			'it-it': "Shock Feroce",
			'pt-br': "Choque Selvagem",
			'de-de': "Wilder Schock"
		},

		effect: {
			'en-us': "This Pokémon also does 60 damage to itself. Your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Ce Pokémon s'inflige aussi 60 dégâts. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Este Pokémon también se hace 60 puntos de daño a sí mismo. El Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Questo Pokémon infligge anche 60 danni a se stesso. Il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Este Pokémon também causa 60 pontos de dano a si mesmo. O Pokémon Ativo do seu oponente agora está Paralisado.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "D",


	description: {
		'en-us': "When the interior part of its tail spins like a motor, Zekrom can generate many bolts of lightning to blast its surroundings.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608737,
				tcgplayer: 264205
			}
		},
	],
}

export default card
