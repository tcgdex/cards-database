import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		'fr-fr': "Gorythmic VMAX",
		'en-us': "Rillaboom VMAX",
		'es-es': "Rillaboom VMAX",
		'it-it': "Rillaboom VMAX",
		'pt-br': "Rillaboom VMAX",
		'de-de': "Gortrom VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Gorythmic-V",
		'en-us': "Rillaboom V"
	},

	attacks: [{
		name: {
			'fr-fr': "Griffe",
			'en-us': "Scratch",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'de-de': "Kratzer"
		},

		damage: 50,
		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Battromax",
			'en-us': "Max Beating",
			'es-es': "Maxipercusión",
			'it-it': "Dynapercossa",
			'pt-br': "Batidão Max",
			'de-de': "Dyna-Schläge"
		},

		effect: {
			'fr-fr': "Vous pouvez défausser jusqu'à 3 Énergies Grass de ce Pokémon. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'en-us': "You may discard up to 3 Grass Energy from this Pokémon. If you do, this attack does 50 more damage for each card you discarded in this way.",
			'es-es': "Puedes descartar hasta 3 Energías Grass de este Pokémon. Si lo haces, este ataque hace 50 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'it-it': "Puoi scartare fino a tre Energie Grass da questo Pokémon. Se lo fai, questo attacco infligge 50 danni in più per ogni carta che hai scartato in questo modo.",
			'pt-br': "Você pode descartar até 3 Energias Grass deste Pokémon. Se fizer isto, este ataque causará 50 pontos de dano a mais para cada carta descartada desta forma.",
			'de-de': "Du kannst bis zu 3 Grass-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke für jede auf diese Weise abgelegte Karte 50 Schadenspunkte mehr zu."
		},

		damage: "130+",
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539918,
				tcgplayer: 232495
			}
		},
	],
}

export default card
