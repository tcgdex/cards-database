import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Évoli Radieux",
		de: "Strahlendes Evoli",
		es: "Eevee Radiante",
		pt: "Eevee Radiante",
		it: "Eevee Lucente",
		en: "Radiant Eevee"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Rassemblement Étincelant",
			de: "Funkelndes Treffen",
			es: "Grupo Resplandeciente",
			pt: "Reunião Reluzente",
			it: "Raduno Brillante",
			en: "Twinkle Gathering"
		},

		effect: {
			fr: "Cherchez dans votre deck un nombre de cartes inférieur ou égal au nombre de types de Pokémon que vous avez en jeu et ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu so vielen Karten, wie du verschiedene Pokémon-Typen im Spiel hast, und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			es: "Busca en tu baraja una cantidad de cartas igual o inferior a cada tipo diferente de Pokémon que tengas en juego y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por um número de cartas no seu baralho até o número de tipos diferentes de Pokémon que você tiver em jogo e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo un numero di carte uguale o inferiore al numero di Pokémon di tipo diverso che hai in gioco e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			en: "Search your deck for a number of cards up to the number of different types of Pokémon you have in play and put them into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Ruée Propulsée",
			de: "Boost-Sprint",
			es: "Carrera Impulso",
			pt: "Impulso de Corrida",
			it: "Scatto Caricato",
			en: "Boost Dash"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "It has the ability to alter the composition of its body to suit its surrounding environment."
	},

	thirdParty: {
		cardmarket: 653697
	}
}

export default card