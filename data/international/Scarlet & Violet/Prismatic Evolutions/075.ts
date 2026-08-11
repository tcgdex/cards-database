import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'en-us': "Eevee ex",
		'fr-fr': "Évoli-ex",
		'es-es': "Eevee ex",
		'pt-br': "Eevee ex",
		'it-it': "Eevee-ex",
		'de-de': "Evoli-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Rainbow DNA",
			'fr-fr': "ADN Arc-en-Ciel",
			'es-es': "ADN Arcoíris",
			'pt-br': "DNA Arco-íris",
			'it-it': "DNA Arcobaleno",
			'de-de': "Regenbogen-DNA"
		},

		effect: {
			'en-us': "This Pokémon can evolve into any Pokémon ex that evolves from Eevee if you play it from your hand onto this Pokémon. (This Pokémon can't evolve during your first turn or the turn you play it.)",
			'fr-fr': "Ce Pokémon peut évoluer en n'importe quel Pokémon-ex qui évolue d'Évoli, si vous le jouez de votre main sur ce Pokémon. (Ce Pokémon ne peut pas évoluer pendant votre premier tour ou pendant le tour où vous le jouez.)",
			'es-es': "Este Pokémon puede evolucionar a cualquier Pokémon ex que evolucione de Eevee si pones en juego ese Pokémon ex sobre este Pokémon desde tu mano. (Este Pokémon no puede evolucionar durante tu primer turno ni durante el turno en que lo pongas en juego).",
			'pt-br': "Este Pokémon poderá evoluir para qualquer Pokémon ex que evolua de Eevee se você jogar aquele Pokémon ex da sua mão sobre este Pokémon. (Este Pokémon não poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.)",
			'it-it': "Questo Pokémon può evolversi in qualsiasi Pokémon-ex che si evolve da Eevee, se giochi quel Pokémon-ex dalla tua mano mettendolo sopra questo Pokémon. Questo Pokémon non può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			'de-de': "Dieses Pokémon kann sich zu einem beliebigen Pokémon-ex entwickeln, das sich aus Evoli entwickelt, wenn du es aus deiner Hand auf dieses Pokémon spielst. (Dieses Pokémon kann sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, nicht entwickeln.)"
		}
	}],

	attacks: [{
		cost: ["Fire", "Water", "Lightning"],

		name: {
			'en-us': "Coruscating Quartz",
			'fr-fr': "Quartz Scintillant",
			'es-es': "Cuarzo Brillante",
			'pt-br': "Quartzo Cintilante",
			'it-it': "Quarzo Scintillante",
			'de-de': "Funkelnder Quarz"
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	suffix: "ex",
	illustrator: "aky CG Works",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805465,
				tcgplayer: 610430
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 810430,
			}
		},
	],
}

export default card
