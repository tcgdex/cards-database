import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [760],
	set: Set,

	name: {
		en: "Bewear",
		fr: "Chelours",
		es: "Bewear",
		it: "Bewear",
		pt: "Bewear",
		de: "Kosturso"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
		es: "Stufful",
		it: "Stufful",
		pt: "Stufful",
		de: "Velursi"
	},

	stage: "Stage1",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		en: "The moves it uses to take down its prey would make a martial artist jealous. It tucks subdued prey under its arms to carry them to its nest."
	},

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Split Spiral Punch",
			fr: "Coup d'Poing en Demi Spirale",
			de: "Spiralhieb",
			es: "Puño en Espiral Cortante",
			pt: "Soco Espiral Dividido",
			it: "Spiralpugno Squarciante"
		},

		damage: 40,

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			it: "Il Pokémon attivo del tuo avversario viene confuso."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Strength",
			fr: "Force",
			de: "Stärke",
			es: "Fuerza",
			pt: "Força",
			it: "Forza"
		},

		damage: 130
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582779,
		tcgplayer: 253365
	}
}

export default card