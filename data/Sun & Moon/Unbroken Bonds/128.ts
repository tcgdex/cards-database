import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	dexId: [808],

	name: {
		en: "Meltan",
		fr: "Meltan",
		es: "Meltan",
		it: "Meltan",
		pt: "Meltan",
		de: "Meltan"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Steel Melt",
				fr: "Fonte d’Acier",
				es: "Fusión de Acero",
				it: "Metallo Fuso",
				pt: "Aço Derretido",
				de: "Stahlschmelze"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Metal Pokémon, this attack does 40 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Metal, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Metal, este ataque hace 40 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è di tipo Metal, questo attacco infligge 40 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Metal, este ataque causará 40 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Metal-Pokémon ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "10+",

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
		cardmarket: 372417
	}
}

export default card
