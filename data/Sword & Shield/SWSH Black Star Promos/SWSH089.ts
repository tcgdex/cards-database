import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Octillery",
		fr: "Octillery",
		es: "Octillery",
		it: "Octillery",
		pt: "Octillery",
		de: "Octillery"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Remoraid"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Rapid Strike Search",
			es: "Búsqueda de Golpe Fluido",
			it: "Ricerca Colpo Rapido",
			pt: "Rapid Strike Search",
			de: "Fließender-Angriff-Suche"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Rapid Strike card, reveal it, and put it into your hand. Then, shuffle your deck. You can’t use more than 1 Rapid Strike Search Ability each turn.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Golpe Fluido, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja. No puedes usar más de 1 habilidad Búsqueda de Golpe Fluido en cada turno.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Colpo Rapido, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Puoi usare l’abilità Ricerca Colpo Rapido solo una volta per turno.",
			pt: "Once during your turn, you may search your deck for a Rapid Strike card, reveal it, and put it into your hand. Then, shuffle your deck. You can’t use more than 1 Rapid Strike Search Ability each turn.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Fließender-Angriff-Karte durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck. Du kannst die Fähigkeit Fließender-Angriff-Suche nur einmal pro Zug einsetzen."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "It traps enemies with its suction-cupped tentacles, then smashes them with its rock-hard head."
	},

	stage: "Stage1",
	dexId: [224],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	attacks: [{
		name: {
			en: "Waterfall",
			fr: "Cascade",
			es: "Cascada",
			it: "Cascata",
			pt: "Waterfall",
			de: "Kaskade"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}]
}

export default card
