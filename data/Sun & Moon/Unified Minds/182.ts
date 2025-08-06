import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Oranguru",
		fr: "Gouroutan",
		es: "Oranguru",
		it: "Oranguru",
		pt: "Oranguru",
		de: "Kommandutan"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		765,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sage’s Riddle",
				fr: "Charade du Grand Sage",
				es: "Acertijo del Sabio",
				it: "Indovinello del Saggio",
				pt: "Charada do Sábio",
				de: "Rätsel des Weisen"
			},
			effect: {
				en: "Put a Pokémon from your hand face down in front of you. Your opponent guesses the type of that Pokémon, and then you reveal it. If your opponent guessed right, they draw 4 cards. If they guessed wrong, you draw 4 cards. Return the Pokémon to your hand.",
				fr: "Placez un Pokémon de votre main devant vous, face cachée. Votre adversaire devine le type de ce Pokémon, puis vous le retournez. Si votre adversaire a bien deviné, il pioche 4 cartes. S’il a mal deviné, vous piochez 4 cartes. Remettez ce Pokémon dans votre main.",
				es: "Pon 1 Pokémon de tu mano boca abajo delante de ti. Tu rival intenta adivinar el tipo de ese Pokémon, y, después, tú lo enseñas. Si lo ha adivinado correctamente, tu rival roba 4 cartas. Si no lo ha adivinado correctamente, tú robas 4 cartas. Devuelve el Pokémon a tu mano.",
				it: "Prendi un Pokémon dalla tua mano e mettilo a faccia in giù davanti a te. Il tuo avversario deve indovinare il tipo di quel Pokémon, quindi glielo mostri. Se ha indovinato, il tuo avversario pesca quattro carte. Se non ha indovinato, ne peschi quattro tu. Poi riprendi in mano il Pokémon.",
				pt: "Coloque um Pokémon da sua mão virado para baixo na sua frente. Seu oponente adivinha o tipo daquele Pokémon e você o revela. Se o seu oponente acertar, ele(a) comprará 4 cartas. Se o seu oponente errar, você comprará 4 cartas. Devolva o Pokémon à sua mão.",
				de: "Lege ein Pokémon aus deiner Hand verdeckt vor dir ab. Dein Gegner rät den Typ jenes Pokémon und anschließend zeigst du es ihm. Wenn dein Gegner richtig geraten hat, zieht er 4 Karten. Wenn er falsch geraten hat, ziehst du 4 Karten. Nimm das Pokémon zurück auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
				fr: "Gifle Douce",
				es: "Bofetada Gentil",
				it: "Schiaffetto",
				pt: "Tapinha",
				de: "Sanfter Hieb"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 388697,
		tcgplayer: 195192
	}
}

export default card
