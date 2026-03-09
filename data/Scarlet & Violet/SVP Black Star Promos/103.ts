import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [229],
	set: Set,

	name: {
		en: "Houndoom ex",
		fr: "Démolosse-ex",
		es: "Houndoom ex",
		it: "Houndoom-ex",
		pt: "Houndoom ex",
		de: "Hundemon-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
		es: "Houndour",
		it: "Houndour",
		pt: "Houndour",
		de: "Hunduster"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Evil Claw",
			fr: "Griffe Maléfique",
			es: "Garra Malvada",
			it: "Artiglio Maligno",
			pt: "Garra Maligna",
			de: "Böse Klaue"
		},

		effect: {
			en: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
			fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			es: "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
			pt: "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante o próximo turno do seu oponente.",
			de: "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 90
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Hound's Fang",
			fr: "Croc de Molosse",
			es: "Colmillo del Sabueso",
			it: "Zanna del Segugio",
			pt: "Cãoninos",
			de: "Hundefänge"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "PLANETA Tsuji"
}

export default card