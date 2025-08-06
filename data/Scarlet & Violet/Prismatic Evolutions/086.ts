import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Regigigas",
		fr: "Regigigas",
		es: "Regigigas",
		pt: "Regigigas",
		it: "Regigigas",
		de: "Regigigas"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Jewel Breaker",
			fr: "Destruction de Joyaux",
			es: "Rompejoyas",
			pt: "Quebra-joias",
			it: "Distruttore di Gemme",
			de: "Juwelenbrecher"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Tera Pokémon, this attack does 230 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Téracristal, cette attaque inflige 230 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Teracristal, este ataque hace 230 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Tera, este ataque causará 230 pontos de dano a mais.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Teracristal, questo attacco infligge 230 danni in più.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Terakristall-Pokémon ist, fügt diese Attacke 230 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 4,
	regulationMark: "H",
	illustrator: "chibi",

	thirdParty: {
		cardmarket: 805478
	}
}

export default card