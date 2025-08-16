import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [229],
	set: Set,

	name: {
		fr: "Démolosse",
		en: "Houndoom",
		es: "Houndoom",
		it: "Houndoom",
		pt: "Houndoom",
		de: "Hundemon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			fr: "Frappe Audacieuse",
			en: "Daring Strike",
			es: "Golpe Intrépido",
			it: "Colpo Temerario",
			pt: "Golpe Ousado",
			de: "Gewagter Angriff"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 70 dégâts supplémentaires.",
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 70 more damage.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 70 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 70 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 70 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			fr: "Tranche Ombre",
			en: "Shadow Slash",
			es: "Tajo Sombrío",
			it: "Lacerombra",
			pt: "Talho das Sombras",
			de: "Schattenschlitzer"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon.",
			en: "Discard an Energy from this Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Haru Akasaka",

	thirdParty: {
		cardmarket: 725213
	}
}

export default card