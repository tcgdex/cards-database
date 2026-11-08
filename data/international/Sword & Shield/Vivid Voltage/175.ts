import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Drapion V",
		'fr-fr': "Drascore V",
		'es-es': "Drapion V",
		'it-it': "Drapion V",
		'pt-br': "Drapion V",
		'de-de': "Piondragi V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [452],
	set: Set,
	hp: 210,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wrack Down",
				'fr-fr': "Réduire en Poussière",
				'es-es': "Desmoronar",
				'it-it': "Abbattere",
				'pt-br': "Desmoronar",
				'de-de': "Niederschleudern"
			},

			damage: 70,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hazardous Claws",
				'fr-fr': "Griffes Nocives",
				'es-es': "Zarpas Nocivas",
				'it-it': "Artigli Insidiosi",
				'pt-br': "Garras Perigosas",
				'de-de': "Bedrohliche Krallen"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed and Poisoned.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
				'es-es': "Descarta 2 Energías de este Pokémon. El Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
				'it-it': "Scarta due Energie da questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
				'pt-br': "Descarte 2 Energias deste Pokémon. O Pokémon Ativo do seu oponente agora está Envenenado e Paralisado.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 512585,
				tcgplayer: 226559
			}
		},
	],
}

export default card
