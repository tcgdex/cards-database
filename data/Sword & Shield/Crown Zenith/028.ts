import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [758],
	set: Set,

	name: {
		en: "Salazzle",
		fr: "Malamandre",
		es: "Salazzle",
		it: "Salazzle",
		pt: "Salazzle",
		de: "Amfira"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
		es: "Salandit",
		it: "Salandit",
		pt: "Salandit",
		de: "Molunk"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Trickery",
			fr: "Queue Étourdissante",
			es: "Cola Engaño",
			it: "Confondicoda",
			pt: "Truques de Cauda",
			de: "Schweiftrick"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Super Singe",
			fr: "Super Roussi",
			es: "Superquemadura",
			it: "Super Scottata",
			pt: "Superchamuscada",
			de: "Super-Versengung"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691745
	}
}

export default card