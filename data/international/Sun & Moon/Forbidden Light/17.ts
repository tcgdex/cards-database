import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Delphox",
		'fr-fr': "Goupelin",
		'es-es': "Delphox",
		'it-it': "Delphox",
		'pt-br': "Delphox",
		'de-de': "Fennexis"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		655,
	],

	hp: 150,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Braixen",
		'fr-fr': "Roussil",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Mystical Torch",
				'fr-fr': "Torche Mystique",
				'es-es': "Antorcha Embrujada",
				'it-it': "Magitorcia",
				'pt-br': "Tocha Mística",
				'de-de': "Mystische Fackel"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may leave your opponent’s Active Pokémon Burned.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes dejar al Pokémon Activo de tu rival Quemado.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi lasciare il Pokémon attivo del tuo avversario bruciato.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode deixar o Pokémon Ativo do seu oponente Queimado.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du das Aktive Pokémon deines Gegners verbrennen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Spin",
				'fr-fr': "Danse Flamme",
				'es-es': "Giro Fuego",
				'it-it': "Turbofuoco",
				'pt-br': "Chama Furacão",
				'de-de': "Feuerwirbel"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Descarta 2 Energías de este Pokémon.",
				'it-it': "Scarta due Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias deste Pokémon.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 150,

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
		cardmarket: 355537,
		tcgplayer: 165664
	}
}

export default card
