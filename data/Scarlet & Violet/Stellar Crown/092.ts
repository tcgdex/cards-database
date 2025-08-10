import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [317],
	set: Set,

	name: {
		en: "Swalot",
		fr: "Avaltout",
		es: "Swalot",
		it: "Swalot",
		pt: "Swalot",
		de: "Schlukwech"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Devouring Mouth",
			fr: "Bouche Dévoreuse",
			es: "Boca Devoradora",
			it: "Bocca Divoratrice",
			pt: "Bocona Devoradora",
			de: "Verschlingermaul"
		},

		effect: {
			en: "If this Pokémon has more Energy attached than your opponent's Active Pokémon, this attack does 160 more damage.",
			fr: "Si ce Pokémon a plus d'Énergies attachées que le Pokémon Actif de votre adversaire, cette attaque inflige 160 dégâts supplémentaires.",
			es: "Si este Pokémon tiene más Energía unida que el Pokémon Activo de tu rival, este ataque hace 160 puntos de daño más.",
			it: "Se questo Pokémon ha più Energie assegnate del Pokémon attivo del tuo avversario, questo attacco infligge 160 danni in più.",
			pt: "Se este Pokémon tiver mais Energia ligada a ele do que o Pokémon Ativo do seu oponente, este ataque causará 160 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mehr Energie angelegt ist als an das Aktive Pokémon deines Gegners, fügt diese Attacke 160 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Venomous Hit",
			fr: "Frappe Venimeuse",
			es: "Golpe Venenoso",
			it: "Colpo Velenoso",
			pt: "Golpe Venenoso",
			de: "Giftiger Schlag"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "OKACHEKE"
}

export default card
