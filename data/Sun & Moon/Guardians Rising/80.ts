import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
		es: "Sableye",
		it: "Sableye",
		pt: "Sableye",
		de: "Zobiris"
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Limitation",
				fr: "Restriction",
				es: "Limitación",
				it: "Costrizione",
				pt: "Limitação",
				de: "Einschränken"
			},
			effect: {
				en: "Your opponent can’t play any Supporter cards from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Supporter de sa main pendant son prochain tour.",
				es: "Tu rival no puede jugar ninguna carta de Partidario de su mano durante su próximo turno.",
				it: "Il tuo avversario non può giocare le carte Aiuto che ha in mano durante il suo prossimo turno.",
				pt: "Seu oponente não poderá jogar nenhuma carta de Apoiador da própria mão durante a próxima vez dele(a) jogar.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Unterstützerkarten aus seiner Hand spielen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 20,

		},
	],


	retreat: 1,



}

export default card
