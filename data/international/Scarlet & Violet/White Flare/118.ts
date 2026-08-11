import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [618],
	set: Set,

	name: {
		'en-us': "Stunfisk",
		'fr-fr': "Limonde",
		'de-de': "Flunschlik",
		'it-it': "Stunfisk",
		'pt-br': "Stunfisk",
		'es-es': "Stunfisk",
		'es-mx': "Stunfisk"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Muddy Bolt",
			'fr-fr': "Éclair Boueux",
			'de-de': "Schlammblitz",
			'it-it': "Fangofulmine",
			'pt-br': "Raio Lamacento",
			'es-es': "Rayo Lodoso",
			'es-mx': "Rayo Lodoso"
		},

		effect: {
			'en-us': "If this Pokémon has any {F} Energy attached, this attack does 20 more damage.",
			'fr-fr': "Si au moins une Énergie {F} est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 {F}-Energie angelegt ist, fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon ha delle Energie {F} assegnate, questo attacco infligge 20 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia {F} ligada a ele, este ataque causará 20 pontos de dano a mais.",
			'es-es': "Si este Pokémon tiene alguna Energía {F} unida, este ataque hace 20 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene alguna Energía {F} unida, este ataque hace 20 puntos de daño más."
		},

		damage: "20+"
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Flop",
			'fr-fr': "Flop",
			'de-de': "Plumps",
			'it-it': "Tonfo",
			'pt-br': "Baque",
			'es-es': "Vuelta",
			'es-mx': "Desplome"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836130,
			tcgplayer: 642230
		}
	},
],
}

export default card
