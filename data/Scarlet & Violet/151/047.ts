import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Parasect",
		en: "Parasect",
		es: "Parasect",
		it: "Parasect",
		pt: "Parasect",
		de: "Parasek"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Propagation de Filaments",
			en: "Spread Filaments",
			es: "Filamentos Dispersos",
			it: "Spargifilamenti",
			pt: "Espalhar Filamentos",
			de: "Filamentausbreitung"
		},

		effect: {
			fr: "Lancez 2 pièces. Cherchez dans votre deck un nombre de Pokémon Grass inférieur ou égal au nombre de côtés face obtenus, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			en: "Flip 2 coins. Search your deck for a number of Grass Pokémon up to the number of heads and put them onto your Bench. Then, shuffle your deck.",
			es: "Lanza 2 monedas. Busca en tu baraja una cantidad de Pokémon Grass igual o inferior al número de caras que te hayan salido y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Lancia due volte una moneta. Cerca nel tuo mazzo un numero di Pokémon Grass uguale o inferiore al numero di volte in cui è uscito testa e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Jogue 2 moedas. Procure por um número de Pokémon Grass no seu baralho até o número de caras e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Wirf 2 Münzen. Durchsuche dein Deck nach bis zu so vielen Grass-Pokémon, wie du Kopf geworfen hast, und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Tranch'Griffe",
			en: "Claw Slash",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			de: "Klauenschlitzer"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card