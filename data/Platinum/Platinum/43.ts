import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Carnivine",
		fr: "Vortente",
		de: "Venuflibis"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [455],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stretch Vine",
				fr: "Longue Liane",
				de: "Streckranke"
			},
			effect: {
				en: "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon de Banc de votre adversaire. Cette attaque inflige 10 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 2 Pokémon auf der Bank deines Gegners. Dieser Angriff fügt den gewählten Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Absorb",
				fr: "Vol-vie",
				de: "Absorber"
			},
			effect: {
				en: "Remove 2 damage counters from Carnivine.",
				fr: "Retirez à Vortente 2 marqueurs de dégât.",
				de: "Entferne 2 Schadensmarken von Venuflibis."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Vine Extract",
				fr: "Extrait de plante",
				de: "Rankenextrakt"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Burned and Poisoned.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Brûlé et Empoisonné.",
				de: "Wenn auf dem Verteidigenden Pokémon mindestens 1 Schadensmarke liegt, ist das Verteidigende Pokémon jetzt verbrannt und vergiftet."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84102,
				cardmarket: 278464
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278464,
				tcgplayer: 84102
			}
		}
	],

}

export default card
