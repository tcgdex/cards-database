import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [866],
	set: Set,

	name: {
		'fr-fr': "M. Glaquette de Galar",
		'en-us': "Galarian Mr. Rime",
		'es-es': "Mr. Rime de Galar",
		'it-it': "Mr. Rime di Galar",
		'pt-br': "Mr. Rime de Galar",
		'de-de': "Galar-Pantifrost"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "M. Mime de Galar",
		'en-us': "Galarian Mr. Mime"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Danse Entraînante",
			'en-us': "Shuffle Dance",
			'es-es': "Danza Cambio",
			'it-it': "Mischiadanza",
			'pt-br': "Balança Esqueleto",
			'de-de': "Shuffle-Tanz"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez échanger l'une des cartes Récompense de votre adversaire (actuellement face cachée) contre la carte du dessus de son deck. (Les cartes restent face cachée.)",
			'en-us': "Once during your turn, you may switch 1 of your opponent's face-down Prize cards with the top card of their deck. (The cards stay face down.)",
			'es-es': "Una vez durante tu turno, puedes cambiar 1 de las cartas de Premio que están boca abajo de tu rival por la primera carta de su baraja. (Las cartas permanecen boca abajo).",
			'it-it': "Una sola volta durante il tuo turno, puoi scambiare una delle carte Premio coperte del tuo avversario con la prima carta del suo mazzo. Le carte restano coperte.",
			'pt-br': "Uma vez durante o seu turno, você poderá trocar 1 das cartas de Prêmio viradas para baixo do seu oponente pela carta de cima do baralho dele(a) (as cartas continuam viradas para baixo).",
			'de-de': "Einmal während deines Zuges kannst du 1 verdeckte Preiskarte deines Gegners gegen die oberste Karte seines Decks austauschen. (Die Karten bleiben verdeckt.)"
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Folle Aventure",
			'en-us': "Mad Party",
			'es-es': "Merienda de Locos",
			'it-it': "Festa di Matti",
			'pt-br': "Festa Maluca",
			'de-de': "Verrückte Party"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l'attaque Folle Aventure.",
			'en-us': "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
			'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Merienda de Locos.",
			'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Festa di Matti.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque Festa Maluca.",
			'de-de': "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Verrückte Party hat, 20 Schadenspunkte zu."
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
		'en-us': "It's highly skilled at tap-dancing. It waves its cane of ice in time with its graceful movements."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539493,
				tcgplayer: 232370
			}
		},
	],
}

export default card
