import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Skorupi",
		'fr-fr': "Rapion",
		'es-es': "Skorupi",
		'it-it': "Skorupi",
		'pt-br': "Skorupi",
		'de-de': "Pionskora"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		451,
	],

	hp: 80,

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
				'en-us': "Hone Claws",
				'fr-fr': "Aiguisage",
				'es-es': "Afilagarras",
				'it-it': "Unghiaguzze",
				'pt-br': "Garras Afiadas",
				'de-de': "Klauenwetzer"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon’s Pierce attack’s base damage is 90.",
				'fr-fr': "Pendant votre prochain tour, les dégâts de base de l’attaque Transpercement de ce Pokémon sont de 90.",
				'es-es': "Durante tu próximo turno, el daño básico del ataque Perforar de este Pokémon es de 90.",
				'it-it': "Durante il tuo prossimo turno, i danni base dell’attacco Perforare di questo Pokémon sono 90.",
				'pt-br': "Durante a sua próxima vez de jogar, o dano base do ataque Perfurar deste Pokémon será 90.",
				'de-de': "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Durchbohren dieses Pokémon 90 Schadenspunkte."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Pierce",
				'fr-fr': "Transpercement",
				'es-es': "Perforar",
				'it-it': "Perforare",
				'pt-br': "Perfurar",
				'de-de': "Durchbohren"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It burrows under the sand to lie in wait for prey. Its tail claws can inject its prey with a savage poison.",
	},

	thirdParty: {
		cardmarket: 315984,
		tcgplayer: 157671
	}
}

export default card
