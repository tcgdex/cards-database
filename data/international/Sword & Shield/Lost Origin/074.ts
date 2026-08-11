import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [488],
	set: Set,

	name: {
		'en-us': "Cresselia",
		'fr-fr': "Cresselia",
		'es-es': "Cresselia",
		'it-it': "Cresselia",
		'pt-br': "Cresselia",
		'de-de': "Cresselia"
	},

	illustrator: "saino misaki",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Moonglow Reverse",
			'fr-fr': "Éclat de Lune Inversé",
			'es-es': "Brillo Lunar Inverso",
			'it-it': "Invertiluna",
			'pt-br': "Brilho Lunar Reverso",
			'de-de': "Mondschimmerumkehr"
		},

		effect: {
			'en-us': "Move 2 damage counters from each of your Pokémon to 1 of your opponent's Pokémon.",
			'fr-fr': "Déplacez 2 marqueurs de dégâts de chacun de vos Pokémon vers l'un des Pokémon de votre adversaire.",
			'es-es': "Mueve 2 contadores de daño de cada uno de tus Pokémon a 1 de los Pokémon de tu rival.",
			'it-it': "Sposta due segnalini danno da ciascuno dei tuoi Pokémon a uno dei Pokémon del tuo avversario.",
			'pt-br': "Mova 2 contadores de dano de cada um dos seus Pokémon para 1 dos Pokémon do seu oponente.",
			'de-de': "Verschiebe 2 Schadensmarken von jedem deiner Pokémon auf 1 Pokémon deines Gegners."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Lunar Blast",
			'fr-fr': "Explosion Lunaire",
			'es-es': "Explosión Lunar",
			'it-it': "Furia Lunare",
			'pt-br': "Detonação Lunar",
			'de-de': "Mondsturm"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674086,
				tcgplayer: 283953
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674086,
				tcgplayer: 283953
			}
		},
	],
}

export default card
