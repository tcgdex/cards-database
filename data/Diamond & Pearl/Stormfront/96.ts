import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
		de: "Zwirrfinst"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		477,
	],
	hp: 140,
	types: [
		"Psychic",
	],
	evolveFrom: {
		fr: "Noctunoir LV.X",
	},
	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Ectoplasm",
				fr: "Ectoplasme",
				de: "Ektoplasma"
			},
			effect: {
				en: "If Dusknoir is your Active Pokémon and would be Knocked Out by damage from your opponent's attack, you may discard all cards attached to Dusknoir LV.X and put Dusknoir LV.X as a Stadium card into play instead of discarding it. This counts as Dusknoir being Knocked Out and your opponent takes a Prize card. As long as you have Dusknoir LV.X as a Stadium card in play, put 1 damage counter on each of your opponent's Pokémon between turns. If another Stadium card comes into play or Dusknoir LV.X is discarded by the effect of any attacks, Poké-Powers, Poké-Bodies, Trainer, or Supporter cards, return Dusknoir LV.X to your hand.",
				fr: "Si Noctunoir est votre Pokémon Actif et que les dégâts d'une attaque de votre adversaire le mettent K.O, vous pouvez défausser toutes les cartes attachées à Noctunoir NIV.X et placer Noctunoir NIV.X comme carte Stade en jeu au lieu de la défausser. Noctunoir est mis K.O et votre adversaire récolte une carte Récompense. Tant que Noctunoir NIV.X comme carte Stade est en jeu, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire entre deux tours. Si une autre carte Stade entre en jeu ou si Noctunoir NIV.X est défaussé par l'effet d'attaques, Poké-Powers, Poké-Bodies, cartes Dresseur ou Supporter, reprenez Noctunoir NIV.X dans votre main.",
				de: "Wenn Zwirrfinst LV.X dein aktives Pokémon ist und durch Schaden eines gegnerischen Angriffs kampfunfähig würde, kannst du alle an Zwirrfinst LV.X angelegten Karten auf den Ablagestapel legen und Zwirrfinst LV.X als Stadion-Karte spielen, anstelle es auf den Ablagestapel zu legen. Dies zählt trotzdem als kampfunfähig gemachtes Pokémon und dein Gegner nimmt 1 Preis.Solange Zwirrfinst Lv.x als Stadion-Karte im Spiel ist, lege zwischen den Zügen 1 Schadensmarke auf jedes Pokémon deines Gegners. Sobald eine weitere Stadion-Karte ins Spiel kommt, oder Zwirrfinst LV.X durch den Effekt eines Angriff, einer Poké-Power.Poké-Body, Trainer- oder Unterstützerkarte auf den Ablagestapel gelegt werden soll, nimm Zwirrfinst Lv.x wieder auf die Hand."
			},
		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
