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
		en: "Hypno",
		fr: "Hypnomade",
		es: "Hypno",
		it: "Hypno",
		pt: "Hypno",
		de: "Hypno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",
	illustrator: "Miki Tanaka",

	attacks: [{
		name: {
			en: "Hypnosis",
			fr: "Hypnose",
			es: "Hipnosis",
			it: "Ipnosi",
			pt: "Hypnosis",
			de: "Hypnose"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "Your opponent's Active Pokémon is now Asleep.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		cost: ["Psychic"]
	}, {
		name: {
			en: "Wake-Up Slap",
			fr: "Réveil Forcé",
			es: "Espabila",
			it: "Svegliopacca",
			pt: "Wake-Up Slap",
			de: "Weckruf"
		},

		effect: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 90 more damage. Then, that Pokémon recovers from all Special Conditions.",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 90 dégâts supplémentaires. Ensuite, ce Pokémon-là guérit de tous les États Spéciaux.",
			es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 90 puntos de daño más. Después, ese Pokémon se recupera de todas las Condiciones Especiales.",
			it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 90 danni in più. Poi quel Pokémon guarisce da tutte le condizioni speciali.",
			pt: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 90 more damage. Then, that Pokémon recovers from all Special Conditions.",
			de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 90 Schadenspunkte mehr zu. Jenes Pokémon erholt sich anschließend von allen Speziellen Zuständen."
		},

		damage: "30+",
		cost: ["Psychic"]
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

	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
		es: "Drowzee",
		it: "Drowzee",
		pt: "Drowzee",
		de: "Traumato"
	},

	description: {
		en: "There are some Hypno that assist doctors with patients who can't sleep at night in hospitals."
	},

	dexId: [97],
	regulationMark: "E"
}

export default card
