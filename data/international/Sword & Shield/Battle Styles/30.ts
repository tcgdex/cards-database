import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [851],
	set: Set,

	name: {
		'en-us': "Centiskorch",
		'fr-fr': "Scolocendre",
		'es-es': "Centiskorch",
		'it-it': "Centiskorch",
		'pt-br': "Centiskorch",
		'de-de': "Infernopod"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Sizzlipede",
		'fr-fr': "Grillepattes",
		'es-es': "Sizzlipede",
		'it-it': "Sizzlipede",
		'pt-br': "Sizzlipede",
		'de-de': "Thermopod"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Overheater",
			'fr-fr': "Surchauffeur",
			'es-es': "Sobrecalentamiento",
			'it-it': "Surriscaldatore",
			'pt-br': "Superaquecedor",
			'de-de': "Überhitzer"
		},

		effect: {
			'en-us': "Whenever your opponent flips a coin for their Burned Pokémon during Pokémon Checkup, it doesn't recover from that Special Condition even if the result is heads.",
			'fr-fr': "Chaque fois que votre adversaire lance une pièce pour son Pokémon Brûlé pendant le Contrôle Pokémon, celui-ci ne guérit pas de cet État Spécial même si le résultat est face.",
			'es-es': "Cada vez que tu rival lance 1 moneda para su Pokémon Quemado durante el Chequeo Pokémon, no se recupera de esa Condición Especial incluso si sale cara.",
			'it-it': "Ogni volta che il tuo avversario lancia una moneta per il suo Pokémon bruciato durante il controllo Pokémon, questo non guarisce da quella condizione speciale anche se esce testa.",
			'pt-br': "Sempre que seu oponente jogar 1 moeda para o Pokémon Queimado dele(a) durante o Checape Pokémon, ele não se recuperará daquela Condição Especial, mesmo que o resultado seja cara.",
			'de-de': "Jedes Mal, wenn dein Gegner beim Pokémon-Check 1 Münze für sein verbranntes Pokémon wirft, erholt es sich nicht von jenem Speziellen Zustand, auch wenn das Ergebnis Kopf ist."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Bursting Inferno",
			'fr-fr': "Enfer Explosif",
			'es-es': "Infierno Explosivo",
			'it-it': "Inferno in Fiamme",
			'pt-br': "Inferno em Chamas",
			'de-de': "Flammendes Inferno"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 130,
		cost: ["Fire", "Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "While its burning body is already dangerous on its own, this excessively hostile Pokémon also has large and very sharp fangs."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545096,
				tcgplayer: 234140
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545096,
				tcgplayer: 234140
			}
		},
	],
}

export default card
