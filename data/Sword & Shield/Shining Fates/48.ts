import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [828],
	set: Set,

	name: {
		fr: "Roublenard",
		en: "Thievul",
		es: "Thievul",
		it: "Thievul",
		pt: "Thievul",
		de: "Gaunux"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Goupilou",
		en: "Nickit"
	},

	attacks: [{
		name: {
			fr: "Appel à la Rescousse",
			en: "Call for Goons",
			es: "Llamar a los Subordinados",
			it: "Cerca Base",
			pt: "Chamar os Capangas",
			de: "Einsatztruppenruf"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 3 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 3 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Coinçage",
			en: "Corner",
			es: "Arrinconar",
			it: "Trappola",
			pt: "Quina",
			de: "Bedrängen"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it."
	},

	thirdParty: {
		cardmarket: 539263,
		tcgplayer: 232522
	}
}

export default card
