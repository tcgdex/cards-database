import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [666],
	set: Set,

	name: {
		'en-us': "Vivillon",
		'fr-fr': "Prismillon",
		'es-es': "Vivillon",
		'it-it': "Vivillon",
		'pt-br': "Vivillon",
		'de-de': "Vivillon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Spewpa",
		'fr-fr': "Pérégrain"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Miracle Powder",
			'fr-fr': "Poudre Miracle",
			'es-es': "Polvo Milagroso",
			'it-it': "Miracolpolvere",
			'pt-br': "Pó Milagroso",
			'de-de': "Wunderstaub"
		},

		effect: {
			'en-us': "Flip a coin. If heads, choose a Special Condition. Your opponent's Active Pokémon is now affected by that Special Condition.",
			'fr-fr': "Lancez une pièce. Si c'est face, choisissez un État Spécial. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial.",
			'es-es': "Lanza 1 moneda. Si sale cara, elige una Condición Especial. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial.",
			'it-it': "Lancia una moneta. Se esce testa, scegli una condizione speciale. Il Pokémon attivo del tuo avversario è influenzato da quella condizione speciale.",
			'pt-br': "Jogue uma moeda. Se sair cara, escolha uma Condição Especial. O Pokémon Ativo do seu oponente agora está afetado por aquela Condição Especial.",
			'de-de': "Wirf 1 Münze. Wähle bei Kopf 1 Speziellen Zustand. Das Aktive Pokémon deines Gegners ist jetzt von jenem Speziellen Zustand betroffen."
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Bug Buzz",
			'fr-fr': "Bourdon",
			'es-es': "Zumbido",
			'it-it': "Ronzio",
			'pt-br': "Zumbido de Inseto",
			'de-de': "Käfergebrumm"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Atsuko Nishida",

	description: {
		'en-us': "This Pokémon was born in a land where flowers bloom. It scatters colorful, toxic scales from its wings during battle.",
	},

	thirdParty: {
        cardmarket: 702307,
        tcgplayer: 487842
    }
}

export default card