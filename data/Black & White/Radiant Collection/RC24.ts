import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Altaria",
		es: "Altaria",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Swablu",
		es: "Swablu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flap",
				es: "Aleteo",
			},

			damage: 20,
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fairy Friend",
				es: "Amigo Hada",
			},
			effect: {
				en: "If you have any Fairy Pokémon on your Bench, this attack does 30 more damage.",
				es: "Si tienes algún Pokémon Fairy en tu Banca, este ataque hace 30 puntos de daño más.",
			},

			damage: "30+",
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "This fluffiness makes everyone go crazy. Is it really that charming?",
		es: "Esta suavidad hace que todos se vuelvan loco. ¿De veras es tan encantadora?",
	},

	thirdParty: {
		tcgplayer: 113767
	}
}

export default card
