import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Lost City",
		fr: "Ville Perdue",
		es: "Ciudad Perdida",
		it: "Città Perduta",
		pt: "Cidade Perdida",
		de: "Nirgendwo City"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Whenever a Pokémon (either yours or your opponent's) is Knocked Out, put that Pokémon in the Lost Zone instead of the discard pile. (Discard all attached cards.)",
		fr: "Si un Pokémon est mis K.O. (le vôtre ou celui de votre adversaire), placez ce Pokémon-là dans la Zone Perdue plutôt que dans la pile de défausse. (Défaussez toutes les cartes attachées.)",
		es: "Cada vez que un Pokémon (tuyo o de tu rival) quede Fuera de Combate, pon ese Pokémon en la Zona Perdida en vez de en la pila de descartes. (Descarta todas las cartas unidas a él).",
		it: "Ogni volta che un Pokémon, tuo o del tuo avversario, viene messo KO, metti quel Pokémon nell'area perduta invece che nella pila degli scarti. Scarta tutte le carte assegnate.",
		pt: "Sempre que um Pokémon (seu ou do seu oponente) for Nocauteado, coloque aquele Pokémon na Zona Perdida ao invés da pilha de descarte (descarte todas as cartas ligadas a ele).",
		de: "Lege jedes Mal, wenn ein Pokémon (entweder deins oder das deines Gegners) kampfunfähig wird, jenes Pokémon ins Nirgendwo anstatt auf den Ablagestapel. (Lege alle angelegten Karten auf den Ablagestapel.)"
	},

	trainerType: "Stadium",
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card