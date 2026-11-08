import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [748],

	name: {
		'en-us': "Toxapex",
		'fr-fr': "Prédastérie",
		'es-es': "Toxapex",
		'it-it': "Toxapex",
		'pt-br': "Toxapex",
		'de-de': "Aggrostella"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Mareanie",
		'fr-fr': "Vorastérie",
		'es-es': "Mareanie",
		'it-it': "Mareanie",
		'pt-br': "Mareanie",
		'de-de': "Garstella"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Recover",
				'fr-fr': "Soin",
				'es-es': "Recuperación",
				'it-it': "Ripresa",
				'pt-br': "Recuperação",
				'de-de': "Genesung"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon and heal all damage from it.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon, puis soignez tous les dégâts de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon y cura todos sus puntos de daño.",
				'it-it': "Scarta un'Energia da questo Pokémon e curalo da tutti i danni.",
				'pt-br': "Descarte 1 Energia deste Pokémon e cure todo o dano dele.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel und heile bei ihm allen Schaden."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poisonous Whip",
				'fr-fr': "Fouet Empoisonné",
				'es-es': "Látigo Venenoso",
				'it-it': "Frustata Velenosa",
				'pt-br': "Chicote Venenoso",
				'de-de': "Giftpeitsche"
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
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "To survive in the cold waters of Galar, this Pokémon forms a dome with its legs, enclosing its body so it can capture its own body heat."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483134,
				tcgplayer: 219379
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483134,
				tcgplayer: 219379
			}
		},
	],
}

export default card
