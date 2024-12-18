import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [38],
	set: Set,

	name: {
		en: "Ninetales",
		fr: "Feunard",
		es: "Ninetales",
		it: "Ninetales",
		pt: "Ninetales",
		de: "Vulnona"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Eerie Glow",
			fr: "Lueur Sinistre",
			es: "Resplandor Sobrecogedor",
			it: "Lucemistero",
			pt: "Brilho Misterioso",
			de: "Gruselglühen"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned and Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido y Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato e confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso e Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und verwirrt."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
		es: "Vulpix",
		it: "Vulpix",
		pt: "Vulpix",
		de: "Vulpix"
	}
}

export default card