import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Venusaur",
		'fr-fr': "Florizarre",
		'es-es': "Venusaur",
		'it-it': "Venusaur",
		'de-de': "Bisaflor",
		'pt-br': "Venusaur",
		'ko-kr': "이상해꽃"
	},

	illustrator: "Kuroimori",
	rarity: "None",
	category: "Pokemon",

	dexId: [3],
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Mega Drain",
			'fr-fr': "Méga-Sangsue",
			'es-es': "Megaagotar",
			'it-it': "Megassorbimento",
			'de-de': "Megasauger",
			'pt-br': "Megadreno",
			'ko-kr': "메가드레인"
		},

		cost: ["Grass", "Grass", "Colorless", "Colorless"],
		damage: 80,

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'ko-kr': "이 포켓몬의 HP를 30회복."
		}
	}],

	hp: 160,

	evolveFrom: {
		'en-us': "Ivysaur"
	},

	description: {
		'en-us': "Its plant blooms when it is absorbing solar\nenergy. It stays on the move to seek sunlight.",
		'fr-fr': "Sa plante donne une grosse fleur quand\nelle absorbe les rayons du soleil. Il est toujours\nà la recherche des endroits les plus ensoleillés.",
		'es-es': "La planta florece cuando absorbe energía solar,\nlo cual le obliga a buscar siempre la luz del sol.",
		'it-it': "Il fiore sboccia assorbendo energia solare.\nSi muove continuamente in cerca di luce.",
		'de-de': "Es nutzt Solarenergie als Nahrung und\nbringt so seine große Blume zum Blühen.\nEs geht dorthin, wo die Sonne scheint.",
		'pt-br': "Sua planta floresce ao absorver energia solar,\npor isso este Pokémon vive em busca da luz do sol.",
		'ko-kr': "태양에너지를 양분으로\n큰 꽃을 피운다. 양지를 향해\n이끌려가듯이 이동한다."
	},

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["vol2"]
}

export default card
