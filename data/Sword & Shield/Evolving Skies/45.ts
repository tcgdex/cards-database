import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Avalugg",
		fr: "Séracrawl",
		es: "Avalugg",
		it: "Avalugg",
		pt: "Avalugg",
		de: "Arktilas"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "Kouki Saitou",

	attacks: [{
		name: {
			en: "Frost Barrier",
			fr: "Barrière de Givre",
			es: "Barrera Gélida",
			it: "Gelobarriera",
			pt: "Frost Barrier",
			de: "Frostschutz"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Hammer In",
			de: "Einhämmern"
		},

		damage: 140,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,

	evolveFrom: {
		en: "Bergmite",
		fr: "Grelaçon",
		es: "Bergmite",
		it: "Bergmite",
		pt: "Bergmite",
		de: "Arktip"
	},

	description: {
		en: "As Avalugg moves about during the day, the cracks in its body deepen. The Pokémon's body returns to a pristine state overnight."
	},

	dexId: [713],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574069
	}
}

export default card
