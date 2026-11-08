import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Sunflora",
		'fr-fr': "Héliatronc",
		'es-es': "Sunflora",
		'it-it': "Sunflora",
		'pt-br': "Sunflora",
		'de-de': "Sonnflora"
	},

	illustrator: "Yumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		192,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Solar Power",
				'fr-fr': "Force Soleil",
				'es-es': "Poder Solar",
				'it-it': "Solarpotere",
				'pt-br': "Poder Solar",
				'de-de': "Solarkraft"
			},
			effect: {
				'en-us': "During your next turn, ignore all Energy in the attack costs of Grass Pokémon and Fire Pokémon. (This includes Pokémon that come into play on that turn.)",
				'fr-fr': "Pendant votre prochain tour, ignorez toutes les Énergies dans le coût d’attaque des Pokémon Grass et des Pokémon Fire. (Cela comprend les Pokémon qui sont mis en jeu pendant ce tour.)",
				'es-es': "Durante tu próximo turno, ignora todas las Energías en los costes de los ataques de Pokémon Grass y Pokémon Fire. (Esto incluye Pokémon que entran en juego en ese turno).",
				'it-it': "Durante il tuo prossimo turno, ignora tutte le Energie necessarie per usare gli attacchi dei Pokémon Grass e dei Pokémon Fire, inclusi i Pokémon entrati in gioco in quel turno.",
				'pt-br': "Durante a sua próxima vez de jogar, ignore todas as Energias nos custos dos ataques dos Pokémon Grass e Pokémon Fire (isto inclui Pokémon que entrarem em jogo naquela rodada).",
				'de-de': "Ignoriere während deines nächsten Zuges alle Energien in den Kosten der Attacken von Grass-Pokémon und Fire-Pokémon. (Dies schließt Pokémon, die während jenes Zuges ins Spiel gebracht werden, ein.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Solar Beam",
				'fr-fr': "Lance-Soleil",
				'es-es': "Rayo Solar",
				'it-it': "Solarraggio",
				'pt-br': "Raio Solar",
				'de-de': "Solarstrahl"
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

	description: {
		'en-us': "As the hot season approaches, the petals on this Pokémon's face become more vivid and lively.",
	},

	thirdParty: {
		cardmarket: 407694,
		tcgplayer: 201155
	}
}

export default card
