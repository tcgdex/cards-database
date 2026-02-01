import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Larry's Staraptor",
		fr: "Étouraptor d'Okuba",
		es: "Staraptor de Laureano",
		'es-mx': "Staraptor de Laureano",
		de: "Aokis Staraptor",
		it: "Staraptor di Ubaldo",
		pt: "Staraptor do Lauro"
	},

	illustrator: "kantaro",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Facade",
			fr: "Façade",
			es: "Imagen",
			'es-mx': "Fachada",
			de: "Fassade",
			it: "Facciata",
			pt: "Fachada"
		},

		effect: {
			en: "If this Pokémon is Burned or Poisoned, this attack does 100 more damage.",
			fr: "Si ce Pokémon est Brûlé ou Empoisonné, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si este Pokémon está Envenenado o Quemado, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si este Pokémon está Envenenado o Quemado, este ataque hace 100 puntos de daño más.",
			de: "Wenn dieses Pokémon verbrannt oder vergiftet ist, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon è bruciato o avvelenato, questo attacco infligge 100 danni in più.",
			pt: "Se este Pokémon estiver Envenenado ou Queimado, este ataque causará 100 pontos de dano a mais."
		},

		damage: "60+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Feathery Strike",
			fr: "Frappe Plumeuse",
			es: "Impacto Plumífero",
			'es-mx': "Impacto Plumífero",
			de: "Federtreffer",
			it: "Piumacolpo",
			pt: "Golpe Plumoso"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon, and this attack also does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige aussi 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta 2 Energías de este Pokémon, y este ataque también hace 50 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Descarta 2 Energías de este Pokémon, y este ataque también hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Scarta due Energie da questo Pokémon e questo attacco infligge anche 50 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte 2 Energias deste Pokémon, e este ataque também causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 150
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 676061,
		cardmarket: 869860
	}
}

export default card
