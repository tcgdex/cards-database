import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Torracat",
		'fr-fr': "Matoufeu",
		'es-es': "Torracat",
		'it-it': "Torracat",
		'pt-br': "Torracat",
		'de-de': "Miezunder"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		726,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Litten",
		'fr-fr': "Flamiaou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Swagger",
				'fr-fr': "Vantardise",
				'es-es': "Contoneo",
				'it-it': "Bullo",
				'pt-br': "Arrogância",
				'de-de': "Angeberei"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sala cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Claws",
				'fr-fr': "Griffes Enflammées",
				'es-es': "Garras de Fuego",
				'it-it': "Artigli Infuocati",
				'pt-br': "Garras de Fogo",
				'de-de': "Feuerkrallen"
			},

			damage: 30,

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
		'en-us': "At its throat, it bears a bell of fire. The bell rings brightly whenever this Pokémon spits fire.",
	},

	thirdParty: {
		cardmarket: 302154,
		tcgplayer: 146669
	}
}

export default card
