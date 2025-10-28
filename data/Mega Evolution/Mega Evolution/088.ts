import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Yveltal",
		fr: "Yveltal",
		de: "Yveltal",
		it: "Yveltal",
		es: "Yveltal",
		pt: "Yveltal",
		'es-mx': "Yveltal"
	},

	illustrator: "akagi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [717],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Clutch",
			fr: "Serre",
			de: "Greifer",
			it: "Grinfie",
			es: "Embrague",
			pt: "Agarramento",
			'es-mx': "Enganchar"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 20
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Dark Feather",
			fr: "Plume Ténébreuse",
			de: "Dunkelfeder",
			it: "Piuma Oscura",
			es: "Pluma Oscura",
			pt: "Pena Sombria",
			'es-mx': "Pluma Oscura"
		},

		damage: 110
	}],

	retreat: 0,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654427
	}
}

export default card