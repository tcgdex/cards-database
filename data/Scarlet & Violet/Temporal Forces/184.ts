import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [780],
	set: Set,

	name: {
		en: "Drampa",
		fr: "Draïeul",
		es: "Drampa",
		it: "Drampa",
		pt: "Drampa",
		de: "Sen-Long"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Tapinha",
			de: "Sanfter Hieb"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Raging Cannon",
			fr: "Canon Déchaîné",
			es: "Cañón Iracundo",
			it: "Cannone Furioso",
			pt: "Canhão Furioso",
			de: "Wutkanone"
		},

		effect: {
			en: "If all of your Benched Pokémon have at least 1 damage counter on them, this attack does 120 more damage.",
			fr: "Si tous vos Pokémon de Banc ont au moins un marqueur de dégâts, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si todos tus Pokémon en Banca tienen por lo menos un contador de daño sobre ellos, este ataque hace 120 puntos de daño más.",
			it: "Se tutti i tuoi Pokémon in panchina hanno almeno un segnalino danno, questo attacco infligge 120 danni in più.",
			pt: "Se todos os seus Pokémon no Banco tiverem pelo menos 1 contador de dano neles, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn auf allen Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo"
		}
	],

	illustrator: "Mékayu",

	thirdParty: {
		cardmarket: 760814
	}
}

export default card