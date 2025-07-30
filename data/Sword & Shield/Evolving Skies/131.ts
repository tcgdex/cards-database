import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Slaking",
		fr: "Monaflèmit",
		es: "Slaking",
		it: "Slaking",
		pt: "Slaking",
		de: "Letarking"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],
	stage: "Stage2",
	illustrator: "Mitsuhiro Arita",

	abilities: [{
		type: "Ability",

		name: {
			en: "Act Freely",
			fr: "Libre Comme l'Air",
			es: "A tu Antojo",
			it: "Senza Freni",
			pt: "Act Freely",
			de: "Freie Stücke"
		},

		effect: {
			en: "If a Stadium is in play, this Pokémon can't attack.",
			fr: "Si un Stade est en jeu, ce Pokémon ne peut pas attaquer.",
			es: "Si hay un Estadio en juego, este Pokémon no puede atacar.",
			it: "Se c'è in gioco una carta Stadio, questo Pokémon non può attaccare.",
			pt: "If a Stadium is in play, this Pokémon can't attack.",
			de: "Wenn eine Stadionkarte im Spiel ist, kann dieses Pokémon nicht angreifen."
		}
	}],

	attacks: [{
		name: {
			en: "Rout",
			fr: "Débâcle",
			es: "Esparcir",
			it: "Stanamento",
			pt: "Rout",
			de: "Verheerung"
		},

		effect: {
			en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			pt: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	dexId: [289],

	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
		es: "Vigoroth",
		it: "Vigoroth",
		pt: "Vigoroth",
		de: "Muntier"
	},

	description: {
		en: "It is the world's most slothful Pokémon. However, it can exert horrifying power by releasing pent-up energy all at once."
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 574187
	}
}

export default card
