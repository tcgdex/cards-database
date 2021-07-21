import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Grumpig",
		fr: "Groret",
		es: "Grumpig",
		it: "Grumpig",
		pt: "Grumpig",
		de: "Groink"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink"
	},

	attacks: [{
		name: {
			en: "Dazzle Dance",
			fr: "Danse Éblouissante",
			es: "Danza Deslumbrante",
			it: "Accecadanza",
			pt: "Dança Fascinante",
			de: "Verwirrender Tanz"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
			es: "Joya de Luz",
			it: "Gemmoforza",
			pt: "Gema Poderosa",
			de: "Juwelenkraft"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card