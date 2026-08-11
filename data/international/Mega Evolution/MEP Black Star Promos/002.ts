import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Inteleon",
		'fr-fr': "Lézargus",
		'de-de': "Intelleon",
		'it-it': "Inteleon",
		'es-es': "Inteleon",
		'pt-br': "Inteleon",
		'es-mx': "Inteleon"
	},

	evolveFrom: {
		'en-us': "Drizzile",
		'fr-fr': "Arrozard",
		'de-de': "Phlegleon",
		'it-it': "Drizzile",
		'es-es': "Drizzile",
		'pt-br': "Drizzile",
		'es-mx': "Drizzile",
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage2",
	dexId: [818],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Bring Down",
			'fr-fr': "Réduire à Rien",
			'de-de': "Ausschalten",
			'it-it': "Colpo di Grazia",
			'es-es': "Derrocar",
			'pt-br': "Trazer Abaixo",
			'es-mx': "Eliminación"
		},

		effect: {
			'en-us': "Choose a Pokémon in play (yours or your opponent's) that has the least HP remaining, except for this Pokémon, and it is Knocked Out.",
			'fr-fr': "Choisissez l'un des Pokémon en jeu (les vôtres ou ceux de votre adversaire) auxquels il reste le moins de PV, à l'exception de ce Pokémon. Ce Pokémon-là est mis K.O.",
			'de-de': "Wähle 1 der Pokémon im Spiel mit den wenigsten verbleibenden KP (1 deiner oder deines Gegners), außer diesem Pokémon, und es wird kampfunfähig.",
			'it-it': "Scegli uno dei Pokémon in gioco con il minor numero di PS rimanenti, tuo o del tuo avversario, a eccezione di questo Pokémon, e viene messo KO.",
			'es-es': "Elige el Pokémon en juego (tuyo o de tu rival) al que le queden menos PS, excepto este Pokémon, y ese Pokémon queda Fuera de Combate. (Si hay varios Pokémon empatados, elige 1).",
			'pt-br': "Escolha um Pokémon em jogo (seu ou do seu oponente) que tiver o menor PS restante, exceto este Pokémon, e ele será Nocauteado.",
			'es-mx': "Elige 1 Pokémon en juego (tuyo o de tu rival) al que le quede la menor cantidad de PS, excepto este Pokémon, y ese Pokémon queda Fuera de Combate."
		}
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Water Shot",
			'fr-fr': "Tir Aquatique",
			'de-de': "Wassertreffer",
			'it-it': "Colpo Acquatico",
			'es-es': "Disparo Agua",
			'pt-br': "Disparo d'Água",
			'es-mx': "Acuadisparo"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 851045,
				tcgplayer: 654596
			}
		},
		{
			type: "holo",
			stamp: ["set-logo","staff"],
			thirdParty: {
				cardmarket: 851046,
				tcgplayer: 656802
			}
		},
	],
}

export default card
