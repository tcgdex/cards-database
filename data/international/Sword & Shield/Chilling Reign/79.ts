import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [865],
	set: Set,

	name: {
		'en-us': "Galarian Sirfetch'd",
		'fr-fr': "Palarticho de Galar",
		'es-es': "Sirfetch'd de Galar",
		'it-it': "Sirfetch'd di Galar",
		'pt-br': "Sirfetch'd de Galar",
		'de-de': "Galar-Lauchzelot"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Galarian Farfetch'd",
		'fr-fr': "Canarticho de Galar",
		'es-es': "Farfetch'd de Galar",
		'it-it': "Farfetch'd di Galar",
		'pt-br': "Farfetch'd de Galar",
		'de-de': "Galar-Porenta"
	},

	attacks: [{
		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Leek Strike",
			'fr-fr': "Coup de Poireau",
			'es-es': "Impacto Puerro",
			'it-it': "Gamboattacco",
			'pt-br': "Pancada Alho-poró",
			'de-de': "Lauchstreich"
		},

		effect: {
			'en-us': "If this Pokémon has a Pokémon Tool attached, this attack does 90 more damage, and this attack's damage isn't affected by Resistance.",
			'fr-fr': "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 90 dégâts supplémentaires et les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 90 puntos de daño más, y el daño de este ataque no se ve afectado por Resistencia. ",
			'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 90 danni in più e i suoi danni non sono influenzati dalla resistenza. ",
			'pt-br': "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 90 pontos de dano a mais, e o dano deste ataque não será afetado por Resistência. ",
			'de-de': "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 90 Schadenspunkte mehr zu und der Schaden dieser Attacke wird durch Resistenz nicht verändert. "
		},

		damage: "70+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "After deflecting attacks with its hard leaf shield, it strikes back with its sharp leek stalk. The leek stalk is both weapon and food."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567187,
				tcgplayer: 241744
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567187,
				tcgplayer: 241744
			}
		},
	],
}

export default card
