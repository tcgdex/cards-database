import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
		'de-de': "Sniebel"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
				'en-us': "During your next turn, this Pokémon’s Slash attack’s base damage is 80.",
				'fr-fr': "Pendant votre prochain tour, les dégâts de base de l’attaque Tranche de ce Pokémon sont de 80.",
				'es-es': "Durante tu próximo turno, el daño básico del ataque Cuchillada de este Pokémon es de 80.",
				'it-it': "Durante il tuo prossimo turno, i danni base dell’attacco Lacerazione di questo Pokémon sono 80.",
				'pt-br': "Durante a sua próxima vez de jogar, o dano base do ataque Talho deste Pokémon será 80.",
				'de-de': "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Schlitzer dieses Pokémon 80 Schadenspunkte."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has a cunning yet savage disposition. It waits for parents to leave their nests, and then it sneaks in to steal their eggs.",
	},

	thirdParty: {
		cardmarket: 299487,
		tcgplayer: 138575
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
