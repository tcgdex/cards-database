import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [36],
	set: Set,

	name: {
		en: "Clefable",
		fr: "Mélodelfe",
		es: "Clefable",
		it: "Clefable",
		pt: "Clefable",
		de: "Pixi"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
		es: "Clefairy",
		it: "Clefairy",
		pt: "Clefairy",
		de: "Piepi"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Moonlit Miracle",
			fr: "Miracle Lunaire",
			es: "Milagro Luz Lunar",
			it: "Prodigio Chiarodiluna",
			pt: "Milagre Enluarado",
			de: "Mondscheinwunder"
		},

		effect: {
			en: "Flip 3 coins. Choose a number of your Pokémon in play up to the number of heads. For each of those Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Lancez 3 pièces. Parmi vos Pokémon en jeu, choisissez un nombre de Pokémon inférieur ou égal au nombre de côtés face obtenus. Pour chacun de ces Pokémon, cherchez dans votre deck une carte Évolution de ce Pokémon-là, puis placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
			es: "Lanza 3 monedas. Elige una cantidad de tus Pokémon en juego igual o inferior al número de caras que te hayan salido. Para cada uno de esos Pokémon, busca en tu baraja 1 carta que evolucione de ese Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			it: "Lancia tre volte una moneta. Scegli un numero di Pokémon che hai in gioco uguale o inferiore al numero di volte in cui è uscito testa. Per ognuno di quei Pokémon, cerca nel tuo mazzo una carta che si evolve da quel Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			pt: "Jogue 3 moedas. Escolha um número dos seus Pokémon em jogo até o número de caras. Para cada um daqueles Pokémon, procure por 1 carta no seu baralho que evolua daquele Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			de: "Wirf 3 Münzen. Wähle bis zu so viele deiner Pokémon im Spiel, wie du Kopf geworfen hast. Durchsuche für jedes jener Pokémon dein Deck nach 1 Karte, die sich aus jenem Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			it: "Magicolpo",
			pt: "Tiro Mágico",
			de: "Magischer Schuss"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card