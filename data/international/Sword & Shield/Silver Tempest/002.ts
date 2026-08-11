import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [49],
	set: Set,

	name: {
		'en-us': "Venomoth",
		'fr-fr': "Aéromite",
		'es-es': "Venomoth",
		'it-it': "Venomoth",
		'pt-br': "Venomoth",
		'de-de': "Omot"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss",
		'es-es': "Venonat",
		'it-it': "Venonat",
		'pt-br': "Venonat",
		'de-de': "Bluzuk"
	},

	stage: "Stage1",

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
			'es-es': "Lanza 1 moneda. Si sale cara, elige 1 Condición Especial. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial.",
			'it-it': "Lancia una moneta. Se esce testa, scegli una condizione speciale. Il Pokémon attivo del tuo avversario è influenzato da quella condizione speciale.",
			'pt-br': "Jogue 1 moeda. Se sair cara, escolha uma Condição Especial. O Pokémon Ativo do seu oponente agora está afetado por aquela Condição Especial.",
			'de-de': "Wirf 1 Münze. Wähle bei Kopf 1 Speziellen Zustand. Das Aktive Pokémon deines Gegners ist jetzt von jenem Speziellen Zustand betroffen."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento",
			'de-de': "Windstoß"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682041,
				tcgplayer: 451621
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682041,
				tcgplayer: 451621
			}
		},
	],
}

export default card
