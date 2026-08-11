import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1020],
	set: Set,

	name: {
		'en-us': "Gouging Fire ex",
		'fr-fr': "Feu-Perçant-ex",
		'es-es': "Flamariete ex",
		'it-it': "Vampeaguzze-ex",
		'pt-br': "Fogo Corrosão ex",
		'de-de': "Keilflamme-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur",
			'es-es': "Explosión de Calor",
			'it-it': "Caldobomba",
			'pt-br': "Raio de Calor",
			'de-de': "Hitzestoß"
		},

		damage: 60
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Blaze Blitz",
			'fr-fr': "Assaut Flamboyant",
			'es-es': "Envite Llameante",
			'it-it': "Carica Infuocata",
			'pt-br': "Avanço Incendiário",
			'de-de': "Feuerblitz"
		},

		effect: {
			'en-us': "This Pokémon can't use Blaze Blitz again until it leaves the Active Spot.",
			'fr-fr': "Ce Pokémon ne peut pas réutiliser Assaut Flamboyant tant qu'il ne quitte pas le Poste Actif.",
			'es-es': "Este Pokémon no puede usar Envite Llameante de nuevo hasta que deje el Puesto Activo.",
			'it-it': "Questo Pokémon non può più usare Carica Infuocata finché non lascia la posizione attiva.",
			'pt-br': "Este Pokémon não poderá usar Avanço Incendiário novamente até sair do Campo Ativo.",
			'de-de': "Dieses Pokémon kann Feuerblitz nicht wieder einsetzen, bis es die Aktive Position verlässt."
		},

		damage: 260
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "PLANETA Mochizuki",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 775958,
				tcgplayer: 579993
			},
		}
	],
}

export default card
