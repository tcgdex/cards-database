import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Power Plant",
		'fr-fr': "Centrale d’Énergie",
		'es-es': "Central Energía",
		'it-it': "Centrale Elettrica",
		'pt-br': "Usina Elétrica",
		'de-de': "Kraftwerk"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Les Pokémon-GX et Pokémon-EX en jeu (les vôtres et ceux de votre adversaire) n’ont pas de talent.",
		'en-us': "Pokémon-GX and Pokémon-EX in play (both yours and your opponent’s) have no Abilities.",
		'es-es': "Los Pokémon-GX y Pokémon-EX en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
		'it-it': "Le abilità dei Pokémon-GX e dei Pokémon-EX in gioco, sia tuoi che del tuo avversario, non hanno effetto.",
		'pt-br': "Os Pokémon-GX e Pokémon-EX em jogo (seus e do seu oponente) não têm Habilidades.",
		'de-de': "Pokémon-GX und Pokémon-EX im Spiel (deine und die deines Gegners) haben keine Fähigkeiten."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 410674,
		tcgplayer: 201361
	}
}

export default card
