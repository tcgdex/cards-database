import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
		es: "Wobbuffet",
		it: "Wobbuffet",
		pt: "Wobbuffet",
		de: "Woingenau"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Anesaki Dynamic",

	attacks: [{
		name: {
			en: "Mirror Pain",
			fr: "Douleur Miroir",
			es: "Dolor Espejo",
			it: "Pena Riflessa",
			pt: "Mirror Pain",
			de: "Schmerzspiegel"
		},

		effect: {
			en: "Put damage counters on your opponent’s Active Pokémon equal to the number of damage counters on 1 of your Benched Pokémon.",
			fr: "Placez autant de marqueurs de dégâts sur le Pokémon Actif de votre adversaire qu’il y a de marqueurs de dégâts sur l’un de vos Pokémon de Banc.",
			es: "Pon una cantidad de contadores de daño en el Pokémon Activo de tu rival equivalente a la cantidad de contadores de daño en 1 de tus Pokémon en Banca.",
			it: "Metti sul Pokémon attivo del tuo avversario un numero di segnalini danno pari al numero di segnalini danno presenti su uno dei Pokémon della tua panchina.",
			pt: "Put damage counters on your opponent’s Active Pokémon equal to the number of damage counters on 1 of your Benched Pokémon.",
			de: "Lege Schadensmarken auf das Aktive Pokémon deines Gegners entsprechend der Anzahl der Schadensmarken auf 1 Pokémon auf deiner Bank."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
			es: "Bote Cabezazo",
			it: "Rimbalzo Bottintesta",
			pt: "Headbutt Bounce",
			de: "Abrupter Kopfstoß"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card