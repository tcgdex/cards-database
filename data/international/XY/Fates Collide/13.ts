import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Delphox",
		'fr-fr': "Goupelin",
		'es-es': "Delphox",
		'it-it': "Delphox",
		'pt-br': "Delphox",
		'de-de': "Fennexis"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		655,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Braixen",
		'fr-fr': "Roussil",
		'es-es': "Braixen",
		'it-it': "Braixen",
		'pt-br': "Braixen",
		'de-de': "Rutena"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flickering Flames",
				'fr-fr': "Flammes Vacillantes",
				'es-es': "Llamas Titilantes",
				'it-it': "Guizzafiamme",
				'pt-br': "Chamas Tremeluzentes",
				'de-de': "Züngelnde Flammen"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psystorm",
				'fr-fr': "Tempête Psy",
				'es-es': "Psicotormenta",
				'it-it': "Psicotempesta",
				'pt-br': "Tempestade Psíquica",
				'de-de': "Psisturm"
			},
			effect: {
				'en-us': "This attack does 20 damage times the amount of Energy attached to all Pokémon in play.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous les Pokémon en jeu.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida a todos los Pokémon en juego.",
				'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata ai Pokémon in gioco.",
				'pt-br': "Esse ataque causa 20 de danos vezes a quantidade de Energia ligada a todos os Pokémon em jogo.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an allen Pokémon im Spiel angelegten Energien zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Using psychic power, it generates a fiery vortex of 5,400 degree Fahrenheit, incinerating foes swept into this whirl of flame.",
	},

	thirdParty: {
		cardmarket: 289839,
		tcgplayer: 117776
	}
}

export default card
