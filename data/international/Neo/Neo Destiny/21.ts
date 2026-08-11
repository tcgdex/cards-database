import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Ursaring",
		'fr-fr': "Ursaring obscur",
		'de-de': "Dunkles Ursaring"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		217,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Provoke",
				'fr-fr': "Provocation",
				'de-de': "Provoke"
			},
			effect: {
				'en-us': "Look at your opponent's hand. If he or she has any Baby Pokémon and/or Basic Pokémon there, you may put any number of them onto your opponent's Bench (as long as there's room). Then, your opponent looks at your hand. If you have any Baby Pokémon and/or Basic Pokémon there, your opponent may put any number of them onto your Bench (as long as there's room).",
				'fr-fr': "Regardez la main de votre adversaire. Si vous y trouvez des Bébés Pokémon et/ou des Pokémon de base, vous pouvez placer n'importe quel nombre d'entre eux sur le Banc de votre adversaire (tant qu'il n'est pas plein). Puis votre adversaire regarde votre main. S'il y trouve des Bébés Pokémon et/ou des Pokémon de base, votre adversaire peut placer n'importe quel nombre d'entre eux sur votre Banc (tant qu'il n'est pas plein).",
				'de-de': "Look at your opponent's hand. If he or she has any Baby Pokémon and/or Basic Pokémon there, you may put any number of them onto your opponent's Bench (as long as there's room). Then, your opponent looks at your hand. If you have any Baby Pokémon and/or Basic Pokémon there, your opponent may put any number of them onto your Bench (as long as there's room)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Battle Frenzy",
				'fr-fr': "Frénésie du combat",
				'de-de': "Battle Frenzy"
			},
			effect: {
				'en-us': "For each Pokémon in play (yours and your opponent's), flip a coin. For each heads, this attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance for this attack.",
				'fr-fr': "Pour chaque Pokémon en jeu (ceux de votre adversaire et les vôtres), lancez une pièce. Pour chaque face, cette attaque inflige 20 dégâts à ce Pokémon. N'appliquez ni la Faiblesse ni la Résistance pour cette attaque.",
				'de-de': "For each Pokémon in play (yours and your opponent's), flip a coin. For each heads, this attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance for this attack."
			},

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
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Its keen nose can pick out any scent, even that of food buried deep underground.",
		'fr-fr': "Son sens aiguisé de l'odorat détecte la moindre odeur, même celle de la nourriture quand elle est enfouie profondément."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274673,
				tcgplayer: 84663
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274673,
				tcgplayer: 84663
			}
		}
	]
}

export default card
