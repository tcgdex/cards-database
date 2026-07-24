import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Tyranocif",
		de: "Despotar"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [57],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Aura",
				fr: "Sombre aura",
				de: "Finstere Aura"
			},
			effect: {
				en: "All Energy attached to Tyranitar is Dark instead of its usual type.",
				fr: "Toutes les cartes Énergie attachées à Tyranocif sont d'Énergie  au lieu de leur type habituel.",
				de: "Alle Energie, die an Despotar angelegt ist, ist anstatt ihrem normalen Typ -Energie."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Karate Chop",
				fr: "Piaffement",
				de: "Trampeln"
			},
			effect: {
				en: "Damage from this attack is reduced by 10 for each damage counter on Primeape.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires et inflige 10 dégâts à chaque Pokémon du Banc de votre adversaire, s'il en possède. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 50 Schadenspunkte plus 10 weitere Schadenspunkte zu und außerdem jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte, falls vorhanden. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: "40-",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90115,
				cardmarket: 274904
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
