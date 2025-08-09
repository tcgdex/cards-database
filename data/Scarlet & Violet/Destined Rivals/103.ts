import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [444],
	set: Set,

	name: {
		en: "Cynthia's Gabite",
		fr: "Carmache de Cynthia",
		de: "Cynthias Knarksel",
		it: "Gabite di Camilla",
		es: "Gabite de Cintia",
		pt: "Gabite da Cíntia",
		'es-mx': "Gabite de Cynthia"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Champion's Call",
			fr: "Appel de la Maîtresse",
			de: "Ruf des Champs",
			it: "Richiamo della Campionessa",
			es: "Llamada de Campeones",
			pt: "Chamado de Campeão",
			'es-mx': "Llamado de Campeones"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Cynthia's Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck un Pokémon de Cynthia, le montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Cynthias Pokémon durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo un Pokémon di Camilla, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 Pokémon de Cintia, enseñarlo y ponerlo en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Uma vez durante o seu turno, você poderá procurar por um Pokémon da Cíntia no seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Una vez durante tu turno, puedes buscar en tu mazo 1 Pokémon de Cynthia, mostrarlo y ponerlo en tu mano. Después, baraja las cartas de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Dragonslice",
			fr: "Draco-Tranche",
			de: "Drachenschnetzler",
			it: "Dragotrancia",
			es: "Tajo Dragón",
			pt: "Talhada do Dragão",
			'es-mx': "Corte Dracónico"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card