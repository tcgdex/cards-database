import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Séléroc",
		es: "Lunatone",
		it: "Lunatone",
		pt: "Lunatone",
		de: "Lunastein"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Future Sight",
				fr: "Prescience",
				es: "Premonición",
				it: "Divinazione",
				pt: "Visão do Futuro",
				de: "Seher"
			},
			effect: {
				en: "Look at the top 4 cards of either player’s deck and put them back in any order.",
				fr: "Regardez les 4 cartes du dessus du deck de l’un des joueurs, puis replacez-les dans l’ordre de votre choix.",
				es: "Mira las 4 primeras cartas de la baraja de cualquiera de los jugadores y vuelve a ponerlas en la parte superior de esa baraja en el orden que quieras.",
				it: "Guarda le prime quattro carte del mazzo di uno dei giocatori e rimettile a posto nell’ordine che preferisci.",
				pt: "Olhe as 4 cartas de cima do baralho de qualquer um dos jogadores e coloque-as de volta em qualquer ordem.",
				de: "Schau dir die obersten 4 Karten des Decks eines der beiden Spieler an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				es: "Psíquico",
				it: "Psichico",
				pt: "Psíquico",
				de: "Psychokinese"
			},
			effect: {
				en: "This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
