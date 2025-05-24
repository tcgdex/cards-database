import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Corvaillus V",
		de: "Krarmor V",
		es: "Corviknight V",
		pt: "Corviknight V",
		it: "Corviknight V",
		en: "Corviknight V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal"],

		name: {
			fr: "Serre",
			de: "Greifer",
			es: "Embrague",
			pt: "Agarramento",
			it: "Grinfie",
			en: "Clutch"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			fr: "Vent Violent Céleste",
			de: "Himmelssturm",
			es: "Vendaval de los Cielos",
			pt: "Furacão Aéreo",
			it: "Tifone Aereo",
			en: "Sky Hurricane"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Vent Violent Céleste.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Himmelssturm nicht einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Vendaval de los Cielos.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Furacão Aéreo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Tifone Aereo.",
			en: "During your next turn, this Pokémon can't use Sky Hurricane."
		},

		damage: 190
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card