import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Alolan Rattata",
		'fr-fr': "Rattata d’Alola",
		'es-es': "Rattata de Alola",
		'it-it': "Rattata di Alola",
		'pt-br': "Rattata de Alola",
		'de-de': "Alola-Rattfratz"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 40,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Focus Energy",
				'fr-fr': "Puissance",
				'es-es': "Foco Energía",
				'it-it': "Focalenergia",
				'pt-br': "Focalizar Energia",
				'de-de': "Energiefokus"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon’s Bite attack’s base damage is 60.",
				'fr-fr': "Pendant votre prochain tour, les dégâts de base de l’attaque Morsure de ce Pokémon sont de 60.",
				'es-es': "Durante tu próximo turno, el daño básico del ataque Mordisco de este Pokémon es de 60.",
				'it-it': "Durante il tuo prossimo turno, i danni base dell’attacco Morso di questo Pokémon sono 60.",
				'pt-br': "Durante a sua próxima vez de jogar, o dano base do ataque Mordida deste Pokémon será 60.",
				'de-de': "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Biss dieses Pokémon 60 Schadenspunkte."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 10,

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
		'en-us': "With its incisors, it gnaws through doors and infiltrates people's homes. Then, with a twitch of its whiskers, it steals whatever food it finds.",
	},

	thirdParty: {
		cardmarket: 299483,
		tcgplayer: 138569
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
