import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Double Rainbow Energy",
		fr: "Double Énergie Multicolore",
		de: "Doppel-Regenbogen-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Double Rainbow Energy can be attached only to an Evolved Pokémon (excluding Pokémon-ex). While in play, Double Rainbow Energy provides every type of Energy but provides 2 Energy at a time. (Doesn't count as a basic Energy when not in play and has no effect other than providing Energy.) Damage done to your opponent's Pokémon by the Pokémon Double Rainbow Energy is attached to is reduced by 10 (after applying Weakness and Resistance). When the Pokémon Double Rainbow Energy is attached to is no longer an Evolved Pokémon, discard Double Rainbow Energy.",
		de: "Doppel-Regenbogen-Energie kann nur an ein entwickeltes Pokémon (außer Pokémon-ex) angelegt werden. Während Doppel-Regenbogen-Energie im Spiel ist, zählt sie als jeder beliebige Energietyp, spendet aber zwei Energien auf einmal. (Sie hat keinen Effekt, außer dass sie Energie spendet.) Schaden, der gegnerischen Pokémon durch Angriffe des Pokémon, an dem Doppel-Regenbogen-Energie angelegt ist, zugefügt wird, wird um 10 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet wurden.). Handelt es sich bei dem Pokémon, an dem Doppel-Regenbogen-Energie angelegt ist, nicht mehr um ein entwickeltes Pokémon, lege Doppel-Regenbogen-Energie auf deinen Ablagestapel."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275865,
				tcgplayer: 84895
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275865,
				tcgplayer: 84895
			}
		},
	],

	retreat: 0
}

export default card
