import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [887],

	name: {
		'en-us': "Dragapult V",
		'fr-fr': "Lanssorien V",
		'es-es': "Dragapult V",
		'it-it': "Dragapult V",
		'pt-br': "Dragapult V",
		'de-de': "Katapuldra V"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Jet Assault",
				'fr-fr': "Assaut Propulsé",
				'es-es': "Asalto Propulsión",
				'it-it': "Assalto Jet",
				'pt-br': "Ofensiva a Jato",
				'de-de': "Jet-Angriff"
			},
			effect: {
				'en-us': "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 80 more damage.",
				'fr-fr': "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 80 puntos de daño más.",
				'it-it': "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 80 danni in più.",
				'pt-br': "Se este Pokémon foi movido do seu Banco para o Campo Ativo durante este turno, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 210,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 458288,
				tcgplayer: 213179
			}
		},
	],
}

export default card
