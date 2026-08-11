import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [528],
	set: Set,

	name: {
		'en-us': "Swoobat",
		'fr-fr': "Rhinolove",
		'es-es': "Swoobat",
		'it-it': "Swoobat",
		'pt-br': "Swoobat",
		'de-de': "Fletiamo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Woobat",
		'fr-fr': "Chovsourir",
		'es-es': "Woobat",
		'it-it': "Woobat",
		'pt-br': "Woobat",
		'de-de': "Fleknoil"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Attraction Wave",
			'fr-fr': "Onde Attirante",
			'es-es': "Onda Atracción",
			'it-it': "Fascinonda",
			'pt-br': "Onda de Atração",
			'de-de': "Anziehungswelle"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused. Put 6 damage counters instead of 3 on that Pokémon for this Special Condition.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus. Placez 6 marqueurs de dégâts au lieu de 3 sur ce Pokémon-là pour cet État Spécial.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido. Pon 6 contadores de daño en vez de 3 en ese Pokémon por esta Condición Especial.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso. Metti sei segnalini danno invece di tre su quel Pokémon per effetto di questa condizione speciale.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso. Coloque 6 contadores de dano ao invés de 3 naquele Pokémon para esta Condição Especial.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Lege für diesen Speziellen Zustand 6 Schadensmarken anstelle von 3 Schadensmarken auf jenes Pokémon."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751570,
				tcgplayer: 534179,
				cardtrader: 274217
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751570,
				tcgplayer: 534179,
				cardtrader: 274217
			}
		},
	],

	illustrator: "Narumi Sato",

	description: {
		'en-us': "The auspicious shape of this Pokémon's nose apparently led some regions to consider Swoobat a symbol of good luck.",
	},

}

export default card
