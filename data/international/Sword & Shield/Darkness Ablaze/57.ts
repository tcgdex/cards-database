import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [181],

	name: {
		'en-us': "Ampharos",
		'fr-fr': "Pharamp",
		'es-es': "Ampharos",
		'it-it': "Ampharos",
		'pt-br': "Ampharos",
		'de-de': "Ampharos"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'es-es': "Flaaffy",
		'it-it': "Flaaffy",
		'pt-br': "Flaaffy",
		'de-de': "Waaty"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Dazzle Blast",
				'fr-fr': "Explosion de Lumière",
				'es-es': "Destello Deslumbrante",
				'it-it': "Accecobomba",
				'pt-br': "Explosão Fascinante",
				'de-de': "Blendende Explosion"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Electric Ball",
				'fr-fr': "Boule de Foudre",
				'es-es': "Bola Eléctrica",
				'it-it': "Lamposfera",
				'pt-br': "Bola de Eletricidade",
				'de-de': "Stromball"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "Its tail shines bright and strong. It has been prized since long ago as a beacon for sailors."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483159,
				tcgplayer: 219403
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483159,
				tcgplayer: 219403
			}
		},
	],
}

export default card
