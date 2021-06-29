import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Dragapult V",
		fr: "Lanssorien V",
		es: "Dragapult V",
		it: "Dragapult V",
		pt: "Dragapult V",
		de: "Katapuldra V"
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
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Jet Assault",
				fr: "Assaut Propulsé",
				es: "Asalto Propulsión",
				it: "Assalto Jet",
				pt: "Ofensiva a Jato",
				de: "Jet-Angriff"
			},
			effect: {
				en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 80 more damage.",
				fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 80 puntos de daño más.",
				it: "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 80 danni in più.",
				pt: "Se este Pokémon foi movido do seu Banco para o Campo Ativo durante este turno, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
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
	regulationMark: "D"
}

export default card
