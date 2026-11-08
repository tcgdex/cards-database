import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [185],
	set: Set,

	name: {
		'en-us': "Sudowoodo",
		'fr-fr': "Simularbre",
		'es-es': "Sudowoodo",
		'it-it': "Sudowoodo",
		'pt-br': "Sudowoodo",
		'de-de': "Mogelbaum"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Vamoose",
			'fr-fr': "Sauve-qui-Peut",
			'es-es': "Largarse",
			'it-it': "Taglia la Corda",
			'pt-br': "Vambora",
			'de-de': "Verduften"
		},

		effect: {
			'en-us': "If this Pokémon has any damage counters on it, it has no Retreat Cost.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, il n'a pas de Coût de Retraite.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, no tiene ningún Coste de Retirada.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, non ha costo di ritirata.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, não terá custo de Recuo.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Double-Edge",
			'fr-fr': "Damoclès",
			'es-es': "Doble Filo",
			'it-it': "Sdoppiatore",
			'pt-br': "Faca de Dois Gumes",
			'de-de': "Risikotackle"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Though it pretends to be a tree, it fails to fool even children. To the touch, its body feels more like rock than tree bark. Sudowoodo's extreme aversion to water merits special note.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658669,
				tcgplayer: 272275
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658669,
				tcgplayer: 272275
			}
		},
	],
}

export default card
