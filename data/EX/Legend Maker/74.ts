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
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nPlacez 4 marqueurs de dégât au lieu de 2 sur chaque Pokémon Brûlé entre deux tours. L'État Spécial Brûlé ne peut pas être retiré en faisant évoluer ou en dés-évoluant le Pokémon Brûlé.",
		de: "Zwischen den Zügen lege 4 Schadensmarken anstelle von 2 Schadensmarken auf Pokémon, die verbrannt sind. Der Spezielle Zustand verbrannt kann nicht mehr durch Entwickeln oder Rückentwickeln entfernt werden."
	},

	thirdParty: {
		cardmarket: 276951,
		tcgplayer: 85579
	}
}

export default card
