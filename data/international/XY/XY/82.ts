import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		625,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'de-de': "Gladiantri"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Metal Sound",
				'fr-fr': "Strido-Son",
				'es-es': "Eco Metálico",
				'it-it': "Ferrostrido",
				'pt-br': "Som de Metal",
				'de-de': "Metallsound"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Wallop",
				'fr-fr': "Torgnole Métallique",
				'es-es': "Golpazo Metálico",
				'it-it': "Battiferro",
				'pt-br': "Batida Metálica",
				'de-de': "Metalldresche"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Metal Wallop attack does 40 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l'attaque Torgnole Métallique de ce Pokémon inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Golpazo Metálico de este Pokémon hace 40 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l'attacco Battiferro di questo Pokémon infligge 40 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante sua próxima vez de jogar, o ataque Batida Metálica deste Pokémon causará 40 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Metalldresche dieses Pokémon 40 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This pitiless Pokémon commands a group of Pawniard to hound prey into immobility. It then moves in to finish the prey off.",
	},

	thirdParty: {
		cardmarket: 281419,
		tcgplayer: 83846
	}
}

export default card
