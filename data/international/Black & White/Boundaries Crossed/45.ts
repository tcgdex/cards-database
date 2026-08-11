import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Jellicent",
		'fr-fr': "Moyade",
		'es-es': "Jellicent",
		'it-it': "Jellicent",
		'pt-br': "Jellicent",
		'de-de': "Apoquallyp"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		593,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Frillish",
		'fr-fr': "Viskuse",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Stickiness",
				'fr-fr': "Viscosité",
				'es-es': "Pegajosidad",
				'it-it': "Colla",
				'pt-br': "Colante",
				'de-de': "Superkleber"
			},
			effect: {
				'en-us': "The Retreat Cost of each of your opponent’s Pokémon in play is Colorless more.",
				'fr-fr': "Le coût de Retraite de chacun des Pokémon de votre adversaire est augmenté de Colorless.",
				'es-es': "El Coste de Retirada de cada uno de los Pokémon en juego de tu rival es de Colorless más.",
				'it-it': "Il costo di ritirata di ciascun Pokémon in gioco del tuo avversario aumenta di Colorless.",
				'pt-br': "O Custo para Recuar de cada um dos Pokémon do seu oponente em jogo será de Colorless a mais.",
				'de-de': "Die Rückzugskosten aller Pokémon deines Gegners im Spiel erhöhen sich um Colorless."
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
				'en-us': "Eerie Light",
				'fr-fr': "Lumière Étrange",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its body is mostly seawater. It's said there's a castle of ships Jellicent have sunk on the seafloor.",
	},

	thirdParty: {
		cardmarket: 280632,
		tcgplayer: 86307
	}
}

export default card
