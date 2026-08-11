import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [429],
	set: Set,

	name: {
		'en-us': "Mismagius",
		'fr-fr': "Magirêve",
		'es-es': "Mismagius",
		'it-it': "Mismagius",
		'pt-br': "Mismagius",
		'de-de': "Traunmagil"
	},

	illustrator: "NC Empire",
	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
		'es-es': "Misdreavus",
		'it-it': "Misdreavus",
		'pt-br': "Misdreavus",
		'de-de': "Traunfugil"
	},
	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Psybeam",
			'fr-fr': "Rafale Psy",
			'es-es': "Psicorrayo",
			'it-it': "Psicoraggio",
			'pt-br': "Feixe Psíquico",
			'de-de': "Psystrahl"
		},

		damage: 20,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Nohahex",
			'fr-fr': "Nohahex",
			'es-es': "Nohahex",
			'it-it': "Nohahex",
			'pt-br': "Nohahex",
			'de-de': "Nohahex"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon has exactly 9 damage counters on it, that Pokémon is Knocked Out.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a exactement 9 marqueurs de dégâts sur lui, ce Pokémon est mis K.O.",
			'es-es': "Si el Pokémon Activo de tu rival tiene exactamente 9 contadores de daño sobre él, ese Pokémon queda Fuera de Combate.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha esattamente 9 segnalini danno, quel Pokémon viene messo KO.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver exatamente 9 contadores de dano nele, aquele Pokémon será Nocauteado.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners genau 9 Schadensmarken liegen, ist jenes Pokémon kampfunfähig."
		},

		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	retreat: 1,

	description: {
		'en-us': "Feared for its wrath and the curses it spreads, this Pokémon will also, on a whim, cast spells that help people.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 245874
			}
		},
	],
}

export default card
