import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [666],
	set: Set,

	name: {
		en: "Vivillon",
		fr: "Prismillon",
		es: "Vivillon",
		it: "Vivillon",
		pt: "Vivillon",
		de: "Vivillon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Spewpa"
	},

	stage: "Stage2",

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
			es: "Lanza 1 moneda. Si sale cara, elige una Condición Especial. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial.",
			it: "Lancia una moneta. Se esce testa, scegli una condizione speciale. Il Pokémon attivo del tuo avversario è influenzato da quella condizione speciale.",
			pt: "Jogue uma moeda. Se sair cara, escolha uma Condição Especial. O Pokémon Ativo do seu oponente agora está afetado por aquela Condição Especial.",
			de: "Wirf 1 Münze. Wähle bei Kopf 1 Speziellen Zustand. Das Aktive Pokémon deines Gegners ist jetzt von jenem Speziellen Zustand betroffen."
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Bug Buzz",
			fr: "Bourdon",
			es: "Zumbido",
			it: "Ronzio",
			pt: "Zumbido de Inseto",
			de: "Käfergebrumm"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card