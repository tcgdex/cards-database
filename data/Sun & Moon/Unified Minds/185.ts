import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Komala",
		fr: "Dodoala",
		es: "Komala",
		it: "Komala",
		pt: "Komala",
		de: "Koalelu"
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
				en: "Drowsing",
				fr: "Rêveur",
				es: "Duermevela",
				it: "Dormiveglia",
				pt: "Cochilando",
				de: "Halbschlaf"
			},
			effect: {
				en: "If this Pokémon remains Asleep between turns, put 6 damage counters on your opponent’s Active Pokémon.",
				fr: "Si ce Pokémon reste Endormi entre deux tours, placez 6 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				es: "Si este Pokémon permanece Dormido entre turnos, pon 6 contadores de daño en el Pokémon Activo de tu rival.",
				it: "Se questo Pokémon resta addormentato tra un turno e l’altro, metti sei segnalini danno sul Pokémon attivo del tuo avversario.",
				pt: "Se este Pokémon permanecer Adormecido entre as vezes de jogar, coloque 6 contadores de dano no Pokémon Ativo do seu oponente.",
				de: "Wenn dieses Pokémon zwischen den Zügen weiterschläft, lege 6 Schadensmarken auf das Aktive Pokémon deines Gegners."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Snooze",
				fr: "Roupillon",
				es: "Cabezada",
				it: "Sonnellino",
				pt: "Cochilo",
				de: "Schlummern"
			},
			effect: {
				en: "This Pokémon is now Asleep.",
				fr: "Ce Pokémon est maintenant Endormi.",
				es: "Este Pokémon pasa a estar Dormido.",
				it: "Questo Pokémon viene addormentato.",
				pt: "Este Pokémon agora está Adormecido.",
				de: "Dieses Pokémon schläft jetzt."
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



}

export default card
