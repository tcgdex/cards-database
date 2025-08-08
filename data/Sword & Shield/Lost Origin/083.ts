import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		en: "Hisuian Growlithe",
		fr: "Caninos de Hisui",
		es: "Growlithe de Hisui",
		it: "Growlithe di Hisui",
		pt: "Growlithe de Hisui",
		de: "Hisui-Fukano"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
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
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card