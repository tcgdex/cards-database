import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [824],
	set: Set,

	name: {
		en: "Team Rocket's Blipbug",
		fr: "Larvadar de la Team Rocket",
		de: "Team Rockets Sensect",
		it: "Blipbug del Team Rocket",
		es: "Blipbug del Team Rocket",
		pt: "Blipbug da Equipe Rocket",
		'es-mx': "Blipbug del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Searching Eyes",
			fr: "Yeux Scrutateurs",
			de: "Suchende Augen",
			it: "Sguardo Inquisitorio",
			es: "Ojos Escrutadores",
			pt: "Olhar Minucioso",
			'es-mx': "Ojos Fisgones"
		},

		effect: {
			en: "Look at 1 of your opponent's face-down Prize cards.",
			fr: "Regardez l'une des cartes Récompense de votre adversaire (actuellement face cachée).",
			de: "Schau dir 1 der verdeckten Preiskarten deines Gegners an.",
			it: "Guarda una delle carte Premio coperte del tuo avversario.",
			es: "Mira 1 de las cartas de Premio de tu rival que están boca abajo.",
			pt: "Olhe 1 das cartas de Prêmio viradas para baixo do seu oponente.",
			'es-mx': "Mira 1 de las cartas de Premio de tu rival que están boca abajo."
		}
	}],

	retreat: 1,
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
		cardmarket: 825889
	}
}

export default card
