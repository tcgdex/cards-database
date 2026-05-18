import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Full Flame",
		fr: "Flamme maximale",
		de: "Volle Flamme"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Put 4 damage counters instead of 2 on each Burned Pokémon between turns. The Special Condition Burned can't be removed by evolving or devolving the Burned Pokémon.",
		fr: "Placez 4 marqueurs de dégât au lieu de 2 sur chaque Pokémon Brûlé entre deux tours. L'État Spécial Brûlé ne peut pas être retiré en faisant évoluer ou en dés-évoluant le Pokémon Brûlé.",
		de: "Zwischen den Zügen lege 4 Schadensmarken anstelle von 2 Schadensmarken auf Pokémon, die verbrannt sind. Der Spezielle Zustand verbrannt kann nicht mehr durch Entwickeln oder Rückentwickeln entfernt werden.",
	},

	thirdParty: {
		cardmarket: 276951,
		tcgplayer: 85579
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"]
		}
	]
}

export default card
