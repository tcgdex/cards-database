import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Métamorph V",
		en: "Ditto V",
		es: "Ditto V",
		it: "Ditto V",
		pt: "Ditto V",
		de: "Ditto V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Transformation-V",
			en: "V Transformation",
			es: "Metamorfosis V",
			it: "Mutazione V",
			pt: "Metamorfose V",
			de: "V-Transformation"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez choisir un Pokémon-V de base dans votre pile de défausse et l'échanger contre ce Pokémon. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu, et tous les autres effets restent sur le nouveau Pokémon.",
			en: "Once during your turn, you may choose a Basic Pokémon V from your discard pile and switch it with this Pokémon. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.",
			es: "Una vez durante tu turno, puedes elegir 1 Pokémon V Básico de tu pila de descartes y cambiarlo por este Pokémon. Todas las cartas unidas a este Pokémon, los contadores de daño, las Condiciones Especiales, los turnos de juego y todos los demás efectos permanecen en el nuevo Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi scegliere un Pokémon-V Base dalla tua pila degli scarti e scambiarlo con questo Pokémon. Le carte assegnate, i segnalini danno, le condizioni speciali, il numero di turni da cui è in gioco e qualsiasi altro effetto restano sul nuovo Pokémon.",
			pt: "Uma vez durante o seu turno, você poderá escolher 1 Pokémon V Básico da sua pilha de descarte e trocá-lo por este Pokémon. Quaisquer cartas ligadas, contadores de dano, Condições Especiais, turnos em jogo e quaisquer outros efeitos permanecem no novo Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 Basis-Pokémon-V aus deinem Ablagestapel wählen und es gegen dieses Pokémon austauschen. Alle angelegten Karten, Schadensmarken, Speziellen Zustände, die Anzahl der Züge im Spiel sowie alle anderen Effekte verbleiben auf dem neuen Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Collage",
			en: "Stick On",
			es: "Adherir",
			it: "Collante",
			pt: "Grudar",
			de: "Ankleistern"
		},

		effect: {
			fr: "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			en: "Attach a basic Energy card from your discard pile to this Pokémon.",
			es: "Une 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia base dalla tua pila degli scarti.",
			pt: "Ligue 1 carta de Energia básica da sua pilha de descarte a este Pokémon.",
			de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
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
	suffix: "V"
}

export default card
