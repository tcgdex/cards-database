import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	},

	name: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli",
		es: "Eevee",
		it: "Eevee",
		'es-mx': "Eevee",
		pt: "Eevee"
	},

	illustrator: "Wintr Wandr",
	rarity: "Common",
	category: "Pokemon",
	dexId: [133],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Fetch and Hide",
			fr: "Cherche et Cache",
			de: "Stibitzen und Verstecken",
			es: "Buscar y Esconder",
			it: "Afferra e Nascondi",
			'es-mx': "Buscar y Esconder",
			pt: "Catar e Esconder"
		},

		effect: {
			en: "Your opponent reveals their hand, and you put an Item card you find there on the bottom of your opponent's deck.",
			fr: "Votre adversaire montre sa main, puis vous placez une carte Objet que vous y trouvez en dessous du deck de votre adversaire.",
			de: "Dein Gegner zeigt dir seine Handkarten und du legst 1 Itemkarte, die du dort findest, unter das Deck deines Gegners.",
			es: "Tu rival enseña las cartas de su mano, y tú pones 1 carta de Objeto que encuentres entre ellas en la parte inferior de la baraja de tu rival.",
			it: "Il tuo avversario mostra le carte che ha in mano e tu metti una carta Strumento presente tra esse in fondo al suo mazzo.",
			'es-mx': "Tu rival muestra su mano, y tú pones 1 carta de Objeto que encuentres en ella en la parte inferior del mazo de tu rival.",
			pt: "Seu oponente revela a mão dele, e você coloca uma carta de Item que você encontrar lá como a carta de baixo do baralho do seu oponente."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			es: "Placaje",
			it: "Azione",
			'es-mx': "Tacleada",
			pt: "Investida"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907723,
				tcgplayer: 714357
			}
		}
	],
}

export default card
