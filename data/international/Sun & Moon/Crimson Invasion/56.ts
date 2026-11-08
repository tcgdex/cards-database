import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Bewear",
		'fr-fr': "Chelours",
		'es-es': "Bewear",
		'it-it': "Bewear",
		'pt-br': "Bewear",
		'de-de': "Kosturso"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		760,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fluffy",
				'fr-fr': "Boule de Poils",
				'es-es': "Peluche",
				'it-it': "Morbidone",
				'pt-br': "Macio",
				'de-de': "Flauschigkeit"
			},
			effect: {
				'en-us': "This Pokémon takes 30 less damage from the attacks of your opponent’s non-Fire Pokémon (after applying Weakness and Resistance).",
				'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques des Pokémon non Fire de votre adversaire (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques de los Pokémon no Fire de tu rival hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi dei Pokémon non di tipo Fire del tuo avversario, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques dos Pokémon do seu oponente que não são Pokémon Fire (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Diesem Pokémon werden durch Attacken der Pokémon deines Gegners, die keine Fire-Pokémon sind, 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cross-Cut",
				'fr-fr': "Coupe Transversale",
				'es-es': "Atajar",
				'it-it': "Fendente Incrociato",
				'pt-br': "Corte em Cruz",
				'de-de': "Überkreuzzerschneider"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "This immensely dangerous Pokémon possesses overwhelming physical strength. Its habitat is generally off-limits.",
	},

	thirdParty: {
		cardmarket: 311906,
		tcgplayer: 149079
	}
}

export default card
