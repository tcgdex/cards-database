import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [88],
	set: Set,

	name: {
		en: "Team Rocket's Grimer",
		fr: "Tadmorv de la Team Rocket",
		de: "Team Rockets Sleima",
		it: "Grimer del Team Rocket",
		es: "Grimer del Team Rocket",
		pt: "Grimer da Equipe Rocket",
		'es-mx': "Grimer del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Corrosive Sludge",
			fr: "Détritus Dégueu",
			de: "Zersetzender Schlamm",
			it: "Melma Corrosiva",
			es: "Lodo Corrosivo",
			pt: "Lodo Corrosivo",
			'es-mx': "Lodo Corrosivo"
		},

		effect: {
			en: "At the end of your opponent's next turn, discard the Defending Pokémon and all attached cards.",
			fr: "À la fin du prochain tour de votre adversaire, défaussez le Pokémon Défenseur et toutes les cartes qui lui sont attachées.",
			de: "Lege am Ende des nächsten Zuges deines Gegners das Verteidigende Pokémon und alle angelegten Karten auf seinen Ablagestapel.",
			it: "Alla fine del prossimo turno del tuo avversario, scarta il Pokémon difensore e tutte le carte a esso assegnate.",
			es: "Al final del próximo turno de tu rival, descarta el Pokémon Defensor y todas las cartas unidas a él.",
			pt: "No final do próximo turno do seu oponente, descarte o Pokémon Defensor e todas as cartas ligadas a ele.",
			'es-mx': "Al final del próximo turno de tu rival, descarta el Pokémon Defensor y todas las cartas unidas a él."
		}
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825997
	}
}

export default card
