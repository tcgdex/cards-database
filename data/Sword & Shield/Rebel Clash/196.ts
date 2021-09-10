import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity VMAX",
		fr: "Salarsen VMAX",
		es: "Toxtricity VMAX",
		it: "Toxtricity VMAX",
		pt: "Toxtricity VMAX",
		de: "Riffex VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	evolveFrom: {
		en: "Toxtricity V",
		fr: "Salarsen-V"
	},

	attacks: [{
		name: {
			en: "G-Max Riot",
			fr: "Émeute G-Max",
			es: "Gigarrebelión",
			it: "Gigatumulto",
			pt: "Rixa G-Max",
			de: "Giga-Aufstand"
		},

		effect: {
			en: "If your opponent’s Active Pokémon is Poisoned, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 80 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 80 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "160+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX"
}

export default card