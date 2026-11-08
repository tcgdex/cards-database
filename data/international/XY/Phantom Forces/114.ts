import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Gengar EX",
		'fr-fr': "Ectoplasma EX",
		'es-es': "Gengar EX",
		'it-it': "Gengar EX",
		'pt-br': "Gengar EX",
		'de-de': "Gengar EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 170,

	types: [
		"Psychic",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Night Attack",
				'fr-fr': "Attaque Nocturne",
				'es-es': "Asalto Nocturno",
				'it-it': "Attacco Notturno",
				'pt-br': "Ataque Noturno",
				'de-de': "Nachtangriff"
			},
			effect: {
				'en-us': "Put 3 damage counters on 1 of your opponent's Pokémon.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
				'es-es': "Pon 3 contadores de daño en 1 de los Pokémon de tu rival.",
				'it-it': "Metti tre segnalini danno su uno dei Pokémon del tuo avversario.",
				'pt-br': "Coloque 3 contadores de danos em 1 dos Pokémon do seu oponente.",
				'de-de': "Lege 3 Schadensmarken auf 1 Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Corridor",
				'fr-fr': "Couloir Ténébreux",
				'es-es': "Corredor Oscuro",
				'it-it': "Corridoio Oscuro",
				'pt-br': "Corredor Escuro",
				'de-de': "Dunkler Gang"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned. Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281840,
		tcgplayer: 94683
	}
}

export default card
