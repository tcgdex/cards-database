import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Charcadet",
		fr: "Charbambin",
		es: "Charcadet",
		it: "Charcadet",
		pt: "Charcadet",
		de: "Knarbon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Fiery Fighting Spirit",
			fr: "Combativité Ardente",
			es: "Espíritu de Lucha Ardiente",
			it: "Fuocospirito Combattivo",
			pt: "Espírito de Luta Incandescente",
			de: "Feuriger Kampfgeist"
		},

		effect: {
			en: "Search your deck for a Basic Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie Fire de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Energía Fire Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia base Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Energia Fire Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Basis-Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Knuckle Punch",
			fr: "Coud'Phalange",
			es: "Puño con Nudillos",
			it: "Noccapugno",
			pt: "Soco com Punho",
			de: "Knöchelhieb"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card