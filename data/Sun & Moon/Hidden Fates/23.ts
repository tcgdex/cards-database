import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali",
		de: "Blitza"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Electromagnetic Wall",
				fr: "Mur Électromagnétique",
				de: "Elektromagnetischer Wall"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire attache une carte Énergie de sa main à l’un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, lege jedes Mal, wenn dein Gegner 1 Energiekarte aus seiner Hand an 1 seiner Pokémon anlegt, 2 Schadensmarken auf jenes Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunderbolt",
				fr: "Tonnerre",
				de: "Donnerblitz"
			},
			effect: {
				en: "Discard all Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie de ce Pokémon.",
				de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 90,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		en: "Its lungs contain an organ that creates electricity. The crackling sound of electricity can be heard when it exhales.",
		de: "Blitza verfügt über ein Organ in der Lunge, das Elektrizität erzeugt. Wenn dieses Pokémon ausatmet, hört man ein elektrisches Knistern."
	},

	thirdParty: {
		cardmarket: 396622,
		tcgplayer: 197667
	}
}

export default card
