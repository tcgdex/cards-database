import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Mime Jr.",
		fr: "Mime Jr.",
		de: "Pantimimi"
	},
	illustrator: "Noriko Hotta",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		439,
	],
	hp: 30,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
				fr: "Joli visage endormi",
				de: "Niedliches Schlafgesicht"
			},
			effect: {
				en: "As long as Mime Jr. is Asleep, prevent all damage done to Mime Jr. by attacks.",
				fr: "Tant que Mime Jr. est Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
				de: "Solange Pantimimi schläft, verhindere allen Schaden, der Pantimimi durch Angriffe zugefügt wird."
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Sleepy Lost",
				fr: "Berceuse perdue",
				de: "Nirgendwo-Schlaf"
			},
			effect: {
				en: "Put the top card of your opponent's deck in the Lost Zone. Mime Jr. is now Asleep.",
				fr: "Placez la carte du dessus du deck de votre adversaire dans la Zone Perdue. Mime Jr. est maintenant Endormi.",
				de: "Lege die oberste Karte vom Deck deines Gegners ins Nirgendwo. Pantimimi schläft jetzt."
			},

		},
	],






}

export default card
