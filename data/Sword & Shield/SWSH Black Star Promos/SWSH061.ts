import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		fr: "Pikachu V",
		en: "Pikachu V",
		es: "Pikachu V",
		it: "Pikachu V",
		de: "Pikachu V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Chargeur",
			en: "Charge",
			es: "Carga",
			it: "Sottocarica",
			de: "Ladevorgang"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu’à 2 cartes Énergie Lightning, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 2 Lightning Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Lightning y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia Lightning e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			de: "Durchsuche dein Deck nach bis zu 2 Lightning-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		cost: ["Lightning"]
	}, {
		name: {
			fr: "Tonnerre",
			en: "Thunderbolt",
			es: "Rayo",
			it: "Fulmine",
			de: "Donnerblitz"
		},

		effect: {
			fr: "Défaussez toute l’Énergie de ce Pokémon.",
			en: "Discard all Energy from this Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	stage: "Basic",
	suffix: "V",
	dexId: [25],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card