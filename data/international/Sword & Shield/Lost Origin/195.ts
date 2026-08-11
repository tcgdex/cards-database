import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Thorton",
		'fr-fr': "Cardus",
		'es-es': "Espinal",
		'it-it': "Spino",
		'pt-br': "Spino",
		'de-de': "Distmar"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Choose a Basic Pokémon in your discard pile and switch it with 1 of your Basic Pokémon in play. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.",
		'fr-fr': "Choisissez un Pokémon de base dans votre pile de défausse et échangez-le contre l'un de vos Pokémon de base en jeu. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours en jeu et tous les autres effets restent sur le nouveau Pokémon.",
		'es-es': "Elige 1 Pokémon Básico de tu pila de descartes y cámbialo por 1 de tus Pokémon Básicos en juego. Todas las cartas unidas a este Pokémon, los contadores de daño, las Condiciones Especiales, los turnos de juego y todos los demás efectos permanecen en el nuevo Pokémon.",
		'it-it': "Scegli un Pokémon Base dalla tua pila degli scarti e scambialo con uno dei tuoi Pokémon Base in gioco. Le carte assegnate, i segnalini danno, le condizioni speciali, il numero di turni da cui è in gioco e qualsiasi altro effetto restano sul nuovo Pokémon.",
		'pt-br': "Escolha 1 Pokémon Básico da sua pilha de descarte e troque-o por 1 dos seus Pokémon Básicos em jogo. Quaisquer cartas ligadas, contadores de dano, Condições Especiais, turnos em jogo e quaisquer outros efeitos permanecem no novo Pokémon.",
		'de-de': "Wähle 1 Basis-Pokémon aus deinem Ablagestapel und tausche es gegen 1 deiner Basis-Pokémon im Spiel aus. Alle angelegten Karten, Schadensmarken, Speziellen Zustände, die Anzahl der Züge im Spiel sowie alle anderen Effekte verbleiben auf dem neuen Pokémon."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674200,
				tcgplayer: 284148
			}
		},
	],
}

export default card
