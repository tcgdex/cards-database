import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Kyurem",
		fr: "Kyurem",
		es: "Kyurem",
		it: "Kyurem",
		pt: "Kyurem",
		de: "Kyurem"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "Souichirou Gunjima",

	attacks: [{
		name: {
			en: "Extreme Freeze",
			fr: "Givre Extrême",
			es: "Congelación Extrema",
			it: "Freddo Estremo",
			pt: "Extreme Freeze",
			de: "Extremfrost"
		},

		effect: {
			en: "Discard any amount of Water Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way.",
			fr: "Défaussez autant d’Énergies Water que vous le voulez de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			es: "Descarta cualquier cantidad de Energías Water de tus Pokémon. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Scarta tutte le Energie Water che vuoi dai tuoi Pokémon. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			pt: "Discard any amount of Water Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way.",
			de: "Lege beliebig viele Water-Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu."
		},

		damage: "60×",
		cost: ["Water", "Water", "Metal"]
	}],

	retreat: 2
}

export default card