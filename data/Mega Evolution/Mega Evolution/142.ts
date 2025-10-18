import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Inteleon",
		fr: "Lézargus",
		de: "Intelleon",
		it: "Inteleon",
		es: "Inteleon",
		pt: "Inteleon",
		'es-mx': "Inteleon"
	},

	illustrator: "Ligton",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage2",
	dexId: [818],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Bring Down",
			fr: "Réduire à Rien",
			de: "Ausschalten",
			it: "Colpo di Grazia",
			es: "Derrocar",
			pt: "Trazer Abaixo",
			'es-mx': "Eliminación"
		},

		effect: {
			en: "Choose a Pokémon in play (yours or your opponent's) that has the least HP remaining, except for this Pokémon, and it is Knocked Out.",
			fr: "Choisissez l'un des Pokémon en jeu (les vôtres ou ceux de votre adversaire) auxquels il reste le moins de PV, à l'exception de ce Pokémon. Ce Pokémon-là est mis K.O.",
			de: "Wähle 1 der Pokémon im Spiel mit den wenigsten verbleibenden KP (1 deiner oder deines Gegners), außer diesem Pokémon, und es wird kampfunfähig.",
			it: "Scegli uno dei Pokémon in gioco con il minor numero di PS rimanenti, tuo o del tuo avversario, a eccezione di questo Pokémon, e viene messo KO.",
			es: "Elige el Pokémon en juego (tuyo o de tu rival) al que le queden menos PS, excepto este Pokémon, y ese Pokémon queda Fuera de Combate. (Si hay varios Pokémon empatados, elige 1).",
			pt: "Escolha um Pokémon em jogo (seu ou do seu oponente) que tiver o menor PS restante, exceto este Pokémon, e ele será Nocauteado.",
			'es-mx': "Elige 1 Pokémon en juego (tuyo o de tu rival) al que le quede la menor cantidad de PS, excepto este Pokémon, y ese Pokémon queda Fuera de Combate."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Water Shot",
			fr: "Tir Aquatique",
			de: "Wassertreffer",
			it: "Colpo Acquatico",
			es: "Disparo Agua",
			pt: "Disparo d'Água",
			'es-mx': "Acuadisparo"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654481
	}
}

export default card