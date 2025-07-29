import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Ursaring",
		fr: "Ursaring obscur",
		de: "Dunkles Ursaring"
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
		en: "Teddiursa",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Provoke",
				fr: "Provocation",
				de: "Provoke"
			},
			effect: {
				en: "Look at your opponent's hand. If he or she has any Baby Pokémon and/or Basic Pokémon there, you may put any number of them onto your opponent's Bench (as long as there's room). Then, your opponent looks at your hand. If you have any Baby Pokémon and/or Basic Pokémon there, your opponent may put any number of them onto your Bench (as long as there's room).",
				fr: "Regardez la main de votre adversaire. Si vous y trouvez des Bébés Pokémon et/ou des Pokémon de base, vous pouvez placer n'importe quel nombre d'entre eux sur le Banc de votre adversaire (tant qu'il n'est pas plein). Puis votre adversaire regarde votre main. S'il y trouve des Bébés Pokémon et/ou des Pokémon de base, votre adversaire peut placer n'importe quel nombre d'entre eux sur votre Banc (tant qu'il n'est pas plein).",
				de: "Look at your opponent's hand. If he or she has any Baby Pokémon and/or Basic Pokémon there, you may put any number of them onto your opponent's Bench (as long as there's room). Then, your opponent looks at your hand. If you have any Baby Pokémon and/or Basic Pokémon there, your opponent may put any number of them onto your Bench (as long as there's room)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Battle Frenzy",
				fr: "Frénésie du combat",
				de: "Battle Frenzy"
			},
			effect: {
				en: "For each Pokémon in play (yours and your opponent's), flip a coin. For each heads, this attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance for this attack.",
				fr: "Pour chaque Pokémon en jeu (ceux de votre adversaire et les vôtres), lancez une pièce. Pour chaque face, cette attaque inflige 20 dégâts à ce Pokémon. N'appliquez ni la Faiblesse ni la Résistance pour cette attaque.",
				de: "For each Pokémon in play (yours and your opponent's), flip a coin. For each heads, this attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance for this attack."
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

	description: {
		fr: "Son sens aiguisé de l'odorat détecte la moindre odeur, même celle de la nourriture quand elle est enfouie profondément."
	},

	thirdParty: {
		cardmarket: 274673
	}
}

export default card
