import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Primarina",
		'fr-fr': "Oratoria",
		'es-es': "Primarina",
		'it-it': "Primarina",
		'pt-br': "Primarina",
		'de-de': "Primarene"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		730,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Brionne",
		'fr-fr': "Otarlette",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Harmonics",
				'fr-fr': "Harmoniques",
				'es-es': "Armonía",
				'it-it': "Scala Armonica",
				'pt-br': "Harmônica",
				'de-de': "Harmonik"
			},
			effect: {
				'en-us': "Whenever you attach an Energy card from your hand to 1 of your Pokémon, except with an attack, Ability, or Trainer card, attach up to 2 Energy cards to that Pokémon instead of 1.",
				'fr-fr': "Chaque fois que vous attachez une carte Énergie de votre main à l’un de vos Pokémon, excepté en raison d’une attaque, d’un talent ou d’une carte Dresseur, attachez jusqu’à 2 cartes Énergie à ce Pokémon-là au lieu d’une.",
				'es-es': "Cada vez que unas 1 carta de Energía de tu mano a 1 de tus Pokémon, excepto con un ataque, habilidad o carta de Entrenador, une hasta 2 cartas de Energía a ese Pokémon en vez de 1.",
				'it-it': "Ogni volta che assegni a uno dei tuoi Pokémon una carta Energia dalla tua mano, a meno che non sia in conseguenza di un attacco, un’abilità o una carta Allenatore, assegna fino a due carte Energia a quel Pokémon invece di una.",
				'pt-br': "Sempre que ligar 1 carta de Energia da sua mão a 1 dos seus Pokémon, exceto se ligá-la por um ataque, Habilidade ou carta de Treinador, ligue até 2 cartas de Energia àquele Pokémon ao invés de 1.",
				'de-de': "Jedes Mal, wenn du 1 Energiekarte aus deiner Hand an 1 deiner Pokémon anlegst, außer mit einer Attacke, Fähigkeit oder Trainerkarte, lege bis zu 2 Energiekarten anstelle von 1 Energiekarte an jenes Pokémon an."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypno Splash",
				'fr-fr': "Hypnoplouf",
				'es-es': "Salpicadura Hipnótica",
				'it-it': "Ipnospruzzo",
				'pt-br': "Explosão Hipnótica",
				'de-de': "Hypnospritzer"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its singing voice is its chief weapon in battle. This Pokémon's Trainer must prioritize the daily maintenance of its throat at all costs.",
	},

	thirdParty: {
		cardmarket: 365705,
		tcgplayer: 178876
	}
}

export default card
