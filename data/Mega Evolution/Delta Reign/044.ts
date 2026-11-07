import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Hypno",
		fr: "Hypnomade",
		de: "Hypno",
		es: "Hypno",
		it: "Hypno",
		pt: "Hypno",
		'es-mx': "Hypno"
	},

	illustrator: "Yuta Kawazu",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Mind Ruler",
			fr: "Contrôle Mental",
			de: "Gedankenherrscher",
			es: "Jefe Mental",
			it: "Signore della Mente",
			pt: "Comando Mental",
			'es-mx': "Dominio Mental"
		},

		effect: {
			en: "This attack does 20 damage for each card in your opponent's hand.",
			fr: "Cette attaque inflige 20 dégâts pour chaque carte dans la main de votre adversaire.",
			de: "Diese Attacke fügt für jede Karte auf der Hand deines Gegners 20 Schadenspunkte zu.",
			es: "Este ataque hace 20 puntos de daño por cada carta en la mano de tu rival.",
			it: "Questo attacco infligge 20 danni per ogni carta nella mano del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano para cada carta na mão do seu oponente.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada carta en la mano de tu rival."
		},

		damage: "20×",
		cost: ["Psychic"]
	}, {
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
			de: "Hypnoschuss",
			es: "Hipnorrayo",
			it: "Ipnobomba",
			pt: "Borrifada Hipnótica",
			'es-mx': "Hipnoexplosión"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido."
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	thirdParty: {
		tcgplayer: 726526,
		cardmarket: 918864
	}
}

export default card