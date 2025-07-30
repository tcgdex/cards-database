import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Enamorus",
		fr: "Amovénus",
		es: "Enamorus",
		it: "Enamorus",
		pt: "Enamorus",
		de: "Cupidos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Draining Kiss",
			fr: "Vampibaiser",
			es: "Beso Drenaje",
			it: "Assorbibacio",
			pt: "Beijo Drenante",
			de: "Diebeskuss"
		},

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Loving Sympathy",
			fr: "Compassion Affectueuse",
			es: "Compasión Amorosa",
			it: "Empatia Amorosa",
			pt: "Afeição Amorosa",
			de: "Liebevolle Anteilnahme"
		},

		effect: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 70 more damage.",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 70 puntos de daño más.",
			it: "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 70 danni in più.",
			pt: "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 70 pontos de dano a mais.",
			de: "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691785,
		tcgplayer: 478189
	}
}

export default card