import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Vivillon",
		fr: "Prismillon",
		de: "Vivillon",
		it: "Vivillon",
		es: "Vivillon",
		pt: "Vivillon"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Miracle Powder",
			fr: "Poudre Miracle",
			de: "Wunderstaub",
			it: "Miracolpolvere",
			es: "Polvo Milagroso",
			pt: "Pó Milagroso"
		},

		effect: {
			en: "Flip a coin. If heads, choose a Special Condition. Your opponent's Active Pokémon is now affected by that Special Condition.",
			fr: "Lancez une pièce. Si c'est face, choisissez un État Spécial. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial.",
			de: "Wirf 1 Münze. Wähle bei Kopf 1 Speziellen Zustand. Das Aktive Pokémon deines Gegners ist jetzt von jenem Speziellen Zustand betroffen.",
			it: "Lancia una moneta. Se esce testa, scegli una condizione speciale. Il Pokémon attivo del tuo avversario è influenzato da quella condizione speciale.",
			es: "Lanza 1 moneda. Si sale cara, elige una Condición Especial. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial.",
			pt: "Jogue uma moeda. Se sair cara, escolha uma Condição Especial. O Pokémon Ativo do seu oponente agora está afetado por aquela Condição Especial."
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Bug Buzz",
			fr: "Bourdon",
			de: "Käfergebrumm",
			it: "Ronzio",
			es: "Zumbido",
			pt: "Zumbido de Inseto"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card