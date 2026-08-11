import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1007],
	set: Set,

	name: {
		'en-us': "Koraidon ex",
		'fr-fr': "Koraidon-ex",
		'de-de': "Koraidon-ex",
		'es-es': "Koraidon ex",
		'it-it': "Koraidon-ex",
		'pt-br': "Koraidon ex"
	},


	suffix: "ex",
	illustrator: "PLANETA Tsuji",

	rarity: "Promo",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'de-de': "Klauenschlitzer",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Revenge Buster",
			'fr-fr': "Buster Vengeur",
			'de-de': "Vergeltungsschlag",
			'es-es': "Venganza Destructora",
			'it-it': "Vendetta Distruttiva",
			'pt-br': "Vingança Aniquiladora"
		},

		effect: {
			'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 120 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 120 dégâts supplémentaires.",
			'de-de': "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'es-es': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 120 puntos de daño más.",
			'it-it': "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 120 danni in più.",
			'pt-br': "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 120 pontos de dano a mais."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "H",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 813956,
				tcgplayer: 634348
			},
		}
	],
}

export default card
