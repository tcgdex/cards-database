import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Gliscor",
		fr: "Scorvol"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		472,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Gligar",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Bind Eye",
				fr: "Aveugle d'un oeil"
			},
			effect: {
				en: "As long as Gliscor is your Active Pokémon, your opponent can't remove any Special Conditions by evolving or devolving his or her Pokémon. (This also includes putting a Pokémon Level-Up card onto that Pokémon.)",
				fr: "Tant que Scorvol est votre Pokémon Actif, votre adversaire ne peut pas retirer d'États Spéciaux en faisant évoluer ou en dés-évoluant son Pokémon. (Placer une carte Niveau Sup sur ce Pokémon inclus.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cutting Turn",
				fr: "Tour coupant"
			},
			effect: {
				en: "Flip a coin. If heads, put damage counters on the Defending Pokémon until it is 10HP away from being Knocked Out. If you do, shuffle Gliscor and all cards attached to it into your deck.",
				fr: "Lancez une pièce. Si c'est face, placez des marqueurs de dégât sur le Pokémon Défenseur jusqu'à ce qu'il ne lui reste plus que 10 PV. Mélangez ensuite à votre deck Scorvol ainsi que toutes les cartes qui lui sont attachées."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Friction Heat",
				fr: "Friction chauffante"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
