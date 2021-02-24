import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Blacephalon-GX",
		fr: "Pierroteknik-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		806,
	],
	hp: 180,
	types: [
		"Fire",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Bursting Burn",
				fr: "Brûlure Explosante",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned and Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Mind Blown",
				fr: "Caboche-Kaboum",
			},
			effect: {
				en: "Put any amount of Fire Energy attached to your Pokémon in the Lost Zone. This attack does 50 damage for each card put in the Lost Zone in this way.",
				fr: "Placez autant d’Énergies Fire attachées à vos Pokémon que vous voulez dans la Zone Perdue. Cette attaque inflige 50 dégâts pour chaque carte placée dans la Zone Perdue de cette façon.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Burst-GX",
				fr: "Détonation-GX",
			},
			effect: {
				en: "Discard 1 of your Prize cards. If it's an Energy card, attach it to 1 of your Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez l’une de vos cartes Récompense. Si c’est une carte Énergie, attachez-la à l’un de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
