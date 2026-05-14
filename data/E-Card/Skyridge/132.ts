import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Mirage Stadium",
		de: "Fata Morgana-Stadion"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Whenever a player tries to retreat a Pokémon during his or her turn, that player flips a coin. If heads, that player retreats that Pokémon (and discards Energy normally). If tails, that Pokémon can't retreat this turn (the player doesn't discard any Energy).",
		de: "Immer wenn ein Spieler versucht, in seinem Zug ein Pokémon zurückzuziehen, wirft dieser Spieler eine Münze. Bei \"Kopf\" zieht der Spieler das Pokémon zurück (und legt die Energiekarte ganz normal auf den Ablagestapel). Bei \"Zahl\" kann sich dieses Pokémon in diesem nicht zurückziehen (der Spieler legt keine Energiekarte auf den Ablagestapel)."
	},

	thirdParty: {
		cardmarket: 275390,
		tcgplayer: 87500
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
