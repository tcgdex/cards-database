import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [429],
	set: Set,

	name: {
		en: "Mismagius",
		fr: "Magirêve",
		es: "Mismagius",
		it: "Mismagius",
		pt: "Mismagius",
		de: "Traunmagil"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforêve",
		es: "Misdreavus",
		it: "Misdreavus",
		pt: "Misdreavus",
		de: "Traunfugil"
	},
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Psybeam",
			fr: "Rafale Psy",
			es: "Psicorrayo",
			it: "Psicoraggio",
			pt: "Feixe Psíquico",
			de: "Psystrahl"
		},

		damage: 20,

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		cost: ["Psychic"]
	}, {
		name: {
			en: "Nohahex",
			fr: "Nohahex",
			es: "Nohahex",
			it: "Nohahex",
			pt: "Nohahex",
			de: "Nohahex"
		},

		effect: {
			en: "If your opponent's Active Pokémon has exactly 9 damage counters on it, that Pokémon is Knocked Out.",
			fr: "Si le Pokémon Actif de votre adversaire a exactement 9 marqueurs de dégâts sur lui, ce Pokémon est mis K.O.",
			es: "Si el Pokémon Activo de tu rival tiene exactamente 9 contadores de daño sobre él, ese Pokémon queda Fuera de Combate.",
			it: "Se il Pokémon attivo del tuo avversario ha esattamente 9 segnalini danno, quel Pokémon viene messo KO.",
			pt: "Se o Pokémon Ativo do seu oponente tiver exatamente 9 contadores de dano nele, aquele Pokémon será Nocauteado.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners genau 9 Schadensmarken liegen, ist jenes Pokémon kampfunfähig."
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
