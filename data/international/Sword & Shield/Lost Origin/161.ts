import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lost City",
		'fr-fr': "Ville Perdue",
		'es-es': "Ciudad Perdida",
		'it-it': "Città Perduta",
		'pt-br': "Cidade Perdida",
		'de-de': "Nirgendwo City"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Whenever a Pokémon (either yours or your opponent's) is Knocked Out, put that Pokémon in the Lost Zone instead of the discard pile. (Discard all attached cards.)",
		'fr-fr': "Si un Pokémon est mis K.O. (le vôtre ou celui de votre adversaire), placez ce Pokémon-là dans la Zone Perdue plutôt que dans la pile de défausse. (Défaussez toutes les cartes attachées.)",
		'es-es': "Cada vez que un Pokémon (tuyo o de tu rival) quede Fuera de Combate, pon ese Pokémon en la Zona Perdida en vez de en la pila de descartes. (Descarta todas las cartas unidas a él).",
		'it-it': "Ogni volta che un Pokémon, tuo o del tuo avversario, viene messo KO, metti quel Pokémon nell'area perduta invece che nella pila degli scarti. Scarta tutte le carte assegnate.",
		'pt-br': "Sempre que um Pokémon (seu ou do seu oponente) for Nocauteado, coloque aquele Pokémon na Zona Perdida ao invés da pilha de descarte (descarte todas as cartas ligadas a ele).",
		'de-de': "Lege jedes Mal, wenn ein Pokémon (entweder deins oder das deines Gegners) kampfunfähig wird, jenes Pokémon ins Nirgendwo anstatt auf den Ablagestapel. (Lege alle angelegten Karten auf den Ablagestapel.)"
	},

	trainerType: "Stadium",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674170,
				tcgplayer: 284093
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674170,
				tcgplayer: 284093
			}
		},
	],
}

export default card
