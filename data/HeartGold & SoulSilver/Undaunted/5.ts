import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Demolosse",
		de: "Hundemon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [229],

	hp: 90,

	types: [
		"Darkness"
	],

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
		de: "Hunduster"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Fire Counterattack",
				fr: "Contre-attaque de feu",
				de: "Feuerkonter"
			},
			effect: {
				en: "If your opponent has any Fighting Pokémon in play, this attack does 20 damage plus 60 more damage.",
				fr: "Si votre adversaire dispose de n’importe quel Pokémon Fighting en jeu, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires.",
				de: "Wenn dein Gegner mindestens 1 {F}-Pokémon im Spiel hat, fügt dieser Angriff 20 Schadenspunkte plus 60 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Dark Roar",
				fr: "Cri des Ténèbres",
				de: "Finsternisbrüller"
			},
			effect: {
				en: "Your opponent discards a card from his or her hand.",
				fr: "Votre adversaire défausse une carte de sa main.",
				de: "Dein Gegner legt eine seiner Handkarten auf seinen Ablagestapel."
			},
			damage: 50,

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

	description: {
		en: "Upon hearing its eerie howls, other Pokémon get the shivers and head straight back to their nests.",
		de: "Wenn andere Pokémon sein gräuliches Geheul hören, erschauern sie und verstecken sich schleunigst."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279258,
				tcgplayer: 86209
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279258,
				tcgplayer: 86209
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 371567,
				tcgplayer: 153259
			}
		},
	],

}

export default card
