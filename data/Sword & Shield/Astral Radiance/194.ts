import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Machamp VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machamp V",
		fr: "Mackogneur-V",
		es: "Machamp V",
		it: "Machamp-V",
		pt: "Machamp V",
		de: "Machomei-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Revenge Buster",
			fr: "Buster Vengeur",
			es: "Venganza Destructora",
			it: "Vendetta Distruttiva",
			pt: "Vingança Aniquiladora",
			de: "Vergeltungsschlag"
		},

		effect: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 140 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 140 dégâts supplémentaires.",
			es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 140 puntos de daño más.",
			it: "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 140 danni in più.",
			pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 140 pontos de dano a mais.",
			de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 140 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "G-Max Chi Strike",
			fr: "Frappe G-Max",
			es: "Gigapuñición",
			it: "Gigapugnointuito",
			pt: "Golpe Chi G-Max",
			de: "Giga-Fokusschlag"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use G-Max Chi Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Frappe G-Max.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Gigapuñición.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Gigapugnointuito.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Chi G-Max.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Giga-Fokusschlag nicht einsetzen."
		},

		damage: 240
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card