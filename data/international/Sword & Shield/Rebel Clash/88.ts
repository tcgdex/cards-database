import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Indeedee",
		'fr-fr': "Wimessir",
		'es-es': "Indeedee",
		'it-it': "Indeedee",
		'pt-br': "Indeedee",
		'de-de': "Servol"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [876],
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Replenish Time",
				'fr-fr': "Gain de Temps",
				'es-es': "Hora de Reponerse",
				'it-it': "Ristoratempo",
				'pt-br': "Hora de Reabastecer",
				'de-de': "Verschnaufpause"
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Pokémon.",
				'fr-fr': "Soignez 30 dégâts de chacun de vos Pokémon.",
				'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Cura ciascuno dei tuoi Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano de cada um dos seus Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale Psy",
				'es-es': "Psicorrayo",
				'it-it': "Psicoraggio",
				'pt-br': "Feixe Psíquico",
				'de-de': "Psystrahl"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

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
			value: "-30"
		},
	],

	retreat: 1,
	hp: 100,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "These intelligent Pokémon touch horns with each other to share information between them."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457858,
				tcgplayer: 213174
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457858,
				tcgplayer: 213174
			}
		},
	],
}

export default card
