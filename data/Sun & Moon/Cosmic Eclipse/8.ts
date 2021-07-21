import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Sunflora",
		fr: "Héliatronc",
		es: "Sunflora",
		it: "Sunflora",
		pt: "Sunflora",
		de: "Sonnflora"
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
		en: "Sunkern",
		fr: "Tournegrin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Power",
				fr: "Force Soleil",
				es: "Poder Solar",
				it: "Solarpotere",
				pt: "Poder Solar",
				de: "Solarkraft"
			},
			effect: {
				en: "During your next turn, ignore all Energy in the attack costs of Grass Pokémon and Fire Pokémon. (This includes Pokémon that come into play on that turn.)",
				fr: "Pendant votre prochain tour, ignorez toutes les Énergies dans le coût d’attaque des Pokémon Grass et des Pokémon Fire. (Cela comprend les Pokémon qui sont mis en jeu pendant ce tour.)",
				es: "Durante tu próximo turno, ignora todas las Energías en los costes de los ataques de Pokémon Grass y Pokémon Fire. (Esto incluye Pokémon que entran en juego en ese turno).",
				it: "Durante il tuo prossimo turno, ignora tutte le Energie necessarie per usare gli attacchi dei Pokémon Grass e dei Pokémon Fire, inclusi i Pokémon entrati in gioco in quel turno.",
				pt: "Durante a sua próxima vez de jogar, ignore todas as Energias nos custos dos ataques dos Pokémon Grass e Pokémon Fire (isto inclui Pokémon que entrarem em jogo naquela rodada).",
				de: "Ignoriere während deines nächsten Zuges alle Energien in den Kosten der Attacken von Grass-Pokémon und Fire-Pokémon. (Dies schließt Pokémon, die während jenes Zuges ins Spiel gebracht werden, ein.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
				es: "Rayo Solar",
				it: "Solarraggio",
				pt: "Raio Solar",
				de: "Solarstrahl"
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



}

export default card
