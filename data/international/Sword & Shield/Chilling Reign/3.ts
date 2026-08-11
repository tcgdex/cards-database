import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [15],
	set: Set,

	name: {
		'en-us': "Beedrill",
		'fr-fr': "Dardargnan",
		'es-es': "Beedrill",
		'it-it': "Beedrill",
		'pt-br': "Beedrill",
		'de-de': "Bibor"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
		'es-es': "Kakuna",
		'it-it': "Kakuna",
		'pt-br': "Kakuna",
		'de-de': "Kokuna"
	},

	attacks: [{
		name: {
			'en-us': "Persist Sting",
			'fr-fr': "Dard Durable",
			'es-es': "Aguijonazo Persistente",
			'it-it': "Pungiglione Ostinato",
			'pt-br': "Ferroada Persistente",
			'de-de': "Beharrlicher Stich"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon has any Special Energy attached, it is Knocked Out.",
			'fr-fr': "Si de l'Énergie spéciale est attachée au Pokémon Actif de votre adversaire, il est mis K.O.",
			'es-es': "Si el Pokémon Activo de tu rival tiene alguna Energía Especial unida a él, queda Fuera de Combate.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha delle Energie speciali assegnate, viene messo KO.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver alguma Energia Especial ligada a ele, ele será Nocauteado.",
			'de-de': "Wenn an das Aktive Pokémon deines Gegners mindestens 1 Spezial-Energie angelegt ist, ist es kampfunfähig."
		},

		cost: ["Grass"]
	}, {
		name: {
			'en-us': "Jet Spear",
			'fr-fr': "Lance Projetée",
			'es-es': "Lanza Propulsión",
			'it-it': "Lancia Jet",
			'pt-br': "Lança a Jato",
			'de-de': "Jet-Speer"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 110,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567083,
				tcgplayer: 241650
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567083,
				tcgplayer: 241650
			}
		},
	],
}

export default card
