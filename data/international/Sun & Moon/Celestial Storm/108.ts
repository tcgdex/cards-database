import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Latios ◇",
		'fr-fr': "Latios ◇",
		'es-es': "Latios ◇",
		'it-it': "Latios ◇",
		'pt-br': "Latios ◇",
		'de-de': "Latios ◇"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Fleet",
				'fr-fr': "Flotte des Dragons",
				'es-es': "Escuadra Dragón",
				'it-it': "Dragoflotta",
				'pt-br': "Frota de Dragões",
				'de-de': "Drachenflotte"
			},
			effect: {
				'en-us': "This attack does 50 damage for each of your Evolution Dragon Pokémon in play.",
				'fr-fr': "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon Dragon évolués en jeu.",
				'es-es': "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon Dragon Evolución en juego.",
				'it-it': "Questo attacco infligge 50 danni per ogni tuo Pokémon Evoluzione Dragon in gioco.",
				'pt-br': "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon Dragon de Evolução em jogo.",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl deiner Dragon-Entwicklungs-Pokémon im Spiel zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It understands human speech and is highly intelligent. It is a tender Pokémon that dislikes fighting.",
	},

	thirdParty: {
		cardmarket: 360922
	}
}

export default card
