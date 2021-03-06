import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Helix Fossil",
		fr: "Fossile Nautile",
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
			},
			effect: {
				fr: "Lorsque vous attachez une carte Énergie Eau de votre main à Fossile Nautile (effets d'attaques et Poké-Powers exclus), cherchez dans votre deck une carte qui évolue de Fossile Nautile et placez-la sur Fossile Nautile (vous le faites ainsi évoluer), Ensuite, mélangez votre deck.",
			},
		},
	],




	effect: {
		fr: "Jouez Fossile Nautile comme si c'était un Pokémon de base Colorless. (Fossile Nautile compte aussi comme une carte Dresseur mais si Fossile Nautile est mise K.O, elle compte comme un Pokémon K.O.) Fossile Nautile ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile Nautile. (Cela ne compte pas comme un Pokémon K.O).",
	},
	trainerType: "Item",

}

export default card
