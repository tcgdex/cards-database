import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Gouging Fire ex",
		fr: "Feu-Perçant-ex",
		es: "Flamariete ex",
		it: "Vampeaguzze-ex",
		pt: "Fogo Corrosão ex",
		de: "Keilflamme-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
			es: "Explosión de Calor",
			it: "Caldobomba",
			pt: "Raio de Calor",
			de: "Hitzestoß"
		},

		damage: 60
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Blaze Blitz",
			fr: "Assaut Flamboyant",
			es: "Envite Llameante",
			it: "Carica Infuocata",
			pt: "Avanço Incendiário",
			de: "Feuerblitz"
		},

		effect: {
			en: "This Pokémon can't use Blaze Blitz again until it leaves the Active Spot.",
			fr: "Ce Pokémon ne peut pas réutiliser Assaut Flamboyant tant qu'il ne quitte pas le Poste Actif.",
			es: "Este Pokémon no puede usar Envite Llameante de nuevo hasta que deje el Puesto Activo.",
			it: "Questo Pokémon non può più usare Carica Infuocata finché non lascia la posizione attiva.",
			pt: "Este Pokémon não poderá usar Avanço Incendiário novamente até sair do Campo Ativo.",
			de: "Dieses Pokémon kann Feuerblitz nicht wieder einsetzen, bis es die Aktive Position verlässt."
		},

		damage: 260
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "PLANETA Mochizuki"
}

export default card