import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Centiskorch",
		fr: "Scolocendre",
		es: "Centiskorch",
		it: "Centiskorch",
		pt: "Centiskorch",
		de: "Infernopod"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Sizzlipede",
		fr: "Grillepattes"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Overheater",
			fr: "Surchauffeur",
			es: "Sobrecalentamiento",
			it: "Surriscaldatore",
			pt: "Superaquecedor",
			de: "Überhitzer"
		},

		effect: {
			en: "Whenever your opponent flips a coin for their Burned Pokémon during Pokémon Checkup, it doesn’t recover from that Special Condition even if the result is heads.",
			fr: "Chaque fois que votre adversaire lance une pièce pour son Pokémon Brûlé pendant le Contrôle Pokémon, celui-ci ne guérit pas de cet État Spécial même si le résultat est face.",
			es: "Cada vez que tu rival lance 1 moneda para su Pokémon Quemado durante el Chequeo Pokémon, no se recupera de esa Condición Especial incluso si sale cara.",
			it: "Ogni volta che il tuo avversario lancia una moneta per il suo Pokémon bruciato durante il controllo Pokémon, questo non guarisce da quella condizione speciale anche se esce testa.",
			pt: "Sempre que seu oponente jogar 1 moeda para o Pokémon Queimado dele(a) durante o Checape Pokémon, ele não se recuperará daquela Condição Especial, mesmo que o resultado seja cara.",
			de: "Jedes Mal, wenn dein Gegner beim Pokémon-Check 1 Münze für sein verbranntes Pokémon wirft, erholt es sich nicht von jenem Speziellen Zustand, auch wenn das Ergebnis Kopf ist."
		}
	}],

	attacks: [{
		name: {
			en: "Bursting Inferno",
			fr: "Enfer Explosif",
			es: "Infierno Explosivo",
			it: "Inferno in Fiamme",
			pt: "Inferno em Chamas",
			de: "Flammendes Inferno"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "While its burning body is already dangerous on its own, this excessively hostile Pokémon also has large and very sharp fangs."
	}
}

export default card