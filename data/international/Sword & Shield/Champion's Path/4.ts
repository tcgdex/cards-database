import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [15],

	name: {
		'en-us': "Beedrill",
		'fr-fr': "Dardargnan",
		'es-es': "Beedrill",
		'it-it': "Beedrill",
		'pt-br': "Beedrill",
		'de-de': "Bibor"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort"
	},

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Jab",
				'fr-fr': "Direct Toxik",
				'es-es': "Puya Nociva",
				'it-it': "Velenpuntura",
				'pt-br': "Golpe Envenenado",
				'de-de': "Gifthieb"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		'en-us': "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear."
	},

	thirdParty: {
		cardmarket: 499875,
		tcgplayer: 222998
	}
}

export default card
