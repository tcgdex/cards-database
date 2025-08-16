import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [322],
	set: Set,

	name: {
		en: "Numel",
		fr: "Chamallot",
		es: "Numel",
		it: "Numel",
		pt: "Numel",
		de: "Camaub"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Singe",
			fr: "Roussi",
			es: "Quemadura",
			it: "Scottata",
			pt: "Chamuscada",
			de: "Versengung"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
			es: "Explosión de Calor",
			it: "Caldobomba",
			pt: "Raio de Calor",
			de: "Hitzestoß"
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Mina Nakai",

	thirdParty: {
		cardmarket: 751537
	}
}

export default card