import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [970],
	set: Set,

	name: {
		en: "Glimmora",
		fr: "Floréclat",
		es: "Glimmora",
		it: "Glimmora",
		pt: "Glimmora",
		de: "Lumiflora"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		en: "Glimmet",
		fr: "Germéclat",
		es: "Glimmet",
		it: "Glimmet",
		pt: "Glimmet",
		de: "Lumispross"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Stun Poison",
			fr: "Poison Neural",
			es: "Veneno Paralizador",
			it: "Bloccanervi",
			pt: "Veneno Atordoante",
			de: "Nervengift"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Envenenado e Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert und vergiftet."
		}
	}, {
		cost: ["Fighting"],

		name: {
			en: "Venoshock",
			fr: "Choc Venin",
			es: "Carga Tóxica",
			it: "Velenoshock",
			pt: "Venochoque",
			de: "Giftschock"
		},

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 100 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 100 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Kazumasa Yasukuni",

	thirdParty: {
		cardmarket: 769283
	}
}

export default card