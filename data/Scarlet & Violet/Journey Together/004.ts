import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [46],
	set: Set,

	name: {
		en: "Paras",
		fr: "Paras",
		es: "Paras",
		de: "Paras",
		it: "Paras",
		pt: "Paras",
		'es-mx': "Paras"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Leech Life",
			fr: "Vampirisme",
			es: "Chupavidas",
			de: "Blutsauger",
			it: "Sanguisuga",
			pt: "Suga-vidas",
			'es-mx': "Chupavidas"
		},

		effect: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			fr: "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			es: "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
			de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast.",
			it: "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
			pt: "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
			'es-mx': "Cura a este Pokémon la misma cantidad de puntos de daño que infligiste al Pokémon Activo de tu rival."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",
	illustrator: "Ayako Ozaki",

	thirdParty: {
		cardmarket: 817156
	},

	variants: {
		firstEdition: false,
		holo: false,
		normal: true,
		reverse: true
	}
}

export default card
