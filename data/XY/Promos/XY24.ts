import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Greninja",
		fr: "Amphinobi",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		658,
	],
	hp: 130,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mist Concealment",
				fr: "Voile de Brume",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon during your opponent's next turn.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez éviter tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon de votre adversaire pendant son prochain tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Shadow Bullet",
				fr: "Kunaï Sournois",
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
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



}

export default card
