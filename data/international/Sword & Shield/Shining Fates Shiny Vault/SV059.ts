import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [876],
	set: Set,

	name: {
		'fr-fr': "Wimessir",
		'en-us': "Indeedee",
		'es-es': "Indeedee",
		'it-it': "Indeedee",
		'pt-br': "Indeedee",
		'de-de': "Servol"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	attacks: [{
		name: {
			'fr-fr': "Gain de Temps",
			'en-us': "Replenish Time",
			'es-es': "Hora de Reponerse",
			'it-it': "Ristoratempo",
			'pt-br': "Hora de Reabastecer",
			'de-de': "Verschnaufpause"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de chacun de vos Pokémon.",
			'en-us': "Heal 30 damage from each of your Pokémon.",
			'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon.",
			'it-it': "Cura ciascuno dei tuoi Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de cada um dos seus Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Rafale Psy",
			'en-us': "Psybeam",
			'es-es': "Psicorrayo",
			'it-it': "Psicoraggio",
			'pt-br': "Feixe Psíquico",
			'de-de': "Psystrahl"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "These intelligent Pokémon touch horns with each other to share information between them."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539683,
				tcgplayer: 232425
			}
		},
	],
}

export default card
