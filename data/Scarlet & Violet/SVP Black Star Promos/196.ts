import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard EX",
		fr: "Dracaufeu-ex"
	},

	suffix: "EX",
	rarity: "None",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},
	stage: "Stage2",
	dexId: [6],
	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	illustrator: "5ban Graphics",

	abilities: [
		{
			type: "Ability",

			name: {
				en: "Infernal Reign",
				fr: "Règne Infernal"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may ",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 3 cartes Énergie  de base et les attacher à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.", +
					"search your deck for up to 3 Basic Fire Energy cards and attach them to your Pokémon in any way " +
					"you like. Then, shuffle your deck.",
			},
		}
	],

	attacks: [
		{
			cost: ["Fire"],

			name: {
				en: "Burning Darkness",
				fr: "Obscurité Brûlante"
			},

			damage: "180+",
			effect: {
				en: "This attack does 30 more damage for each Prize card your opponent has taken.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée."
			}
		},
	],

	retreat: 2,
	regulationMark: "G",

	variants:[
		{
			type: "holo",
		},
		{
			type: "lenticular",
			size: "jumbo"
		}
	]
}

export default card
