import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Crystal Beach",
		fr: "Plage de cristal",
		de: "Kristallstrand"
	},

	illustrator: "Shizurow",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each Special Energy card that provides 2 or more Energy (both yours and your opponent's) now provides only 1 Colorless Energy. This isn't affected by any Poké-Powers or Poké-Bodies.",
		fr: "Chaque carte Énergie spéciale fournissant 2 Énergies ou plus (les vôtres et celles de votre adversaire) fournit maintenant 1 Énergie Incolore uniquement. Cet effet n'est pas affecté par les Poké-Powers ou les Poké-Bodies.",
		de: "Jede Spezialenergiekarte, die 2 oder mehr Energie liefert (deine und die deines Gegners), liefert jetzt nur noch 1  Energie, Poké-Power und Poké-Body haben keine Einfluss hierauf.",
	},

	thirdParty: {
		cardmarket: 277156,
		tcgplayer: 84516
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
