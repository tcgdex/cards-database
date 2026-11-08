import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [326],
	set: Set,

	name: {
		'en-us': "Grumpig",
		'fr-fr': "Groret",
		'es-es': "Grumpig",
		'it-it': "Grumpig",
		'pt-br': "Grumpig",
		'de-de': "Groink"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
		'es-es': "Spoink",
		'it-it': "Spoink",
		'pt-br': "Spoink",
		'de-de': "Spoink"
	},

	attacks: [{
		name: {
			'en-us': "Dazzle Dance",
			'fr-fr': "Danse Éblouissante",
			'es-es': "Danza Deslumbrante",
			'it-it': "Accecadanza",
			'pt-br': "Dança Fascinante",
			'de-de': "Verwirrender Tanz"
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
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'en-us': "Power Gem",
			'fr-fr': "Rayon Gemme",
			'es-es': "Joya de Luz",
			'it-it': "Gemmoforza",
			'pt-br': "Gema Poderosa",
			'de-de': "Juwelenkraft"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "It uses black pearls to amplify its psychic power. It does an odd dance to gain control over foes."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545391,
				tcgplayer: 234222
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545391,
				tcgplayer: 234222
			}
		},
	],
}

export default card
