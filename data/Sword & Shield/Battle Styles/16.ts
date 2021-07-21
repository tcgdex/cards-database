import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Bulu",
		fr: "Tokotoro",
		es: "Tapu Bulu",
		it: "Tapu Bulu",
		pt: "Tapu Bulu",
		de: "Kapu-Toro"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Push Down",
			fr: "Recul",
			es: "Oprimir",
			it: "Spintonare",
			pt: "Rebaixar",
			de: "Runterdrücken"
		},

		effect: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif contre l’un de ses Pokémon de Banc.",
			es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			it: "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
			pt: "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			en: "Nature’s Judgment",
			fr: "Jugement de la Nature",
			es: "Sentencia de la Naturaleza",
			it: "Giudizio della Natura",
			pt: "Julgamento da Natureza",
			de: "Gebot der Natur"
		},

		effect: {
			en: "You may discard all Energy from this Pokémon. If you do, this attack does 80 more damage.",
			fr: "Vous pouvez défausser toute l’Énergie de ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Puedes descartar todas las Energías de este Pokémon. Si lo haces, este ataque hace 80 puntos de daño más.",
			it: "Puoi scartare tutte le Energie da questo Pokémon. Se lo fai, questo attacco infligge 80 danni in più.",
			pt: "Você pode descartar todas as Energias deste Pokémon. Se fizer isto, este ataque causará 80 pontos de dano a mais.",
			de: "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card