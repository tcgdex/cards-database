import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Armor Fossil",
		fr: "Fossile armure",
		de: "Schildfossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 50,

	effect: {
		fr: "Jouez Fossile armure comme si c'était un Pokémon de base Colorless. (Fossile armure compte aussi comme une carte Dresseur mais si Fossile armure est mise K.O, elle compte comme un Pokémon K.O). Fossile armure ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile armure. (Cela ne compte pas comme un Pokémon K.O.)",
		de: "Play Armor Fossil as if it were a  Basic Pokémon. (Armor Fossil counts as a Trainer card as well, but if Armor Fossil is Knocked Out, this counts as a Knocked Out Pokémon.) Armor Fossil can't be affected by any Special Conditions and can't retreat. At any time during your turn before your attack, you may discard Armor Fossil from play. (This doesn't count as a Knocked Out Pokémon.)"
	},

	trainerType: "Item",

	abilities: [{
		type: 'Poke-BODY',
		name: {
			de: "Armor Stone"
		},

		effect: {
			de: "Whenever Armor Fossil would be damaged by your opponent's attack, flip a coin until you get tails. For each heads, reduce that damage by 10."
		}
	}],

	thirdParty: {
		cardmarket: 278540,
		tcgplayer: 83626
	}
}

export default card
