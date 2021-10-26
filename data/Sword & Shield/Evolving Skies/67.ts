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
		en: "Sableye",
		fr: "Ténéfix",
		es: "Sableye",
		it: "Sableye",
		pt: "Sableye",
		de: "Zobiris"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Eri Yamaki",

	attacks: [{
		name: {
			en: "Go and Collect",
			fr: "Aller Chercher",
			es: "Ve y Recoge",
			it: "Far Raccolta",
			pt: "Go and Collect",
			de: "Fliegen und Sammeln"
		},

		effect: {
			en: "Search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Dresseur, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Entrenador, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Allenatore, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
			de: "Durchsuche dein Deck nach 1 Trainerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Corner",
			fr: "Coinçage",
			es: "Arrinconar",
			it: "Trappola",
			pt: "Corner",
			de: "Bedrängen"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 40,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,

	description: {
		en: "It feeds on gemstone crystals. In darkness, its eyes sparkle with the glitter of jewels."
	},

	dexId: [302],
	regulationMark: "E"
}

export default card
