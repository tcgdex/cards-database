import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [202],
	set: Set,

	name: {
		en: "Team Rocket's Wobbuffet",
		fr: "Qulbutoké de la Team Rocket",
		de: "Team Rockets Woingenau",
		it: "Wobbuffet del Team Rocket",
		es: "Wobbuffet del Team Rocket",
		pt: "Wobbuffet da Equipe Rocket",
		'es-mx': "Wobbuffet del Equipo Rocket"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Rocket Mirror",
			fr: "Miroir Rocket",
			de: "Rocket-Spiegel",
			it: "Specchio Rocket",
			es: "Espejo Rocket",
			pt: "Espelho Rocket",
			'es-mx': "Espejo Rocket"
		},

		effect: {
			en: "Move all damage counters from 1 of your Benched Team Rocket's Pokémon to your opponent's Active Pokémon.",
			fr: "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de la Team Rocket de Banc vers le Pokémon Actif de votre adversaire.",
			de: "Verschiebe alle Schadensmarken von 1 Team Rockets Pokémon auf deiner Bank auf das Aktive Pokémon deines Gegners.",
			it: "Sposta tutti i segnalini danno da uno dei tuoi Pokémon del Team Rocket in panchina al Pokémon attivo del tuo avversario.",
			es: "Mueve todos los contadores de daño de uno de tus Pokémon del Team Rocket en Banca al Pokémon Activo de tu rival.",
			pt: "Mova todos os contadores de dano de 1 dos seus Pokémon da Equipe Rocket no Banco para o Pokémon Ativo do seu oponente.",
			'es-mx': "Mueve todos los contadores de daño de 1 de tus Pokémon del Equipo Rocket en Banca al Pokémon Activo de tu rival."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
			de: "Abrupter Kopfstoß",
			it: "Rimbalzo Bottintesta",
			es: "Bote Cabezazo",
			pt: "Cabeçada Ricochete",
			'es-mx': "Cabezazo Rebotante"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	]
}

export default card
