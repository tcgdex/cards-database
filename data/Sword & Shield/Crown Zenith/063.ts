import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Dusclops",
		fr: "Téraclope",
		es: "Dusclops",
		it: "Dusclops",
		pt: "Dusclops",
		de: "Zwirrklop"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Duskull",
		fr: "Skelénox",
		es: "Duskull",
		it: "Duskull",
		pt: "Duskull",
		de: "Zwirrlicht"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Fade to Black",
			fr: "Fondu au Noir",
			es: "Ennegrecer",
			it: "Svanire nel Buio",
			pt: "Breu",
			de: "Schwarz vor Augen"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card