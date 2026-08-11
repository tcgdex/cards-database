import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Hypno",
		'fr-fr': "Hypnomade",
		'es-es': "Hypno",
		'it-it': "Hypno",
		'pt-br': "Hypno",
		'de-de': "Hypno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",
	illustrator: "Miki Tanaka",

	attacks: [{
		name: {
			'en-us': "Hypnosis",
			'fr-fr': "Hypnose",
			'es-es': "Hipnosis",
			'it-it': "Ipnosi",
			'pt-br': "Hypnosis",
			'de-de': "Hypnose"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "Your opponent's Active Pokémon is now Asleep.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Wake-Up Slap",
			'fr-fr': "Réveil Forcé",
			'es-es': "Espabila",
			'it-it': "Svegliopacca",
			'pt-br': "Wake-Up Slap",
			'de-de': "Weckruf"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 90 more damage. Then, that Pokémon recovers from all Special Conditions.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 90 dégâts supplémentaires. Ensuite, ce Pokémon-là guérit de tous les États Spéciaux.",
			'es-es': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 90 puntos de daño más. Después, ese Pokémon se recupera de todas las Condiciones Especiales.",
			'it-it': "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 90 danni in più. Poi quel Pokémon guarisce da tutte le condizioni speciali.",
			'pt-br': "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 90 more damage. Then, that Pokémon recovers from all Special Conditions.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 90 Schadenspunkte mehr zu. Jenes Pokémon erholt sich anschließend von allen Speziellen Zuständen."
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
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'es-es': "Drowzee",
		'it-it': "Drowzee",
		'pt-br': "Drowzee",
		'de-de': "Traumato"
	},

	description: {
		'en-us': "There are some Hypno that assist doctors with patients who can't sleep at night in hospitals."
	},

	dexId: [97],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574110,
				tcgplayer: 246833
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574110,
				tcgplayer: 246833
			}
		},
	],
}

export default card
