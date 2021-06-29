import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Trubbish",
		fr: "Miamiasme",
		es: "Trubbish",
		it: "Trubbish",
		pt: "Trubbish",
		de: "Unratütox"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venoshock",
				fr: "Choc Venin",
				es: "Carga Tóxica",
				it: "Velenoshock",
				pt: "Venochoque",
				de: "Giftschock"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Poisoned, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 50 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 50 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Darkness"],
	regulationMark: "D"
}

export default card
