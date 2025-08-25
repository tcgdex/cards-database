import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [959],
	set: Set,

	name: {
		en: "Tinkaton",
		fr: "Forgelina",
		es: "Tinkaton",
		it: "Tinkaton",
		pt: "Tinkaton",
		de: "Granforgita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Crushing Blow",
			fr: "Coup Écrasant",
			es: "Demoler",
			it: "Assalto Sbaragliante",
			pt: "Golpe Esmagador",
			de: "Brechschlag"
		},

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}, {
		cost: ["Psychic"],

		name: {
			en: "Alloyed Hammer",
			fr: "Marteau Allié",
			es: "Martillo de Aleación",
			it: "Metalmartello",
			pt: "Martelo de Liga Metálica",
			de: "Legierter Hammer"
		},

		effect: {
			en: "If this Pokémon has any {M} Energy attached, this attack does 120 more damage.",
			fr: "Si au moins une Énergie {M} est attachée à ce Pokémon, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía {M} unida, este ataque hace 120 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie {M} assegnate, questo attacco infligge 120 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia {M} ligada a ele, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 {M}-Energie angelegt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "KEIICHIRO ITO",

	thirdParty: {
		cardmarket: 740577
	}
}

export default card