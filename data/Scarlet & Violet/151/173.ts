import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		fr: "Pikachu",
		en: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Chargeur",
			en: "Charge",
			es: "Carga",
			it: "Sottocarica",
			pt: "Carga",
			de: "Ladevorgang"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Énergie Lightning de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			en: "Search your deck for a Basic Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			es: "Busca en tu baraja 1 carta de Energía Lightning Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia base Lightning e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Energia Lightning Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Basis-Lightning-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Pika-Poing",
			en: "Pika Punch",
			es: "Pika Puño",
			it: "Pika Pugno",
			pt: "Soco Pikachu",
			de: "Pikahieb"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card