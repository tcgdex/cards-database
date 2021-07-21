import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Ultra Necrozma",
		fr: "Ultra-Necrozma",
		es: "Ultra-Necrozma",
		it: "UltraNecrozma",
		pt: "Ultra Necrozma",
		de: "Ultra-Necrozma"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
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
				en: "Shining Burst",
				fr: "Brillance Détonante",
				es: "Explosión Brillante",
				it: "Esplosione Splendente",
				pt: "Ruptura Cintilante",
				de: "Grelle Explosion"
			},
			effect: {
				en: "If the total of both players’ remaining Prize cards is 6 or less, discard all Energy from this Pokémon, and this attack does 100 more damage.",
				fr: "S’il reste 6 cartes Récompense ou moins aux deux joueurs réunis, défaussez toute l’Énergie de ce Pokémon et cette attaque inflige 100 dégâts supplémentaires.",
				es: "Si el total de cartas de Premio que les queden a ambos jugadores es de 6 o menos, descarta todas las Energías de este Pokémon, y este ataque hace 100 puntos de daño más.",
				it: "Se il totale delle carte Premio rimanenti a entrambi i giocatori è sei o meno, scarta tutte le Energie assegnate a questo Pokémon e questo attacco infligge 100 danni in più.",
				pt: "Se a soma total das cartas de Prêmio restantes de ambos os jogadores for 6 ou menos, este ataque causará 100 pontos de dano a mais e você deverá descartar todas as Energias deste Pokémon.",
				de: "Wenn die Summe der verbleibenden Preiskarten beider Spieler 6 oder weniger ist, lege alle Energien von diesem Pokémon auf deinen Ablagestapel und diese Attacke fügt 100 Schadenspunkte mehr zu."
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



}

export default card
