import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		'en-us': "Melmetal",
		'fr-fr': "Melmetal",
		'es-es': "Melmetal",
		'it-it': "Melmetal",
		'pt-br': "Melmetal",
		'de-de': "Melmetal"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Meltan",
		'fr-fr': "Meltan",
		'es-es': "Meltan",
		'it-it': "Meltan",
		'pt-br': "Meltan",
		'de-de': "Meltan"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "E",
	illustrator: "Hasuno",

	description: {
		'en-us': "Revered long ago for its capacity to create iron from nothing, for some reason it has come back to life after 3,000 years."
	},

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Ingot Swing",
			'fr-fr': "Coup de Lingot",
			'de-de': "Ingothieb",
			'es-es': "Giro Lingote",
			'pt-br': "Giro de Lingote",
			'it-it': "Oscillabarra"
		},

		damage: 80,

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon that have an Ability.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par les attaques de Pokémon ayant un talent.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon zugefügt wird, die eine Fähigkeit haben.",
			'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon que tengan una habilidad.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon que tiverem uma Habilidade.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon che hanno un'abilità."
		}
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Blasting Hammer",
			'fr-fr': "Marteau Impitoyable",
			'de-de': "Sprengender Hammer",
			'es-es': "Martillo Explosivo",
			'pt-br': "Martelada Avassaladora",
			'it-it': "Martello Distruttivo"
		},

		damage: 150,

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582863,
				tcgplayer: 253340
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582863,
				tcgplayer: 253340
			}
		},
	],
}

export default card
