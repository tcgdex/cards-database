import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [686],
	set: Set,

	name: {
		fr: "Sepiatop",
		en: "Inkay",
		es: "Inkay",
		it: "Inkay",
		pt: "Inkay",
		de: "Iscalar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			fr: "Câlin",
			en: "Hug",
			es: "Abrazo",
			it: "Abbraccio",
			pt: "Abraço",
			de: "Hug"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kedamahadaitai Yawarakai",

	thirdParty: {
		cardmarket: 725217
	}
}

export default card