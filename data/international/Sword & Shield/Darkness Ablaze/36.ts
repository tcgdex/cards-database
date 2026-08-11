import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Galarian Mr. Rime",
		'fr-fr': "M. Glaquette de Galar",
		'es-es': "Mr. Rime de Galar",
		'it-it': "Mr. Rime di Galar",
		'pt-br': "Mr. Rime de Galar",
		'de-de': "Galar-Pantifrost"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [866],
	set: Set,
	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Galarian Mr. Mime",
		'fr-fr': "M. Mime de Galar",
		'es-es': "Mr. Mime de Galar",
		'it-it': "Mr. Mime di Galar",
		'pt-br': "Mr. Mime de Galar",
		'de-de': "Galar-Pantimos"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shuffle Dance",
				'fr-fr': "Danse Entraînante",
				'es-es': "Danza Cambio",
				'it-it': "Mischiadanza",
				'pt-br': "Balança Esqueleto",
				'de-de': "Shuffle-Tanz"
			},
			effect: {
				'en-us': "Once during your turn, you may switch 1 of your opponent's face-down Prize cards with the top card of their deck. (The cards stay face down.)",
				'fr-fr': "Une fois pendant votre tour, vous pouvez échanger l'une des cartes Récompense de votre adversaire (actuellement face cachée) contre la carte du dessus de son deck. (Les cartes restent face cachée.)",
				'es-es': "Una vez durante tu turno, puedes cambiar 1 de las cartas de Premio que están boca abajo de tu rival por la primera carta de su baraja. (Las cartas permanecen boca abajo).",
				'it-it': "Una sola volta durante il tuo turno, puoi scambiare una delle carte Premio coperte del tuo avversario con la prima carta del suo mazzo. Le carte restano coperte.",
				'pt-br': "Uma vez durante o seu turno, você poderá trocar 1 das cartas de Prêmio viradas para baixo do seu oponente pela carta de cima do baralho dele(a) (as cartas continuam viradas para baixo).",
				'de-de': "Einmal während deines Zuges kannst du 1 verdeckte Preiskarte deines Gegner gegen die oberste Karte seines Decks austauschen. (Die Karten bleiben verdeckt.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mad Party",
				'fr-fr': "Folle Aventure",
				'es-es': "Merienda de Locos",
				'it-it': "Festa di Matti",
				'pt-br': "Festa Maluca",
				'de-de': "Verrückte Party"
			},
			effect: {
				'en-us': "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l'attaque Folle Aventure.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Merienda de Locos.",
				'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Festa di Matti.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque Festa Maluca.",
				'de-de': "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Verrückte Party hat, 20 Schadenspunkte zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It's highly skilled at tap-dancing. It waves its cane of ice in time with its graceful movements."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483054,
				tcgplayer: 219267
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483054,
				tcgplayer: 219267
			}
		},
	],
}

export default card
