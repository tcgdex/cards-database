import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
		'es-es': "Litwick",
		'it-it': "Litwick",
		'pt-br': "Litwick",
		'de-de': "Lichtel"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		607,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Haunt",
				'fr-fr': "Hanter",
				'es-es': "Espanto",
				'it-it': "Infestare",
				'pt-br': "Assombrar",
				'de-de': "Spuk"
			},
			effect: {
				'en-us': "Put 1 damage counter on your opponent’s Active Pokémon.",
				'fr-fr': "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
				'es-es': "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
				'it-it': "Metti un segnalino danno sul Pokémon attivo del tuo avversario.",
				'pt-br': "Coloque 1 contador de dano no Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
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
		'en-us': "Litwick shines a light that absorbs the life energy of people and Pokémon, which becomes the fuel that it burns.",
	},

	thirdParty: {
		cardmarket: 365738,
		tcgplayer: 178914
	}
}

export default card
