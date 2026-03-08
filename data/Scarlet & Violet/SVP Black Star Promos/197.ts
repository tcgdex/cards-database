import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1007],
	set: Set,

	name: {
		en: "Koraidon ex",
		fr: "Koraidon-ex",
		de: "Koraidon-ex",
		es: "Koraidon ex",
		it: "Koraidon-ex",
		pt: "Koraidon ex"
	},


	illustrator: "PLANETA Tsuji",

	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			de: "Klauenschlitzer",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Revenge Buster",
			fr: "Buster Vengeur",
			de: "Vergeltungsschlag",
			es: "Venganza Destructora",
			it: "Vendetta Distruttiva",
			pt: "Vingança Aniquiladora"
		},

		effect: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 120 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 120 dégâts supplémentaires.",
			de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 120 puntos de daño más.",
			it: "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 120 danni in più.",
			pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 120 pontos de dano a mais."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card