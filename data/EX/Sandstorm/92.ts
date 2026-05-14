import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Root Fossil",
		fr: "Fossile racine",
		de: "Wurzelfossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 40,
	trainerType: "Item",

	effect: {
		en: "Play Root Fossil as if it were a Basic Pokémon. While in play, Root Fossil counts as a Colorless Pokémon (instead of a Trainer card). Root Fossil has no attacks of its own, can't retreat, and can't be affected by any Special Conditions. If Root Fossil is Knocked Out, it doesn't count as a Knocked Out Pokémon. (Discard it anyway.) At any time during your turn before your attack, you may discard Root Fossil from play.",
		fr: "Jouez Fossile racine comme si c'était un Pokémon de base. Lorsqu'elle est en jeu, Fossile racine est un Pokémon  (et non une carte Dresseur). Elle ne possède pas d'attaque, ne peut pas battre en retraite et ne peut pas être affectée par un État Spécial. Si Fossile racine est mise K.O, elle n'est pas considérée comme un Pokémon K.O (mais défaussez-la quand même). N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile racine.",
		de: "Spiele Wurzelfossil wie ein Basis-Pokémon. Während Wurzelfossil im Spiel ist, zählt es als -Pokémon (anstatt einer Trainerkarte). Wurzelfossil hat keine Angriffe, kann sich nicht zurückziehen und wird nicht von Speziellen Zuständen betroffen. Falls Wurzelfossil kampfunfähig gemacht wird, zählt es nicht als kampfunfähig gemachtes Pokémon (lege es trotzdem ab). Jederzeit während deines Zuges vor deinem Angriff kannst du Wurzelfossil aus dem Spiel ablegen."
	},

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				de: "Schwammiger Stein",
				fr: "Pierre spongieuse",
			},
			effect: {
				de: "Entferne zu einem beliebigen Zeitpunkt zwischen zwei Zügen 1 Schadensmarke von Wurzelfossil.",
				fr: "N'importe quand entre deux tours, retirez à Fossile racine un marqueur de dégât.",
			},
		},
	],

	thirdParty: {
		cardmarket: 275869,
		tcgplayer: 88810
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
