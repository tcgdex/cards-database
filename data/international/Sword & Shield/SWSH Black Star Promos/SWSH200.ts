import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [823],
	set: Set,

	name: {
		'fr-fr': "Corvaillus V",
		'de-de': "Krarmor V",
		'es-es': "Corviknight V",
		'pt-br': "Corviknight V",
		'it-it': "Corviknight V",
		'en-us': "Corviknight V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal"],

		name: {
			'fr-fr': "Serre",
			'de-de': "Greifer",
			'es-es': "Embrague",
			'pt-br': "Agarramento",
			'it-it': "Grinfie",
			'en-us': "Clutch"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat."
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'fr-fr': "Vent Violent Céleste",
			'de-de': "Himmelssturm",
			'es-es': "Vendaval de los Cielos",
			'pt-br': "Furacão Aéreo",
			'it-it': "Tifone Aereo",
			'en-us': "Sky Hurricane"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Vent Violent Céleste.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Himmelssturm nicht einsetzen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Vendaval de los Cielos.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Furacão Aéreo.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Tifone Aereo.",
			'en-us': "During your next turn, this Pokémon can't use Sky Hurricane."
		},

		damage: 190
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 584317
	}
}

export default card
