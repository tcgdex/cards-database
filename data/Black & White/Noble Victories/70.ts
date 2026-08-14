import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Mienshao",
		fr: "Shaofouine",
		es: "Mienshao",
		it: "Mienshao",
		pt: "Mienshao",
		de: "Wie-Shu"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		620,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine",
		de: "Lin-Fu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Feint",
				fr: "Ruse",
				de: "Offenlegung"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied Voltige",
				de: "Turmkick"
			},

			damage: 50,

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
		en: "It wield the fur on its arms like a whip. Its arms attacks come with such rapidity that they cannot even be seen.",
		de: "Es benutzt das Fell an seinen Armen als Peitsche. Beide Arme bewegen sich dabei mit atemberaubender Geschwindigkeit."
	},

	thirdParty: {
		cardmarket: 280193,
		tcgplayer: 87440
	}
}

export default card
