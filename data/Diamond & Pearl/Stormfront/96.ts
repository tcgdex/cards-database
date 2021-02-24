import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Dusknoir LV.X",
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
			},
			effect: {
				en: "If Dusknoir is your Active Pokémon and would be Knocked Out by damage from your opponent's attack, you may discard all cards attached to Dusknoir LV.X and put Dusknoir LV.X as a Stadium card into play instead of discarding it. This counts as Dusknoir being Knocked Out and your opponent takes a Prize card. As long as you have Dusknoir LV.X as a Stadium card in play, put 1 damage counter on each of your opponent's Pokémon between turns. If another Stadium card comes into play or Dusknoir LV.X is discarded by the effect of any attacks, Poké-Powers, Poké-Bodies, Trainer, or Supporter cards, return Dusknoir LV.X to your hand.",
				fr: "Si Noctunoir est votre Pokémon Actif et que les dégâts d'une attaque de votre adversaire le mettent K.O, vous pouvez défausser toutes les cartes attachées à Noctunoir NIV.X et placer Noctunoir NIV.X comme carte Stade en jeu au lieu de la défausser. Noctunoir est mis K.O et votre adversaire récolte une carte Récompense. Tant que Noctunoir NIV.X  comme carte Stade est en jeu, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire entre deux tours. Si une autre carte Stade entre en jeu ou si Noctunoir NIV.X est défaussé par l'effet d'attaques, Poké-Powers, Poké-Bodies, cartes Dresseur ou Supporter, reprenez Noctunoir NIV.X dans votre main.",
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
