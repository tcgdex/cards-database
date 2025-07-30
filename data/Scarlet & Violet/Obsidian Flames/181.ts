import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Gourmelet",
		en: "Lechonk",
		es: "Lechonk",
		it: "Lechonk",
		pt: "Lechonk",
		de: "Ferkuli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Voix Enjôleuse",
			en: "Disarming Voice",
			es: "Voz Cautivadora",
			it: "Incantavoce",
			pt: "Voz Desarmante",
			de: "Säuselstimme"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			en: "Your opponent's Active Pokémon is now Confused.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Tomokazu Komiya",

	thirdParty: {
		cardmarket: 725260
	}
}

export default card