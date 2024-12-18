import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [62],
	set: Set,

	name: {
		fr: "Tartard",
		en: "Poliwrath",
		es: "Poliwrath",
		it: "Poliwrath",
		pt: "Poliwrath",
		de: "Quappo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Bulles d'O",
			en: "Bubble Beam",
			es: "Rayo Burbuja",
			it: "Bollaraggio",
			pt: "Jato de Bolhas",
			de: "Blubbstrahl"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 50
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Coup de Poing Héroïque",
			en: "Heroic Punch",
			es: "Puño Heroico",
			it: "Pugno Eroico",
			pt: "Soco Heroico",
			de: "Heldenhafter Hieb"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 150 dégâts supplémentaires.",
			en: "Flip a coin. If heads, this attack does 150 more damage.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 150 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 150 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 150 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
		es: "Poliwhirl",
		it: "Poliwhirl",
		pt: "Poliwhirl",
		de: "Quaputzi"
	}
}

export default card