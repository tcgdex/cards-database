import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Liepard",
		fr: "Léopardus",
		es: "Liepard",
		it: "Liepard",
		pt: "Liepard",
		de: "Kleoparda"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		510,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Silent Claw",
				fr: "Griffe Silencieuse",
			},
			effect: {
				en: "Your opponent reveals his or her hand. Discard a Supporter card you find there. Use the effect of that card as the effect of this attack.",
				fr: "Votre adversaire montre sa main. Défaussez une carte Supporter que vous y trouvez. Utilisez l'effet de la carte Supporter défaussée en tant qu'effet de cette attaque.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Fake Out",
				fr: "Bluff",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280824
	}
}

export default card
