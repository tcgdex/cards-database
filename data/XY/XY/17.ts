import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Vivillon",
		fr: "Prismillon",
		es: "Vivillon",
		it: "Vivillon",
		pt: "Vivillon",
		de: "Vivillon"
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
		en: "Spewpa",
		fr: "Pérégrain",
		es: "Spewpa",
		it: "Spewpa",
		pt: "Spewpa",
		de: "Puponcho"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Conversion Powder",
				fr: "Poudre Altérante",
				es: "Polvo Conversión",
				it: "Convertipolvere",
				pt: "Pó da Conversão",
				de: "Wandlungspuder"
			},
			effect: {
				en: "Choose either Asleep or Poisoned. Your opponent's Active Pokémon is now affected by that Special Condition.",
				fr: "Choisissez soit Endormi, soit Empoisonné. Le Pokémon Actif de votre adversaire est maintenant affecté par l'État Spécial choisi.",
				es: "Elige entre Dormido o Envenenado. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial.",
				it: "Scegli tra addormentato e avvelenato. Il Pokémon attivo del tuo avversario è influenzato da quella condizione speciale.",
				pt: "Escolha entre Adormecido e Envenenado. O Pokémon Ativo do seu oponente agora é afetado por essa Condição Especial.",
				de: "Entscheide dich für Schlaf oder Vergiftung. Das Aktive Pokémon deines Gegners ist jetzt von diesem Speziellen Zustand betroffen."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Colorful Wind",
				fr: "Couleur du Vent",
				es: "Viento Colorido",
				it: "Ventarcobaleno",
				pt: "Vento Colorido",
				de: "Farbenfroher Wind"
			},
			effect: {
				en: "This attack does 30 more damage for each different type of basic Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque différent type d'Énergie de base attaché à ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño más por cada tipo de Energía Básica diferente unida a este Pokémon.",
				it: "Questo attacco infligge 30 danni in più per ogni tipo diverso di Energia base assegnata a questo Pokémon.",
				pt: "Esse ataque causa 30 de danos adicionais para cada tipo diferente de Energia básica ligada a este Pokémon.",
				de: "Dieser Angriff fügt 30 weitere Schadenspunkte für jeden unterschiedlichen, an dieses Pokémon angelegten Basis-Energietyp zu."
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



}

export default card
