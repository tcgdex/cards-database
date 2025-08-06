import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Mew V",
		fr: "Mew V",
		es: "Mew V",
		it: "Mew V",
		pt: "Mew V",
		de: "Mew V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",
	retreat: 0,
	regulationMark: "E",
	illustrator: "Naoki Saito",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Energy Mix",
			fr: "Mélange Énergétique",
			de: "Energie-Mix",
			es: "Mezcla de Energía",
			pt: "Mistura de Energias",
			it: "Miscuglio di Energia"
		},

		effect: {
			en: "Search your deck for an Energy card and attach it to 1 of your Fusion Strike Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie, puis attachez-la à l'un de vos Pokémon Poing de Fusion. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Energiekarte und lege sie an 1 deiner Fusionsangriff-Pokémon an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 carta de Energía y únela a 1 de tus Pokémon Golpe Fusión. Después, baraja las cartas de tu baraja.",
			pt: "Procure por 1 carta de Energia no seu baralho e ligue-a a 1 dos seus Pokémon Golpe Fusão. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo una carta Energia e assegnala a uno dei tuoi Pokémon Colpo Fusione. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Psychic Leap",
			fr: "Bond Psychique",
			de: "Psycho-Sprung",
			es: "Salto Psíquico",
			pt: "Salto Psíquico",
			it: "Guizzo Psichico"
		},

		damage: 70,

		effect: {
			en: "You may shuffle this Pokémon and all attached cards into your deck.",
			fr: "Vous pouvez mélanger dans votre deck ce Pokémon et toutes les cartes attachées.",
			de: "Du kannst dieses Pokémon und alle angelegten Karten in dein Deck mischen.",
			es: "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajar todas las cartas.",
			pt: "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			it: "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582611,
		tcgplayer: 253147
	}
}

export default card