import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [702],
	set: Set,

	name: {
		en: "Dedenne",
		fr: "Dedenne",
		es: "Dedenne",
		it: "Dedenne",
		pt: "Dedenne",
		de: "Dedenne"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Dede-Flash",
			fr: "Dede-Flash",
			es: "Dede-Flash",
			it: "Dedeflash",
			pt: "Dedeclarão",
			de: "Dedeblitz"
		},

		effect: {
			en: "If your opponent has exactly 1 Prize card remaining, this attack does 60 more damage, and your opponent's Active Pokémon is now Confused.",
			fr: "S'il reste exactement une carte Récompense à votre adversaire, cette attaque inflige 60 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "Si a tu rival le queda exactamente 1 carta de Premio, este ataque hace 60 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Se il tuo avversario ha esattamente una carta Premio rimanente, questo attacco infligge 60 danni in più e il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Se o seu oponente tiver exatamente 1 carta de Prêmio restante, este ataque causará 60 pontos de dano a mais e o Pokémon Ativo do seu oponente ficará Confuso.",
			de: "Wenn dein Gegner genau 1 verbleibende Preiskarte hat, fügt diese Attacke 60 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608517
	}
}

export default card