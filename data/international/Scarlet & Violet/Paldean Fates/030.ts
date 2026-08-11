import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [358],
	set: Set,

	name: {
		'en-us': "Chimecho",
		'fr-fr': "Éoko",
		'es-es': "Chimecho",
		'it-it': "Chimecho",
		'pt-br': "Chimecho",
		'de-de': "Palimpalim"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Sleep Inducer",
			'fr-fr': "Poussododo",
			'es-es': "Inductor de Sueño",
			'it-it': "Induci-Sonno",
			'pt-br': "Indutor de Sono",
			'de-de': "Schlafeinflößer"
		},

		effect: {
			'en-us': "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. The new Active Pokémon is now Asleep.",
			'fr-fr': "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Le nouveau Pokémon Actif est maintenant Endormi.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. El nuevo Pokémon Activo pasa a estar Dormido.",
			'it-it': "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Il nuovo Pokémon attivo viene addormentato.",
			'pt-br': "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. O novo Pokémon Ativo agora está Adormecido.",
			'de-de': "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Das neue Aktive Pokémon schläft jetzt."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'es-es': "Disparo Psi",
			'it-it': "Psicosparo",
			'pt-br': "Tiro Psíquico",
			'de-de': "Psychoschuss"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751563,
				tcgplayer: 534176,
				cardtrader: 274214
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751563,
				tcgplayer: 534176,
				cardtrader: 274214
			}
		},
	],

	illustrator: "sui",

	description: {
		'en-us': "Emitting ultrasonic cries, it floats on winds to travel great distances.",
	},

}

export default card
