import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		de: "Pantimos",
		it: "Mr. Mime"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Mime Jr.",
		it: "Mime Jr."
	},

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Invisible Wall",
				fr: "Mur invisible",
				de: "Unsichtbare Mauer",
				it: "Muro Invisibile"
			},
			effect: {
				en: "Whenever an attack (including your own) does 30 or more damage to Mr. Mime (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.) This power can't be used if Mr. Mime is Asleep, Confused, or Paralyzed.",
				fr: "Chaque fois qu'une attaque (y compris les vôtres) inflige 30 dégâts ou plus à M. Mime (après application de la Faiblesse et de la Résistance), prévenez ces dégâts. (Tout autre effet ou attaque subsiste.) Ce pouvoir ne peut être utilisé si M. Mime est Endormi, Confus ou Paralysé.",
				de: "Immer wenn ein Angriff (auch dein eigener) Pantimos 30 oder mehr Schadenspunkte zufügt (nachdem Schwäche und Resistnz abgerechnet wurden), verhindere diesen Schaden. (Alle anderen Auswirkungen von Agriffen finden immernch statt.) Dies Fähigkeit kann nicht eingesetzt werden, falls Pantimosschlafend, verwirrt oder gelähmt ist.",
				it: "Ogni volta che un attacco (compresi i tuoi) infligge 30 o più danni a Mr. Mime (dopo avere applicato Debolezza e Resistenza), previeni quel danno (ogni altro effetto dell'attacco invece funziona). Questo potere non può essere usato se Mr. Mime è Addormentato, Confuso o Paralizzato."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Meditate",
				fr: "Yoga",
				de: "Meditation",
				it: "Meditazione"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Défenseur.",
				de: "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf dem verteidigendem Pokémon zu.",
				it: "Infligge 10 danni più altri 10 danni per ogni segnalino danno presente sul Pokémon Difensore."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "If interrupted while miming, it will slap around the enemy with its broad hands.",
		fr: "Dérangez-le pendant qu'il mime et il se battra en distribuant des volées de claques.",
		it: "Se viene interrotto mentre fa un'imitazione, prende a sberle il nemico con le sue grandi mani."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273803,
				tcgplayer: 106984
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273803,
				tcgplayer: 106984
			}
		}
	],
}

export default card
