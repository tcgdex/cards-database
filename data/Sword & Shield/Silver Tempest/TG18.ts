import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [823],
	set: Set,

	name: {
		en: "Corviknight V",
		fr: "Corvaillus V",
		es: "Corviknight V",
		it: "Corviknight V",
		pt: "Corviknight V",
		de: "Krarmor V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Clutch",
			fr: "Serre",
			es: "Embrague",
			it: "Grinfie",
			pt: "Agarramento",
			de: "Greifer"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Sky Hurricane",
			fr: "Vent Violent Céleste",
			es: "Vendaval de los Cielos",
			it: "Tifone Aereo",
			pt: "Furacão Aéreo",
			de: "Himmelssturm"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Sky Hurricane.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Vent Violent Céleste.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Vendaval de los Cielos.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Tifone Aereo.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Furacão Aéreo.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Himmelssturm nicht einsetzen."
		},

		damage: 190
	}],

	retreat: 1,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
