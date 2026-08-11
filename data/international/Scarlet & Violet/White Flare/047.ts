import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [525],
	set: Set,

	name: {
		'en-us': "Boldore",
		'fr-fr': "Géolithe",
		'de-de': "Sedimantur",
		'it-it': "Boldore",
		'pt-br': "Boldore",
		'es-es': "Boldore",
		'es-mx': "Boldore"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Roggenrola",
		'fr-fr': "Nodulithe",
		'de-de': "Kiesling",
		'it-it': "Roggenrola",
		'pt-br': "Roggenrola",
		'es-es': "Roggenrola",
		'es-mx': "Roggenrola"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Smack Down",
			'fr-fr': "Anti-Air",
			'de-de': "Katapult",
			'it-it': "Abbattimento",
			'pt-br': "Derrubada",
			'es-es': "Antiaéreo",
			'es-mx': "Antiaéreo"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon has {F} Resistance, this attack does 50 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a une Résistance à {F}, cette attaque inflige 50 dégâts supplémentaires.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners {F}-Resistenz hat, fügt diese Attacke 50 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha resistenza al tipo {F}, questo attacco infligge 50 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver Resistência {F}, este ataque causará 50 pontos de dano a mais.",
			'es-es': "Si el Pokémon Activo de tu rival tiene Resistencia a {F}, este ataque hace 50 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival tiene Resistencia a {F}, este ataque hace 50 puntos de daño más."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Power Gem",
			'fr-fr': "Rayon Gemme",
			'de-de': "Juwelenkraft",
			'it-it': "Gemmoforza",
			'pt-br': "Gema Poderosa",
			'es-es': "Joya de Luz",
			'es-mx': "Joya de Luz"
		},

		damage: 90
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835987,
				tcgplayer: 642159
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835987,
				tcgplayer: 642159
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836577,
				tcgplayer: 642401
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836578,
				tcgplayer: 642329
			}
		},
	],
}

export default card
