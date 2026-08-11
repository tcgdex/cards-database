import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [310],
	set: Set,

	name: {
		'en-us': "Manectric",
		'fr-fr': "Élecsprint",
		'es-es': "Manectric",
		'it-it': "Manectric",
		'pt-br': "Manectric",
		'de-de': "Voltenso"
	},

	illustrator: "GIDORA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'es-es': "Electrike",
		'it-it': "Electrike",
		'pt-br': "Electrike",
		'de-de': "Frizelbliz"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Assault Laser",
			'fr-fr': "Laser d'Assaut",
			'es-es': "Láser de Asalto",
			'it-it': "Laserassalto",
			'pt-br': "Laser de Ataque",
			'de-de': "Offensiv-Laser"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon has a Pokémon Tool attached, this attack does 80 more damage.",
			'fr-fr': "Si un Outil Pokémon est attaché au Pokémon Actif de votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival tiene 1 Herramienta Pokémon unida a él, este ataque hace 80 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha una carta Oggetto Pokémon assegnata, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver 1 Ferramenta Pokémon ligada a ele, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn an das Aktive Pokémon deines Gegners eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674065,
				tcgplayer: 283929
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674065,
				tcgplayer: 283929
			}
		},
	],
}

export default card
