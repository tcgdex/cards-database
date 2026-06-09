import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Electrode",
		de: "Dunkles Lektrobal"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 70,

	types: [
		"Lightning",
		"Darkness",
	],

	evolveFrom: {
		en: "Voltorb",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Darkness Navigation",
				de: "Darkness Navigation"
			},
			effect: {
				en: "Once during your turn (before your attack), if Dark Electrode has no Energy attached to it, you may search your deck for a Darkness or Dark Metal Energy and attach it to Dark Electrode. Shuffle your deck afterward. This power can't be used if Dark Electrode is affected by a Special Condition.",
				de: "Once during your turn (before you attack), if Dark Electrode has no Energy attached to it, you may search your deck for a  or Dark Metal Energy and attach it to Dark Electrode. Shuffle your deck afterward. This power can't be used if Dark Electrode is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Bomb",
				de: "Energy Bomb"
			},
			effect: {
				en: "You may move all Energy cards attached to Dark Electrode to your Benched Pokémon in any way you like.",
				de: "You may move all Energy cards attached to Dark Electrode to your Benched Pokémon in any way you like."
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

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276296,
		tcgplayer: 84591
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
		}
	]
}

export default card
