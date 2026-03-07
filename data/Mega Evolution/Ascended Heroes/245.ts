import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Obstagoon",
		fr: "Ixon de Galar",
		es: "Obstagoon de Galar",
		'es-mx': "Obstagoon de Galar",
		de: "Galar-Barrikadax",
		it: "Obstagoon di Galar",
		pt: "Obstagoon de Galar"
	},

	illustrator: "Krgc",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Scarring Shout",
			fr: "Cri Meurtrissant",
			es: "Grito Cicatriz",
			'es-mx': "Grito Desgarrador",
			de: "Marternder Schrei",
			it: "Urlosfregio",
			pt: "Grito Grosseirão"
		},

		effect: {
			en: "This attack does 70 damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 70 dégâts pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 70 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 70 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 70 Schadenspunkte zu.",
			it: "Questo attacco infligge 70 danni per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 70 pontos de dano para cada contador de dano no Pokémon Ativo do seu oponente."
		},

		damage: "70×"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Punk Smash",
			fr: "Broiement Punk",
			es: "Golpe Punki",
			'es-mx': "Golpazo Punk",
			de: "Punk Smash",
			it: "Colpo Punk",
			pt: "Esmagada Punk"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 676057,
		cardmarket: 869856
	}
}

export default card
