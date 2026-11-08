import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Kyurem",
		'fr-fr': "Kyurem",
		'es-es': "Kyurem",
		'it-it': "Kyurem",
		'pt-br': "Kyurem",
		'de-de': "Kyurem"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "Souichirou Gunjima",

	attacks: [{
		name: {
			'en-us': "Extreme Freeze",
			'fr-fr': "Givre Extrême",
			'es-es': "Congelación Extrema",
			'it-it': "Freddo Estremo",
			'pt-br': "Extreme Freeze",
			'de-de': "Extremfrost"
		},

		effect: {
			'en-us': "Discard any amount of Water Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez autant d'Énergies Water que vous le voulez de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta cualquier cantidad de Energías Water de tus Pokémon. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			'it-it': "Scarta tutte le Energie Water che vuoi dai tuoi Pokémon. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Discard any amount of Water Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way.",
			'de-de': "Lege beliebig viele Water-Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu."
		},

		damage: "60×",
		cost: ["Water", "Water", "Metal"]
	}],

	retreat: 2,
	dexId: [646],

	description: {
		'en-us': "It generates a powerful, freezing energy inside itself, but its body became frozen when the energy leaked out."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574164,
				tcgplayer: 246914
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574164,
				tcgplayer: 246914
			}
		},
	],
}

export default card
