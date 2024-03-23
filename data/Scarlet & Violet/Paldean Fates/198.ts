import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		es: "Jigglypuff",
		it: "Jigglypuff",
		pt: "Jigglypuff"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Lead",
			fr: "Mentor",
			es: "Liderazgo",
			it: "Guidare",
			pt: "Liderar"
		},

		effect: {
			en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Supporter, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Apoiador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Stompy Stomp",
			fr: "Pied-Piétine",
			es: "Pisotonazo",
			it: "Pesto Ripesto",
			pt: "Pisada"
		},

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card