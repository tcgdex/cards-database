import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Cryogonal",
		fr: "Hexagel",
		es: "Cryogonal",
		it: "Cryogonal",
		pt: "Cryogonal",
		de: "Frigometri"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		615,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Frozen Lock",
				fr: "Blocage Givrant",
				es: "Bloqueo Gélido",
				it: "Blocco Gelido",
				pt: "Trava Congelante",
				de: "Frostsperre"
			},
			effect: {
				en: "Your opponent can’t play any Item cards from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
				es: "Tu rival no puede jugar ninguna carta de Objeto de su mano durante su próximo turno.",
				it: "Il tuo avversario non può giocare le carte Strumento che ha in mano durante il suo prossimo turno.",
				pt: "Seu oponente não poderá jogar nenhuma carta de Item da própria mão durante a próxima vez dele(a) jogar.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 388057
	}
}

export default card
