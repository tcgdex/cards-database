import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Skull Fossil",
		fr: "Fossile Crâne",
		de: "Kopffossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 50,

	effect: {
		en: "Play Skull Fossil as if it were a Colorless Basic Pokémon. (Skull Fossil counts as a Trainer card as well, but if Skull Fossil is Knocked Out, this counts as a Knocked Out Pokémon.) Skull Fossil can't be affected by any Special Conditions and can't retreat. At any time during your turn before your attack, you may discard Skull Fossil from play. (This doesn't count as a Knocked Out Pokémon.)",
		fr: "Jouez Fossile crâne comme si c'était un Pokémon de base Colorless. (Fossile crâne compte aussi comme une carte Dresseur mais si Fossile crâne est mise K.O, elle compte comme un Pokémon K.O). Fossile crâne ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile crâne. (Cela ne compte pas comme un Pokémon K.O.)",
		de: "Spiele Kopffossil wie ein {C}-Basis-Pokémon. (Kopffossil zählt gleichzeitig als Trainerkarte, aber wenn Kopffossil kampfunfähig wird, zählt es als kampfunfähig gemachtes Pokémon.) Kopffossil kann nicht von Speziellen Zuständen betroffen werden und sich nicht zurückziehen. In deinem Zug (vor deinem Angriff) kannst du Kopffossil auf deinen Ablagestapel legen. (Dies zählt nicht als kampfunfähig gemachtes Pokémon.)"
	},

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Skull Stone",
				de: "Schädelstein"
			},
			effect: {
				en: "During your opponent's turn, if Skull Fossil would be Knocked Out by damage from an opponent's attack, flip a coin until you get tails. For each heads, put 1 damage counter on the Attacking Pokémon.",
				de: "Wenn Kopffossil im Zug deines Gegners durch Schaden eines Angriffs deines Gegners kampfunfähig würde, wirf 1 Münze, bis zum ersten Mal das Ergebnis „Zahl“ kommt. Lege für jedes Mal, wenn die Münze „Kopf“ gezeigt hat, 1 Schadensmarke auf das Angreifende Pokémon."
			}
		},
	],
	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89278,
				cardmarket: 278541
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278541,
				tcgplayer: 89278
			}
		}
	],

	retreat: 0
}

export default card
