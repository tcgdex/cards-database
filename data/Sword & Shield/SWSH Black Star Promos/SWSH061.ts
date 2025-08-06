import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		fr: "Pikachu V",
		en: "Pikachu V",
		es: "Pikachu V",
		it: "Pikachu V",
		de: "Pikachu V",
		pt: "Pikachu V"
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
			de: "Ladevorgang",
			pt: "Carga"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {L}, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 2 {L} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía {L} y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia {L} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			de: "Durchsuche dein Deck nach bis zu 2 {L}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			pt: "Procure por até 2 cartas de Energia {L} no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho."
		},

		cost: ["Lightning"]
	}, {
		name: {
			fr: "Tonnerre",
			en: "Thunderbolt",
			es: "Rayo",
			it: "Fulmine",
			de: "Donnerblitz",
			pt: "Relâmpago"
		},

		effect: {
			fr: "Défaussez toute l'Énergie de ce Pokémon.",
			en: "Discard all Energy from this Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			pt: "Descarte todas as Energias deste Pokémon."
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
	dexId: [25],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 496545
	}
}

export default card
