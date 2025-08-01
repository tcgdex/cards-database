import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Baltoy",
		fr: "Balbuto",
		es: "Baltoy",
		it: "Baltoy",
		pt: "Baltoy",
		de: "Puppance"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		343,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Future Spin",
				fr: "Tour du Futur",
				es: "Giro Futuro",
				it: "Volgifuturo",
				pt: "Giro do Futuro",
				de: "Zukunftswende"
			},
			effect: {
				en: "Look at the top 3 cards of either player's deck and put them back on top of that player's deck in any order.",
				fr: "Regardez les 3 cartes du dessus du deck de l'un des joueurs et replacez-les sur le dessus du deck de ce joueur dans l'ordre de votre choix.",
				es: "Mira las 3 primeras cartas de la baraja de cualquiera de los jugadores y vuelve a ponerlas en la parte superior de la baraja de ese jugador en el orden que quieras.",
				it: "Guarda le prime tre carte del mazzo di uno dei giocatori e rimettile in cima al suo mazzo nell'ordine che preferisci.",
				pt: "Veja os 3 cards de cima do baralho de qualquer jogador e coloque-os de volta em cima do baralho daquele jogador em qualquer ordem.",
				de: "Schau dir die obersten 3 Karten des Decks eines der beiden Spieler an und lege sie in beliebiger Reihenfolge zurück auf dessen Deck."
			},

		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	abilities: [{
		type: "Ability",

		name: {
			en: "{title}:",
			fr: "{title}:",
			es: "{title}:",
			it: "{title}:",
			pt: "{title}:",
			de: "{title}:"
		},

		effect: {
			en: "{title}: Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
			fr: "{title}: Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
			es: "{title}: Evita todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
			it: "{title}: Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			pt: "{title}: Impede todos os efeitos das Habilidades causadas neste Pokémon pelo Pokémon do seu oponente.",
			de: "{title}: Verhindere alle Effekte von Fähigkeiten gegnerischer Pokémon, die diesem Pokémon zugefügt werden."
		}
	}],

	thirdParty: {
		cardmarket: 284212
	}
}

export default card
