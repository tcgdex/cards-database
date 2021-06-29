import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Beedrill",
		fr: "Dardargnan",
		es: "Beedrill",
		it: "Beedrill",
		pt: "Beedrill",
		de: "Bibor"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort"
	},

	attacks: [{
		name: {
			en: "Persist Sting",
			fr: "Dard Durable",
			es: "Aguijonazo Persistente",
			it: "Pungiglione Ostinato",
			pt: "Ferroada Persistente",
			de: "Beharrlicher Stich"
		},

		effect: {
			en: "If your opponent’s Active Pokémon has any Special Energy attached, it is Knocked Out.",
			fr: "Si de l’Énergie spéciale est attachée au Pokémon Actif de votre adversaire, il est mis K.O.",
			es: "Si el Pokémon Activo de tu rival tiene alguna Energía Especial unida a él, queda Fuera de Combate.",
			it: "Se il Pokémon attivo del tuo avversario ha delle Energie speciali assegnate, viene messo KO.",
			pt: "Se o Pokémon Ativo do seu oponente tiver alguma Energia Especial ligada a ele, ele será Nocauteado.",
			de: "Wenn an das Aktive Pokémon deines Gegners mindestens 1 Spezial-Energie angelegt ist, ist es kampfunfähig."
		},

		cost: ["Grass"]
	}, {
		name: {
			en: "Jet Spear",
			fr: "Lance Projetée",
			es: "Lanza Propulsión",
			it: "Lancia Jet",
			pt: "Lança a Jato",
			de: "Jet-Speer"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un’Energia da questo Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 110,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card