import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
		de: "Rasaff"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Anger Point",
				fr: "Colérique",
				de: "Kurzschluss"
			},
			effect: {
				en: "If Primeape has any damage counters on it, Primeape's attacks do 40 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Si Colossinge possède des marqueurs de dégât, ses attaques infligent 40 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
				de: "Wenn auf Rasaff mindestens 1 Schadensmarke liegt, fügen Rasaffs Angriffe den Aktiven Pokémon 40 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whump",
				fr: "Boom",
				de: "Ffumpp"
			},
			effect: {
				en: "Primeape is now Confused. Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Colosinge est maintenant Confus. Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire.",
				de: "Rasaff ist jetzt verwirrt. Wirf 1 Münze. Bei \"Kopf\" kann das Verteidigende Pokémon im nächsten Zug deines Gegners nicht angreifen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277929
	}
}

export default card
