import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [49],
	set: Set,

	name: {
		en: "Venomoth",
		fr: "Aéromite",
		es: "Venomoth",
		it: "Venomoth",
		pt: "Venomoth",
		de: "Omot"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss",
		es: "Venonat",
		it: "Venonat",
		pt: "Venonat",
		de: "Bluzuk"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Miracle Powder",
			fr: "Poudre Miracle",
			es: "Polvo Milagroso",
			it: "Miracolpolvere",
			pt: "Pó Milagroso",
			de: "Wunderstaub"
		},

		effect: {
			en: "Flip a coin. If heads, choose a Special Condition. Your opponent's Active Pokémon is now affected by that Special Condition.",
			fr: "Lancez une pièce. Si c'est face, choisissez un État Spécial. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial.",
			es: "Lanza 1 moneda. Si sale cara, elige 1 Condición Especial. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial.",
			it: "Lancia una moneta. Se esce testa, scegli una condizione speciale. Il Pokémon attivo del tuo avversario è influenzato da quella condizione speciale.",
			pt: "Jogue 1 moeda. Se sair cara, escolha uma Condição Especial. O Pokémon Ativo do seu oponente agora está afetado por aquela Condição Especial.",
			de: "Wirf 1 Münze. Wähle bei Kopf 1 Speziellen Zustand. Das Aktive Pokémon deines Gegners ist jetzt von jenem Speziellen Zustand betroffen."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento",
			de: "Windstoß"
		},

		damage: 70
	}],

	retreat: 0,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682041,
		tcgplayer: 451621
	}
}

export default card