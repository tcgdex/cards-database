import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Skull Fossil",
		fr: "Fossile crâne",
		de: "Kopffossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 50,

	effect: {
		fr: "Jouez Fossile crâne comme si c'était un Pokémon de base Colorless. (Fossile crâne compte aussi comme une carte Dresseur mais si Fossile crâne est mise K.O, elle compte comme un Pokémon K.O). Fossile crâne ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile crâne. (Cela ne compte pas comme un Pokémon K.O.)",
		de: "Play Skull Fossil as if it were a  Basic Pokémon. (Skull Fossil counts as a Trainer card as well, but if Skull Fossil is Knocked Out, this counts as a Knocked Out Pokémon.) Skull Fossil can't be affected by any Special Conditions and can't retreat. At any time during your turn before your attack, you may discard Skull Fossil from play. (This doesn't count as a Knocked Out Pokémon.)"
	},

	trainerType: "Item",

	abilities: [{
		type: 'Poke-BODY',
		name: {
			de: "Skull Stone"
		},

		effect: {
			de: "During your opponent's turn, if Skull Fossil would be Knocked Out by damage from an opponent's attack, flip a coin until you get tails. For each heads, put 1 damage counter on the Attacking Pokémon."
		}
	}],

	thirdParty: {
		cardmarket: 278541
	}
}

export default card
