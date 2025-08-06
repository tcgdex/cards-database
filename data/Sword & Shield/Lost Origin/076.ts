import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Zoroark",
		fr: "Zoroark de Hisui",
		es: "Zoroark de Hisui",
		it: "Zoroark di Hisui",
		pt: "Zoroark de Hisui",
		de: "Hisui-Zoroark"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Hisuian Zorua",
		fr: "Zorua de Hisui",
		es: "Zorua de Hisui",
		it: "Zorua di Hisui",
		pt: "Zorua de Hisui",
		de: "Hisui-Zorua"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Doom Curse",
			fr: "Malédiction Tragique",
			es: "Maldición Trágica",
			it: "Maledizione Avversa",
			pt: "Maldição Sinistra",
			de: "Verhängnisvoller Fluch"
		},

		effect: {
			en: "At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out.",
			fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera mis K.O.",
			es: "Al final del próximo turno de tu rival, el Pokémon Defensor quedará Fuera de Combate.",
			it: "Alla fine del prossimo turno del tuo avversario, il Pokémon difensore verrà messo KO.",
			pt: "O Pokémon Defensor será Nocauteado no final do próximo turno do seu oponente.",
			de: "Am Ende des nächsten Zuges deines Gegners wird das Verteidigende Pokémon kampfunfähig."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Call Back",
			fr: "Relance",
			es: "Volver a Llamar",
			it: "Chiamata di Ritorno",
			pt: "Chamado de Volta",
			de: "Rückruf"
		},

		effect: {
			en: "Put a card from your discard pile into your hand.",
			fr: "Ajoutez à votre main une carte de votre pile de défausse.",
			es: "Pon 1 carta de tu pila de descartes en tu mano.",
			it: "Prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
			pt: "Coloque 1 carta da sua pilha de descarte na sua mão.",
			de: "Nimm 1 Karte aus deinem Ablagestapel auf deine Hand."
		}
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	},

	thirdParty: {
		cardmarket: 670814,
		tcgplayer: 283957
	}
}

export default card
