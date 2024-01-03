import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Kecleon",
		fr: "Kecleon",
		de: "Kecleon"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		352,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Camouflage",
				fr: "Camouflage",
				de: "Tarnung"
			},
			effect: {
				en: "If any basic Energy card attached to Kecleon is the same type as the Attacking Pokémon's type, any damage done by attacks from that Pokémon to Kecleon is reduced by 40 (after applying Weakness and Resistance).",
				fr: "Si n'importe quelle carte Énergie de base attachée à Kecleon est du même type que le Pokémon Attaquant, tous dégâts infligés à Kecleon par des attaques de ce Pokémon sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
				de: "Wenn mindestens 1 an Kecleon angelegte Basis-Energiekarte denselben Typ hat wie das Angreifende Pokémon, wird Schaden, der Kecleon durch Angriffe dieses Pokémon zugefügt wird, um 40 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blind Scratch",
				fr: "Griffe aveuglante",
				de: "Verdeckter Kratzer"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does no damage to the Defending Pokémon. Instead, this attack does 20 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est pile, cette attaque n'inflige pas de dégâts au Pokémon Défenseur. Cette attaque inflige 20 dégâts à 1 de vos Pokémon.  (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Wirf 1 Münze. Bei \"Zahl\" fügt dieser Angriff dem Verteidigenden Pokémon keinen Schaden zu, stattdessen fügt er 1 deiner Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
