import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [124],
	set: Set,

	name: {
		en: "Jynx",
		fr: "Lippoutou",
		es: "Jynx",
		it: "Jynx",
		pt: "Jynx",
		de: "Rossana"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		en: "Its strange cries sound like human language. There are some musicians who compose songs for Jynx to sing."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Double Draw",
			fr: "Double Pioche",
			de: "Zweifachzug",
			es: "Roba Doble",
			pt: "Compra Dupla",
			it: "Pescata Doppia"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			de: "Ziehe 2 Karten.",
			es: "Roba 2 cartas.",
			pt: "Compre 2 cartas.",
			it: "Pesca due carte."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Dazzle Dance",
			fr: "Danse Éblouissante",
			de: "Verwirrender Tanz",
			es: "Danza Deslumbrante",
			pt: "Dança Fascinante",
			it: "Accecadanza"
		},

		damage: 30,

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			it: "Il Pokémon attivo del tuo avversario viene confuso."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582604
	}
}

export default card