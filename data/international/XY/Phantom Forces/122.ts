import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Dialga EX",
		'fr-fr': "Dialga EX",
		'es-es': "Dialga EX",
		'it-it': "Dialga EX",
		'pt-br': "Dialga EX",
		'de-de': "Dialga EX"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 180,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chrono Wind",
				'fr-fr': "Vent Temporel",
				'es-es': "Retroceso Cronológico",
				'it-it': "Cronolancetta",
				'pt-br': "Vento Temporal",
				'de-de': "Zeitsturm"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Pokémon-EX, it can't attack during your opponent's next turn.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-EX, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				'es-es': "Si el Pokémon Defensor es un Pokémon-EX, no puede atacar durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon-EX.",
				'pt-br': "Se o Pokémon Defensor for um Pokémon-EX, ele não poderá atacar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wenn das Verteidigende Pokémon ein Pokémon-EX ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Full Metal Impact",
				'fr-fr': "Full Metal Impact",
				'es-es': "Impacto Metálico Total",
				'it-it': "Metallimpatto",
				'pt-br': "Impacto Metálico Máximo",
				'de-de': "Metalleinschlag"
			},
			effect: {
				'en-us': "Discard 2 Metal Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies Metal attachées à ce Pokémon.",
				'es-es': "Descarta 2 Energías Metal unidas a este Pokémon.",
				'it-it': "Scarta due Energie Metal assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias Metal ligadas a este Pokémon.",
				'de-de': "Lege 2 an dieses Pokémon angelegte Metal-Energien auf deinen Ablagestapel."
			},
			damage: 150,

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

	suffix: "EX",
	retreat: 2,

	thirdParty: {
		cardmarket: 281868,
		tcgplayer: 94689
	}
}

export default card
