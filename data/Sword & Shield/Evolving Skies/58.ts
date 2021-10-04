import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Dracozolt V",
		fr: "Galvagon V",
		es: "Dracozolt V",
		it: "Dracozolt V",
		pt: "Dracozolt V",
		de: "Lectragon V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "Ryota Murayama",
	suffix: "V",

	attacks: [{
		name: {
			en: "Primeval Beak",
			fr: "Bec Primitif",
			es: "Pico Primitivo",
			it: "Becco Primevo",
			pt: "Primeval Beak",
			de: "Urschnabel"
		},

		effect: {
			en: "During your opponent’s next turn, Energy cards can’t be attached from your opponent’s hand to the Defending Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, aucune carte Énergie ne peut être attachée de la main de votre adversaire au Pokémon Défenseur.",
			es: "Durante el próximo turno de tu rival, no se pueden unir cartas de Energía de la mano de tu rival al Pokémon Defensor.",
			it: "Durante il prossimo turno del tuo avversario, nessuna carta Energia può essere assegnata dalla mano del tuo avversario al Pokémon difensore.",
			pt: "During your opponent’s next turn, Energy cards can’t be attached from your opponent’s hand to the Defending Pokémon.",
			de: "Während des nächsten Zuges deines Gegners können keine Energiekarten aus der Hand deines Gegners an das Verteidigende Pokémon angelegt werden."
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Mountain Swing",
			fr: "Frappe Montagneuse",
			es: "Embestida Montaña",
			it: "Oscillamonte",
			pt: "Mountain Swing",
			de: "Bergschwinger"
		},

		effect: {
			en: "Discard the top 3 cards of your deck.",
			fr: "Défaussez les 3 cartes du dessus de votre deck.",
			es: "Descarta las 3 primeras cartas de tu baraja.",
			it: "Scarta le prime tre carte del tuo mazzo.",
			pt: "Discard the top 3 cards of your deck.",
			de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 180,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	dexId: [880]
}

export default card