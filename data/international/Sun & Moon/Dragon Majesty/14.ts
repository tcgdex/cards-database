import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre",
		'es-es': "Salazzle",
		'it-it': "Salazzle",
		'pt-br': "Salazzle",
		'de-de': "Amfira"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		758,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Ring of Fire",
				'fr-fr': "Anneau de Feu",
				'es-es': "Anillo de Fuego",
				'it-it': "Anello di Fuoco",
				'pt-br': "Anel de Fogo",
				'de-de': "Feuerring"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned. It can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé. Il ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado. No puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado. Ele não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt. Es kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-Flammes",
				'es-es': "Lanzallamas",
				'it-it': "Lanciafiamme",
				'pt-br': "Lança-chamas",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Filled with pheromones, its poisonous gas can be diluted to use in the production of luscious perfumes.",
	},

	thirdParty: {
		cardmarket: 363486,
		tcgplayer: 175366
	}
}

export default card
