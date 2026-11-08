import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Larry's Staraptor",
		'fr-fr': "Étouraptor d'Okuba",
		'es-es': "Staraptor de Laureano",
		'es-mx': "Staraptor de Laureano",
		'de-de': "Aokis Staraptor",
		'it-it': "Staraptor di Ubaldo",
		'pt-br': "Staraptor do Lauro"
	},

	evolveFrom: {
		'en-us': "Larry's Staravia",
		'fr-fr': "Étourvol d'Okuba",
		'es-es': "Staravia de Laureano",
		'es-mx': "Staravia de Laureano",
		'de-de': "Aokis Staravia",
		'it-it': "Staravia di Ubaldo",
		'pt-br': "Staravia do Lauro",
	},

	illustrator: "Po-Suzuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Facade",
			'fr-fr': "Façade",
			'es-es': "Imagen",
			'es-mx': "Fachada",
			'de-de': "Fassade",
			'it-it': "Facciata",
			'pt-br': "Fachada"
		},

		effect: {
			'en-us': "If this Pokémon is Burned or Poisoned, this attack does 100 more damage.",
			'fr-fr': "Si ce Pokémon est Brûlé ou Empoisonné, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si este Pokémon está Envenenado o Quemado, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si este Pokémon está Envenenado o Quemado, este ataque hace 100 puntos de daño más.",
			'de-de': "Wenn dieses Pokémon verbrannt oder vergiftet ist, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon è bruciato o avvelenato, questo attacco infligge 100 danni in più.",
			'pt-br': "Se este Pokémon estiver Envenenado ou Queimado, este ataque causará 100 pontos de dano a mais."
		},

		damage: "60+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Feathery Strike",
			'fr-fr': "Frappe Plumeuse",
			'es-es': "Impacto Plumífero",
			'es-mx': "Impacto Plumífero",
			'de-de': "Federtreffer",
			'it-it': "Piumacolpo",
			'pt-br': "Golpe Plumoso"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon, and this attack also does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige aussi 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Descarta 2 Energías de este Pokémon, y este ataque también hace 50 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Descarta 2 Energías de este Pokémon, y este ataque también hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Scarta due Energie da questo Pokémon e questo attacco infligge anche 50 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte 2 Energias deste Pokémon, e este ataque também causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "It never stops attacking even if it is injured. It fusses over the shape of its comb.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869781,
			tcgplayer: 675982
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870400,
			tcgplayer: 676984
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870399,
			tcgplayer: 677124
		}
	},
],
}

export default card