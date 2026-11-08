import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'pt-br': "Haunter",
		'de-de': "Alpollo"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sinister Fog",
				'fr-fr': "Brouillard Sinistre",
				'es-es': "Niebla Siniestra",
				'it-it': "Bruma Sinistra",
				'pt-br': "Névoa Sinistra",
				'de-de': "Nebel des Grauens"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned. Put 1 damage counter on each of your opponent’s Benched Pokémon.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez un marqueur de dégâts sur chacun des Pokémon de Banc de votre adversaire.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 1 contador de daño en cada uno de los Pokémon en Banca de tu rival.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Metti un segnalino danno su ciascuno dei Pokémon nella panchina del tuo avversario.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 1 contador de dano em cada um dos Pokémon no Banco do seu oponente.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege 1 Schadensmarke auf jedes Pokémon auf der Bank deines Gegners."
			},

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

	retreat: 1,

	description: {
		'en-us': "On moonless nights, Haunter searches for someone to curse, so it's best not to go out walking around.",
	},

	thirdParty: {
		cardmarket: 372357,
		tcgplayer: 189169
	}
}

export default card
