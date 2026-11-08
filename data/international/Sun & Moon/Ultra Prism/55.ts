import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Drapion",
		'fr-fr': "Drascore",
		'es-es': "Drapion",
		'it-it': "Drapion",
		'pt-br': "Drapion",
		'de-de': "Piondragi"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		452,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Skorupi",
		'fr-fr': "Rapion",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Dangerous Stinger",
				'fr-fr': "Dard Redoutable",
				'es-es': "Aguijón Peligroso",
				'it-it': "Pungiglione Letale",
				'pt-br': "Ferrão Pernicioso",
				'de-de': "Stachel der Gefahr"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Paralyzed and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado e Paralisado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has the power in its clawed arms to make scrap of a car. The tips of its claws release poison.",
	},

	thirdParty: {
		cardmarket: 315985,
		tcgplayer: 157672
	}
}

export default card
