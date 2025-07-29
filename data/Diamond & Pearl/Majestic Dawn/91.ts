import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Helix Fossil",
		fr: "Fossile Nautile",
		de: "Helixfossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 50,

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				fr: "Aqua réaction",
				de: "Aqua-Reaktion"
			},
			effect: {
				fr: "Lorsque vous attachez une carte Énergie Eau de votre main à Fossile Nautile (effets d'attaques et Poké-Powers exclus), cherchez dans votre deck une carte qui évolue de Fossile Nautile et placez-la sur Fossile Nautile (vous le faites ainsi évoluer), Ensuite, mélangez votre deck.",
				de: "Wenn du 1 -Energiekarte von deiner Hand an Helixfossil anlegst (ausgenommen durch Effekte von Angriffen oder Poké-Powern), durchsuche dein Deck nach einer Karte, die sich aus Helixfossil entwickelt, und lege diese auf Helixfossil (dies zählt als Entwickeln von Helixfossil). Mische dein Deck danach."
			},
		},
	],

	effect: {
		fr: "Jouez Fossile Nautile comme si c'était un Pokémon de base Colorless. (Fossile Nautile compte aussi comme une carte Dresseur mais si Fossile Nautile est mise K.O, elle compte comme un Pokémon K.O.) Fossile Nautile ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile Nautile. (Cela ne compte pas comme un Pokémon K.O).",
		de: "Spiele Helixfossil wie ein -Basis-Pokémon. (Helixfossil zählt gleichzeitig als Trainerkarte, aber wenn Helixfossil kampfunfähig wird, zählt es als kampfunfähiges Pokémon.) Helixfossil kann nicht von Speziellen Zuständen betroffen werden und sich nicht zurückziehen. In deinem Zug (vor deinem Angriff) kannst du Helixfossil auf deinen Ablagestapel legen. (Dies zählt nicht als kampfunfähig gemachtes Pokémon.)"
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278140
	}
}

export default card
