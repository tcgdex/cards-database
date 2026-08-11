import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [138],
	set: Set,

	name: {
		'fr-fr': "Amonita",
		'en-us': "Omanyte",
		'es-es': "Omanyte",
		'it-it': "Omanyte",
		'pt-br': "Omanyte",
		'de-de': "Amonitas"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Fossile Nautile Ancien",
		'en-us': "Antique Helix Fossil",
		'es-es': "Fósil Hélix Antiguo",
		'it-it': "Vecchio Helixfossile",
		'pt-br': "Fóssil Espiral Arcaico",
		'de-de': "Antikes Helixfossil"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'fr-fr': "Retour Tentaculaire",
			'en-us': "Tentacular Return",
			'es-es': "Retorno Tentacular",
			'it-it': "Ritorno Tentacolare",
			'pt-br': "Retorno Tentacular",
			'de-de': "Tentakelrückkehr"
		},

		effect: {
			'fr-fr': "Ajoutez à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			'en-us': "Put an Energy attached to your opponent's Active Pokémon into their hand.",
			'es-es': "Pon 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			'it-it': "Prendi un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungila alle carte che ha in mano.",
			'pt-br': "Coloque uma Energia ligada ao Pokémon Ativo do seu oponente na mão dele.",
			'de-de': "Gib deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon is a member of an ancient, extinct species. Omanyte paddles through water with its 10 tentacles, looking like it's just drifting along.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733733,
				tcgplayer: 516701,
				cardtrader: 261200
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733733,
				tcgplayer: 516701,
				cardtrader: 261200
			}
		},
	],

	illustrator: "Akira Komayama",

	
}

export default card
