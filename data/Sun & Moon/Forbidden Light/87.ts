import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Sylveon",
		fr: "Nymphali",
	},
	illustrator: "0313",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		700,
	],
	hp: 90,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wink Wink",
				fr: "Clin d’Œil",
			},
			effect: {
				en: "Your opponent reveals their hand. You may discard a Supporter card you find there and use the effect of that card as the effect of this attack.",
				fr: "Votre adversaire dévoile sa main. Vous pouvez défausser une carte Supporter que vous y trouvez et utiliser l’effet de la carte défaussée en tant qu’effet de cette attaque.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Magical Shot",
				fr: "Coup Magique",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
