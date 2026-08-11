import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dizzying Valley",
		'fr-fr': "Vallée Étourdissante",
		'es-es': "Valle Vertiginoso",
		'es-mx': "Valle Vertiginoso",
		'de-de': "Taumeltal",
		'it-it': "Valle Disorientante",
		'pt-br': "Vale Vertiginoso"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Confused Pokémon (both yours and your opponent's) don't recover from that Special Condition when they evolve or devolve.",
		'fr-fr': "Les Pokémon Confus (les vôtres et ceux de votre adversaire) ne guérissent pas de cet État Spécial lorsqu'ils évoluent ou dés-évoluent.",
		'es-es': "Los Pokémon Confundidos (tanto tuyos como de tu rival) no se recuperan de esa Condición Especial cuando evolucionan o involucionan.",
		'es-mx': "Los Pokémon Confundidos (tanto tuyos como de tu rival) no se recuperan de esa Condición Especial cuando evolucionan o involucionan.",
		'de-de': "Verwirrte Pokémon (deine und die deines Gegners) erholen sich nicht von jenem Speziellen Zustand, wenn sie sich entwickeln oder rückentwickeln.",
		'it-it': "I Pokémon confusi, sia tuoi che del tuo avversario, non guariscono da quella condizione speciale quando si evolvono o se ne annulla l'evoluzione.",
		'pt-br': "Os Pokémon Confusos (seus e do seu oponente) não se recuperarão daquela Condição Especial quando eles evoluírem ou involuírem."
	},

	trainerType: "Stadium",
	regulationMark: "I",

	illustrator: "AYUMI ODASHIMA",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857663,
				tcgplayer: 662153,
				cardtrader: 356874
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857663,
				tcgplayer: 662153,
				cardtrader: 356874
			}
		},
	],
}

export default card
