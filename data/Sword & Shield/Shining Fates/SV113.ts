import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Salarsen VMAX",
		en: "Toxtricity VMAX",
		es: "Toxtricity VMAX",
		it: "Toxtricity VMAX",
		pt: "Toxtricity VMAX",
		de: "Riffex VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Salarsen-V",
		en: "Toxtricity V"
	},

	attacks: [{
		name: {
			fr: "Émeute G-Max",
			en: "G-Max Riot",
			es: "Gigarrebelión",
			it: "Gigatumulto",
			pt: "Rixa G-Max",
			de: "Giga-Aufstand"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 80 dégâts supplémentaires.",
			en: "If your opponent’s Active Pokémon is Poisoned, this attack does 80 more damage.",
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
	regulationMark: "D"
}

export default card