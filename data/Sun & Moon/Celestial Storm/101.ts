import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Kartana",
		fr: "Katagami",
		es: "Kartana",
		it: "Kartana",
		pt: "Kartana",
		de: "Katagami"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		798,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Divine Paper",
				fr: "Papier Sublime",
				es: "Papel Divino",
				it: "Fendente Celeste",
				pt: "Papel Divino",
				de: "Himmelspapier"
			},
			effect: {
				en: "If your opponent has exactly 6 Prize cards remaining, this attack does 90 more damage.",
				fr: "S’il reste exactement 6 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si a tu rival le quedan exactamente 6 cartas de Premio, este ataque hace 90 puntos de daño más.",
				it: "Se il tuo avversario ha esattamente sei carte Premio rimanenti, questo attacco infligge 90 danni in più.",
				pt: "Se o seu oponente tiver exatamente 6 cartas de Prêmio restantes, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn dein Gegner genau 6 verbleibende Preiskarten hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 361343
	}
}

export default card
