import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Miraidon",
		fr: "Miraidon",
		es: "Miraidon",
		it: "Miraidon",
		pt: "Miraidon",
		de: "Miraidon"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [1008],

	hp: 120,

	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				en: "Charge",
				fr: "Chargeur",
				es: "Carga",
				it: "Sottocarica",
				pt: "Carga",
				de: "Ladevorgang"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck une carte Énergie Lightning, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Lightning y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Energia Lightning e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Energia Lightning no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Lightning-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
				es: "Bola Voltio",
				it: "Energisfera",
				pt: "Bola Elétrica",
				de: "Elektroball"
			},
			damage: 90,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

