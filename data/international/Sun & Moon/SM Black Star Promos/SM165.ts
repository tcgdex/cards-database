import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Ultra Necrozma",
		'fr-fr': "Ultra-Necrozma",
		'es-es': "Ultra-Necrozma",
		'it-it': "UltraNecrozma",
		'pt-br': "Ultra Necrozma",
		'de-de': "Ultra-Necrozma"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		800,
	],
	hp: 130,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Shining Burst",
				'fr-fr': "Brillance Détonante",
				'es-es': "Explosión Brillante",
				'it-it': "Esplosione Splendente",
				'pt-br': "Ruptura Cintilante",
				'de-de': "Grelle Explosion"
			},
			effect: {
				'en-us': "If the total of both players’ remaining Prize cards is 6 or less, discard all Energy from this Pokémon, and this attack does 100 more damage.",
				'fr-fr': "S’il reste 6 cartes Récompense ou moins aux deux joueurs réunis, défaussez toute l’Énergie de ce Pokémon et cette attaque inflige 100 dégâts supplémentaires.",
				'es-es': "Si el total de cartas de Premio que les queden a ambos jugadores es de 6 o menos, descarta todas las Energías de este Pokémon, y este ataque hace 100 puntos de daño más.",
				'it-it': "Se il totale delle carte Premio rimanenti a entrambi i giocatori è sei o meno, scarta tutte le Energie assegnate a questo Pokémon e questo attacco infligge 100 danni in più.",
				'pt-br': "Se a soma total das cartas de Prêmio restantes de ambos os jogadores for 6 ou menos, este ataque causará 100 pontos de dano a mais e você deverá descartar todas as Energias deste Pokémon.",
				'de-de': "Wenn die Summe der verbleibenden Preiskarten beider Spieler 6 oder weniger ist, lege alle Energien von diesem Pokémon auf deinen Ablagestapel und diese Attacke fügt 100 Schadenspunkte mehr zu."
			},
			damage: "100+",

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,




	description: {
		'en-us': "This is its form when it has absorbed overwhelming light energy. It fires laser beams from all over its body.",
	},
}

export default card
