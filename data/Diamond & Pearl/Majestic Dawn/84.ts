import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Old Amber",
		fr: "Vieil Ambre",
		de: "Altbernstein"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	hp: 50,

	effect: {
		fr: "Jouez Vieil Ambre comme si c'était un Pokémon de base Colorless. ( Vieil Ambre compte aussi comme une carte Dresseur mais si  Vieil Ambre est mise K.O, elle compte comme un Pokémon K.O.)  Vieil Ambre ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser  Vieil Ambre. (Cela ne compte pas comme un Pokémon K.O).",
		de: "Spiele Altbernstein wie ein -Basis-Pokémon. (Altbernstein zählt gleichzeitig als Trainerkarte, aber wenn Altbernstein kanfunfähig wird, zählt es als kampfunfähiges Pokémon.) Altbernstein kann nicht von Speziellen Zuständen betroffen werden und sich nicht zurückziehen. In deinem Zug (vor deinem Angriff) kannst du Altbernstein auf deinen Ablagestapel legen. (Dies zählt nicht als kampfunfähig gemachtes Pokémon.)"
	},

	trainerType: "Item",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				de: "Gehärteter Bernstein",
				fr: "Ambre solide",
			},
			effect: {
				de: "Solange sich Altbernstein im Spiel befindet, verhindere allen Schaden, der Altbernstein durch Angriffe von Pokémon (deinen oder denen deines Gegners) zugefügt würden.",
				fr: "Tant que Vieil Ambre est sur votre Banc, prévenez tous les dégâts qui lui sont infligés par des attaques (les vôtres et celles de votre adversaire).",
			},
		},
	],

	thirdParty: {
		cardmarket: 278133,
		tcgplayer: 87848
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
