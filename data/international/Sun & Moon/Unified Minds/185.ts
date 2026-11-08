import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Komala",
		'fr-fr': "Dodoala",
		'es-es': "Komala",
		'it-it': "Komala",
		'pt-br': "Komala",
		'de-de': "Koalelu"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		775,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Drowsing",
				'fr-fr': "Rêveur",
				'es-es': "Duermevela",
				'it-it': "Dormiveglia",
				'pt-br': "Cochilando",
				'de-de': "Halbschlaf"
			},
			effect: {
				'en-us': "If this Pokémon remains Asleep between turns, put 6 damage counters on your opponent’s Active Pokémon.",
				'fr-fr': "Si ce Pokémon reste Endormi entre deux tours, placez 6 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				'es-es': "Si este Pokémon permanece Dormido entre turnos, pon 6 contadores de daño en el Pokémon Activo de tu rival.",
				'it-it': "Se questo Pokémon resta addormentato tra un turno e l’altro, metti sei segnalini danno sul Pokémon attivo del tuo avversario.",
				'pt-br': "Se este Pokémon permanecer Adormecido entre as vezes de jogar, coloque 6 contadores de dano no Pokémon Ativo do seu oponente.",
				'de-de': "Wenn dieses Pokémon zwischen den Zügen weiterschläft, lege 6 Schadensmarken auf das Aktive Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Snooze",
				'fr-fr': "Roupillon",
				'es-es': "Cabezada",
				'it-it': "Sonnellino",
				'pt-br': "Cochilo",
				'de-de': "Schlummern"
			},
			effect: {
				'en-us': "This Pokémon is now Asleep.",
				'fr-fr': "Ce Pokémon est maintenant Endormi.",
				'es-es': "Este Pokémon pasa a estar Dormido.",
				'it-it': "Questo Pokémon viene addormentato.",
				'pt-br': "Este Pokémon agora está Adormecido.",
				'de-de': "Dieses Pokémon schläft jetzt."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It stays asleep from the moment it's born. When it falls into a deep sleep, it stops moving altogether.",
	},

	thirdParty: {
		cardmarket: 388712,
		tcgplayer: 195215
	}
}

export default card
