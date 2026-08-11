import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'es-es': "Medicham",
		'it-it': "Medicham",
		'pt-br': "Medicham",
		'de-de': "Meditalis"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		308,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'pt-br': "Meditite",
		'de-de': "Meditie"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Pure Power",
				'fr-fr': "Force Pure",
				'es-es': "Energía Pura",
				'it-it': "Forzapura",
				'pt-br': "Poder Puro",
				'de-de': "Mentalkraft"
			},
			effect: {
				'en-us': "Put 4 damage counters on your opponent's Pokémon in any way you like.",
				'fr-fr': "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				'es-es': "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Distribuisci a piacimento quattro segnalini danno sui Pokémon del tuo avversario.",
				'pt-br': "Coloque 4 contadores de danos nos Pokémon do seu oponente do jeito que desejar.",
				'de-de': "Verteile 4 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Windmill Kick",
				'fr-fr': "Coup d'Pied Éolien",
				'es-es': "Patada Molino",
				'it-it': "Rovesciata",
				'pt-br': "Chute Moinho de Vento",
				'de-de': "Windmühlenkick"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Through yoga training, it gained the psychic power to predict its foe's next move.",
	},

	thirdParty: {
		cardmarket: 273611,
		tcgplayer: 95978
	}
}

export default card
