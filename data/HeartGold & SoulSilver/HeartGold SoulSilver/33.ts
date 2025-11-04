import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Tyrogue",
		fr: "Debugant",
		de: "Rabauz"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		236,
	],

	hp: 30,

	types: [
		"Fighting",
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
				en: "As long as Tyrogue is Asleep, prevent all damage done to Tyrogue by attacks.",
				fr: "Tant que Debugant reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
				de: "Solange Rabauz schläft, verhindere allen Schaden, der Rabauz durch Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Mischievous Punch",
				fr: "Coquipoing",
				de: "Gehässiger Hieb"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness or Resistance. Tyrogue is now Asleep.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance. Debugant est maintenant Endormi.",
				de: "Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert. Rabauz schläft jetzt."
			},
			damage: 30,

		},
	],

	retreat: 0,

	description: {
		en: "Even though it is small, it can’t be ignored because it will slug any handy target without warning."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp : ["gustavo-wada"]
		}
	],

	thirdParty: {
		cardmarket: 279005,
		tcgplayer: 90131
	}
}

export default card
