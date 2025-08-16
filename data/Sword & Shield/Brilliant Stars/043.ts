import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [614],
	set: Set,

	name: {
		en: "Beartic",
		fr: "Polagriffe",
		es: "Beartic",
		it: "Beartic",
		pt: "Beartic",
		de: "Siberio"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Cubchoo",
		fr: "Polarhume",
		es: "Cubchoo",
		it: "Cubchoo",
		pt: "Cubchoo",
		de: "Petznief"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Sheer Cold",
			fr: "Glaciation",
			es: "Frío Polar",
			it: "Purogelo",
			pt: "Frio Extremo",
			de: "Eiseskälte"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't attack.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			de: "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen."
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Frost Smash",
			fr: "Impact Glacial",
			es: "Golpe Gélido",
			it: "Gelocolpo",
			pt: "Pancada Congelada",
			de: "Frostschlag"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608493,
		tcgplayer: 263743
	}
}

export default card