import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Golurk",
		fr: "Golemastoc",
		es: "Golurk",
		it: "Golurk",
		pt: "Golurk",
		de: "Golgantes"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem"
	},

	attacks: [{
		name: {
			en: "Reinforced Punch",
			fr: "Coup de Poing Renforcé",
			es: "Puñetazo Reforzado",
			it: "Fortepugno",
			pt: "Soco Reforçado",
			de: "Verstärkter Hieb"
		},

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 90 more damage.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 90 puntos de daño más.",
			it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Megaton Fall",
			fr: "Chute Mégatonne",
			es: "Caída Megatón",
			it: "Caduta Megatonica",
			pt: "Queda do Megaton",
			de: "Megatonnenfall"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 190,
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card