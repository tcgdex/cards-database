import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [68],
	set: Set,

	name: {
		'en-us': "Machamp VMAX",
		'fr-fr': "Mackogneur VMAX",
		'es-es': "Machamp VMAX",
		'it-it': "Machamp VMAX",
		'pt-br': "Machamp VMAX",
		'de-de': "Machomei VMAX"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Machamp V",
		'fr-fr': "Mackogneur-V",
		'es-es': "Machamp V",
		'it-it': "Machamp-V",
		'pt-br': "Machamp V",
		'de-de': "Machomei-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Revenge Buster",
			'fr-fr': "Buster Vengeur",
			'es-es': "Venganza Destructora",
			'it-it': "Vendetta Distruttiva",
			'pt-br': "Vingança Aniquiladora",
			'de-de': "Vergeltungsschlag"
		},

		effect: {
			'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 140 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 140 dégâts supplémentaires.",
			'es-es': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 140 puntos de daño más.",
			'it-it': "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 140 danni in più.",
			'pt-br': "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 140 pontos de dano a mais.",
			'de-de': "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 140 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "G-Max Chi Strike",
			'fr-fr': "Frappe G-Max",
			'es-es': "Gigapuñición",
			'it-it': "Gigapugnointuito",
			'pt-br': "Golpe Chi G-Max",
			'de-de': "Giga-Fokusschlag"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use G-Max Chi Strike.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Frappe G-Max.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Gigapuñición.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Gigapugnointuito.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Chi G-Max.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Giga-Fokusschlag nicht einsetzen."
		},

		damage: 240
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658665,
				tcgplayer: 272274
			}
		},
	],
}

export default card
