import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "M Lucario EX",
		'fr-fr': "M-Lucario EX",
		'es-es': "M-Lucario EX",
		'it-it': "M Lucario EX",
		'pt-br': "M-Lucario EX",
		'de-de': "M Lucario EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 220,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Lucario-EX",
		'fr-fr': "Lucario-EX",
		'es-es': "Lucario-EX",
		'it-it': "Lucario-EX",
		'pt-br': "Lucario-EX",
		'de-de': "Lucario-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Rising Fist",
				'fr-fr': "Poing Imminent",
				'es-es': "Puño Ascendente",
				'it-it': "Sollevapugno",
				'pt-br': "Punho Ascendente",
				'de-de': "Vorschnellende Faust"
			},
			effect: {
				'en-us': "Discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 92232
	}
}

export default card
