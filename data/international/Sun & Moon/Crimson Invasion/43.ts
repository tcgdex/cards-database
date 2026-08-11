import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Chimecho",
		'fr-fr': "Éoko",
		'es-es': "Chimecho",
		'it-it': "Chimecho",
		'pt-br': "Chimecho",
		'de-de': "Palimpalim"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		358,
	],

	hp: 70,

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
				'en-us': "Bell of Silence",
				'fr-fr': "Cloche du Silence",
				'es-es': "Campana de Silencio",
				'it-it': "Campana del Silenzio",
				'pt-br': "Sino do Silêncio",
				'de-de': "Glocke des Schweigens"
			},
			effect: {
				'en-us': "Your opponent can’t play any Pokémon that has an Ability from their hand during their next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de Pokémon ayant un talent de sa main pendant son prochain tour.",
				'es-es': "Tu rival no puede jugar ningún Pokémon que tenga una habilidad de su mano durante su próximo turno.",
				'it-it': "Il tuo avversario non può giocare nessun Pokémon che abbia un’abilità dalle carte che ha in mano durante il suo prossimo turno.",
				'pt-br': "Seu oponente não poderá jogar nenhum Pokémon que tiver uma Habilidade da própria mão durante a próxima vez dele(a) jogar.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges kein Pokémon, das eine Fähigkeit hat, aus seiner Hand spielen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It uses the sucker on its head to hang from a tree or from eaves. It can produce seven different tones.",
	},

	thirdParty: {
		cardmarket: 311893,
		tcgplayer: 149066
	}
}

export default card
