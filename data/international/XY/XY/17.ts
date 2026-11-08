import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Vivillon",
		'fr-fr': "Prismillon",
		'es-es': "Vivillon",
		'it-it': "Vivillon",
		'pt-br': "Vivillon",
		'de-de': "Vivillon"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		666,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Spewpa",
		'fr-fr': "Pérégrain",
		'es-es': "Spewpa",
		'it-it': "Spewpa",
		'pt-br': "Spewpa",
		'de-de': "Puponcho"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Conversion Powder",
				'fr-fr': "Poudre Altérante",
				'es-es': "Polvo Conversión",
				'it-it': "Convertipolvere",
				'pt-br': "Pó da Conversão",
				'de-de': "Wandlungspuder"
			},
			effect: {
				'en-us': "Choose either Asleep or Poisoned. Your opponent's Active Pokémon is now affected by that Special Condition.",
				'fr-fr': "Choisissez soit Endormi, soit Empoisonné. Le Pokémon Actif de votre adversaire est maintenant affecté par l'État Spécial choisi.",
				'es-es': "Elige entre Dormido o Envenenado. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial.",
				'it-it': "Scegli tra addormentato e avvelenato. Il Pokémon attivo del tuo avversario è influenzato da quella condizione speciale.",
				'pt-br': "Escolha entre Adormecido e Envenenado. O Pokémon Ativo do seu oponente agora é afetado por essa Condição Especial.",
				'de-de': "Entscheide dich für Schlaf oder Vergiftung. Das Aktive Pokémon deines Gegners ist jetzt von diesem Speziellen Zustand betroffen."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Colorful Wind",
				'fr-fr': "Couleur du Vent",
				'es-es': "Viento Colorido",
				'it-it': "Ventarcobaleno",
				'pt-br': "Vento Colorido",
				'de-de': "Farbenfroher Wind"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each different type of basic Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque différent type d'Énergie de base attaché à ce Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada tipo de Energía Básica diferente unida a este Pokémon.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni tipo diverso di Energia base assegnata a questo Pokémon.",
				'pt-br': "Esse ataque causa 30 de danos adicionais para cada tipo diferente de Energia básica ligada a este Pokémon.",
				'de-de': "Dieser Angriff fügt 30 weitere Schadenspunkte für jeden unterschiedlichen, an dieses Pokémon angelegten Basis-Energietyp zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Vivillon with many different patterns are found all over the world. These patterns are affected by the climate of their habitat.",
	},

	thirdParty: {
		cardmarket: 281354,
		tcgplayer: 90395
	}
}

export default card
