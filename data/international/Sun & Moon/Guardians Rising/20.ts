import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Alolan Sandslash",
		'fr-fr': "Sablaireau d’Alola",
		'es-es': "Sandslash de Alola",
		'it-it': "Sandslash di Alola",
		'pt-br': "Sandslash de Alola",
		'de-de': "Alola-Sandamer"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Alolan Sandshrew",
		'fr-fr': "Sabelette d’Alola",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Slush Rush",
				'fr-fr': "Chasse-Neige",
				'es-es': "Quitanieves",
				'it-it': "Spalaneve",
				'pt-br': "Limpa-neve",
				'de-de': "Schneescharrer"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may draw a card.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes robar 1 carta.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare una carta.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode comprar 1 carta.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Karte ziehen."
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
				'en-us': "Smash Turn",
				'fr-fr': "Tour Fracassant",
				'es-es': "Golpe Giro",
				'it-it': "Girata Distruttiva",
				'pt-br': "Virada Esmagadora",
				'de-de': "Abdrehender Schmetterer"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Fleeing a volcanic eruption, it settled on a snowy mountain. As it races through the snowfields, it sends up a spray of snow.",
	},

	thirdParty: {
		cardmarket: 297484,
		tcgplayer: 130918
	}
}

export default card
