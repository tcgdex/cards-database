import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Dragonite",
		fr: "Dracolosse",
		es: "Dragonite",
		it: "Dragonite",
		pt: "Dragonite",
		de: "Dragoran"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
		es: "Dragonair",
		it: "Dragonair",
		pt: "Dragonair",
		de: "Dragonir"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Dragon Claw",
			fr: "Draco-Griffe",
			es: "Garra Dragón",
			it: "Dragartigli",
			pt: "Garra de Dragão",
			de: "Drachenklaue"
		},

		damage: 80
	}, {
		cost: ["Water", "Lightning", "Colorless", "Colorless"],

		name: {
			en: "Energy Hurricane",
			fr: "Ouragan d'Énergie",
			es: "Energía Huracanada",
			it: "Uragano Energetico",
			pt: "Furacão Energético",
			de: "Energiesturm"
		},

		effect: {
			en: "Search your deck for up to 3 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia base e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
