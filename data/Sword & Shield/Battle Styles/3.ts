import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [71],
	set: Set,

	name: {
		en: "Victreebel",
		fr: "Empiflor",
		es: "Victreebel",
		it: "Victreebel",
		pt: "Victreebel",
		de: "Sarzenia"
	},

	illustrator: "Tika Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
		es: "Weepinbell",
		it: "Weepinbell",
		pt: "Weepinbell",
		de: "Ultrigaria"
	},

	attacks: [{
		name: {
			en: "Panic Vine",
			fr: "Liane en Panique",
			es: "Liana del Pánico",
			it: "Lianapanico",
			pt: "Vinha do Pânico",
			de: "Panikranke"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused. During your opponent's next turn, that Pokémon can't retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			it: "Il Pokémon attivo del tuo avversario viene confuso. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 40,
		cost: ["Grass"]
	}, {
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			es: "Rayo Solar",
			it: "Solarraggio",
			pt: "Raio Solar",
			de: "Solarstrahl"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "Once ingested into this Pokémon's body, even the hardest object will melt into nothing."
	}
}

export default card
