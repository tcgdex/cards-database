import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Malamar ex",
		fr: "Méga-Sepiatroce‑ex",
		de: "Mega-Calamanero-ex",
		es: "Mega-Malamar ex",
		it: "Mega Malamar-ex",
		pt: "Mega Malamar ex",
		'es-mx': "Mega-Malamar ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Psychic Marionette",
			fr: "Marionnette Psy",
			de: "Psychomarionette",
			es: "Marioneta Psíquica",
			it: "Marionetta Psichica",
			pt: "Marionete Psíquica",
			'es-mx': "Marioneta Psíquica"
		},

		effect: {
			en: "This attack does 70 damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 70 dégâts pour chacun des Pokémon de Banc de votre adversaire.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 70 Schadenspunkte zu.",
			es: "Este ataque hace 70 puntos de daño por cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge 70 danni per ciascuno dei Pokémon nella panchina del tuo avversario.",
			pt: "Este ataque causa 70 pontos de dano para cada Pokémon no Banco do seu oponente.",
			'es-mx': "Este ataque hace 70 puntos de daño por cada uno de los Pokémon en Banca de tu rival."
		},

		damage: "70×",
		cost: ["Darkness", "Darkness"]
	}, {
		name: {
			en: "Eerie Wave",
			fr: "Vague Étrange",
			de: "Gespenstische Woge",
			es: "Onda Sobrecogedora",
			it: "Ondamistero",
			pt: "Onda Misteriosa",
			'es-mx': "Onda Inquietante"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 200,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		tcgplayer: 728054,
		cardmarket: 918895
	}
}

export default card