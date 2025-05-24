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

	rarity: "Common",
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
			fr: "Cherchez dans votre deck une carte Énergie {L} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			en: "Search your deck for a Basic {L} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			es: "Busca en tu baraja 1 carta de Energía {L} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia base {L} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Energia {L} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Basis-{L}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
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
		holo: false
	},

	illustrator: "Naoyo Kimura"
}

export default card