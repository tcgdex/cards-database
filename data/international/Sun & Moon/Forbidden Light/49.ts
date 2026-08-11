import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Aegislash",
		'fr-fr': "Exagide",
		'es-es': "Aegislash",
		'it-it': "Aegislash",
		'pt-br': "Aegislash",
		'de-de': "Durengard"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		681,
	],

	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ticking Knock Out",
				'fr-fr': "K.O. Imminent",
				'es-es': "Fuera de Combate Inminente",
				'it-it': "KO a Orologeria",
				'pt-br': "Contagem Regressiva",
				'de-de': "Tickender K. o."
			},
			effect: {
				'en-us': "During your next turn, if the Defending Pokémon is damaged by an attack, it will be Knocked Out.",
				'fr-fr': "Pendant votre prochain tour, si le Pokémon Défenseur subit les dégâts d’une attaque, il sera mis K.O.",
				'es-es': "Durante tu próximo turno, si el Pokémon Defensor resulta dañado por un ataque, quedará Fuera de Combate.",
				'it-it': "Durante il tuo prossimo turno, il Pokémon difensore viene messo KO se viene danneggiato da un attacco.",
				'pt-br': "Durante a sua próxima vez de jogar, se o Pokémon Defensor for danificado por um ataque, ele será Nocauteado.",
				'de-de': "Wenn das Verteidigende Pokémon während deines nächsten Zuges durch eine Attacke Schaden erhält, wird es kampfunfähig."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Draining Blade",
				'fr-fr': "Lame Siphon",
				'es-es': "Cuchilla Drenaje",
				'it-it': "Assorbilama",
				'pt-br': "Lâmina Sugadora",
				'de-de': "Zehrende Klinge"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 90,

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

	retreat: 2,

	description: {
		'en-us': "Apparently, it can detect the innate qualities of leadership. According to legend, whoever it recognizes is destined to become king.",
	},

	thirdParty: {
		cardmarket: 355568,
		tcgplayer: 165700
	}
}

export default card
