import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [132],
	set: Set,

	name: {
		'fr-fr': "Métamorph V",
		'en-us': "Ditto V",
		'es-es': "Ditto V",
		'it-it': "Ditto V",
		'pt-br': "Ditto V",
		'de-de': "Ditto V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 170,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Transformation-V",
			'en-us': "V Transformation",
			'es-es': "Metamorfosis V",
			'it-it': "Mutazione V",
			'pt-br': "Metamorfose V",
			'de-de': "V-Transformation"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez choisir un Pokémon-V de base dans votre pile de défausse et l'échanger contre ce Pokémon. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu, et tous les autres effets restent sur le nouveau Pokémon.",
			'en-us': "Once during your turn, you may choose a Basic Pokémon V from your discard pile and switch it with this Pokémon. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.",
			'es-es': "Una vez durante tu turno, puedes elegir 1 Pokémon V Básico de tu pila de descartes y cambiarlo por este Pokémon. Todas las cartas unidas a este Pokémon, los contadores de daño, las Condiciones Especiales, los turnos de juego y todos los demás efectos permanecen en el nuevo Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi scegliere un Pokémon-V Base dalla tua pila degli scarti e scambiarlo con questo Pokémon. Le carte assegnate, i segnalini danno, le condizioni speciali, il numero di turni da cui è in gioco e qualsiasi altro effetto restano sul nuovo Pokémon.",
			'pt-br': "Uma vez durante o seu turno, você poderá escolher 1 Pokémon V Básico da sua pilha de descarte e trocá-lo por este Pokémon. Quaisquer cartas ligadas, contadores de dano, Condições Especiais, turnos em jogo e quaisquer outros efeitos permanecem no novo Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-Pokémon-V aus deinem Ablagestapel wählen und es gegen dieses Pokémon austauschen. Alle angelegten Karten, Schadensmarken, Speziellen Zustände, die Anzahl der Züge im Spiel sowie alle anderen Effekte verbleiben auf dem neuen Pokémon."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Collage",
			'en-us': "Stick On",
			'es-es': "Adherir",
			'it-it': "Collante",
			'pt-br': "Grudar",
			'de-de': "Ankleistern"
		},

		effect: {
			'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			'en-us': "Attach a basic Energy card from your discard pile to this Pokémon.",
			'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia base dalla tua pila degli scarti.",
			'pt-br': "Ligue 1 carta de Energia básica da sua pilha de descarte a este Pokémon.",
			'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539273,
				tcgplayer: 232524
			}
		},
	],
}

export default card
