import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Charmander",
		fr: "Salamèche",
		de: "Glumanda"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 40,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Gather Fire",
				fr: "Récolte de feu"
			},
			effect: {
				en: "Once during your turn (before your attack), you may take 1 Fire Energy card attached to 1 of your other Pokémon and attach it to Charmander. This power can't be used if Charmander is Asleep, Confused, or Paralyzed.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez prendre 1 Énergie  attachée à l'un de vos autres Pokémon et l'attacher à Salamèche. Ce pouvoir ne peut être utilisé si Salamèche est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Tail",
				fr: "Pyro queue",
				de: "Feuerschweif"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "De nombreuses personnes le trouvent mignon et essaient de l'attraper. Leur seule récompense est de se brûler sur sa queue."
	},

	thirdParty: {
		cardmarket: 274103,
		tcgplayer: 84204
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			subtype: "d-ink-dot-error"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
