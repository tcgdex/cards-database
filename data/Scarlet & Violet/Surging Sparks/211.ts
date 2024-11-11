import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Appletun",
		fr: "Dratatin",
		es: "Appletun",
		it: "Appletun",
		pt: "Appletun",
		de: "Schlapfel"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Melting Sweetness",
			fr: "Nectar Liquéfiant",
			es: "Dulzor Fundido",
			it: "Dolcezza Disarmante",
			pt: "Derretida Doce",
			de: "Schmelzende Süße"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't attack.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			de: "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen."
		},

		damage: 50
	}, {
		cost: ["Grass", "Fire"],

		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal",
			es: "Placaje Salvaje",
			it: "Azionferoce",
			pt: "Investida Feroz",
			de: "Wilder Tackle"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card