import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "M. Glaquette de Galar",
		en: "Galarian Mr. Rime",
		es: "Mr. Rime de Galar",
		it: "Mr. Rime di Galar",
		pt: "Mr. Rime de Galar",
		de: "Galar-Pantifrost"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		fr: "M. Mime de Galar",
		en: "Galarian Mr. Mime"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Danse Entraînante",
			en: "Shuffle Dance",
			es: "Danza Cambio",
			it: "Mischiadanza",
			pt: "Balança Esqueleto",
			de: "Shuffle-Tanz"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez échanger l'une des cartes Récompense de votre adversaire (actuellement face cachée) contre la carte du dessus de son deck. (Les cartes restent face cachée.)",
			en: "Once during your turn, you may switch 1 of your opponent's face-down Prize cards with the top card of their deck. (The cards stay face down.)",
			es: "Una vez durante tu turno, puedes cambiar 1 de las cartas de Premio que están boca abajo de tu rival por la primera carta de su baraja. (Las cartas permanecen boca abajo).",
			it: "Una sola volta durante il tuo turno, puoi scambiare una delle carte Premio coperte del tuo avversario con la prima carta del suo mazzo. Le carte restano coperte.",
			pt: "Uma vez durante o seu turno, você poderá trocar 1 das cartas de Prêmio viradas para baixo do seu oponente pela carta de cima do baralho dele(a) (as cartas continuam viradas para baixo).",
			de: "Einmal während deines Zuges kannst du 1 verdeckte Preiskarte deines Gegners gegen die oberste Karte seines Decks austauschen. (Die Karten bleiben verdeckt.)"
		}
	}],

	attacks: [{
		name: {
			fr: "Folle Aventure",
			en: "Mad Party",
			es: "Merienda de Locos",
			it: "Festa di Matti",
			pt: "Festa Maluca",
			de: "Verrückte Party"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l'attaque Folle Aventure.",
			en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
			es: "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Merienda de Locos.",
			it: "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Festa di Matti.",
			pt: "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque Festa Maluca.",
			de: "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Verrückte Party hat, 20 Schadenspunkte zu."
		},

		damage: "20×",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "It's highly skilled at tap-dancing. It waves its cane of ice in time with its graceful movements."
	}
}

export default card
