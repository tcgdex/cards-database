import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Tyme",
		fr: "Thaïm",
		es: "Mila",
		pt: "Tomila",
		it: "Thyma",
		de: "Quendella"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Tell your opponent the name of a Pokémon in your hand and put that Pokémon face down in front of you. Your opponent guesses that Pokémon's HP, and then you reveal it. If your opponent guessed right, they draw 4 cards. If they guessed wrong, you draw 4 cards. Then, return the Pokémon to your hand.",
		fr: "Dites à votre adversaire le nom de l'un des Pokémon de votre main, puis placez ce Pokémon face cachée devant vous. Votre adversaire devine le montant des PV de ce Pokémon, puis vous le montrez. Si votre adversaire a bien deviné, il pioche 4 cartes. S'il a mal deviné, vous piochez 4 cartes. Ensuite, remettez ce Pokémon dans votre main.",
		es: "Dile a tu rival el nombre de un Pokémon de tu mano y pon ese Pokémon boca abajo delante de ti. Tu rival intenta adivinar los PS de ese Pokémon y, después, tú lo enseñas. Si lo ha adivinado correctamente, tu rival roba 4 cartas. Si no lo ha adivinado correctamente, tú robas 4 cartas. Después, devuelve el Pokémon a tu mano.",
		pt: "Diga ao seu oponente o nome de um Pokémon na sua mão e coloque aquele Pokémon virado para baixo na sua frente. Seu oponente tenta adivinhar o PS daquele Pokémon e, em seguida, você o revela. Se o seu oponente acertar, ele comprará 4 cartas. Se ele errar, você comprará 4 cartas. Em seguida, devolva o Pokémon à sua mão.",
		it: "Comunica al tuo avversario il nome di un Pokémon che hai in mano e metti quel Pokémon a faccia in giù davanti a te. Il tuo avversario deve indovinare i PS di quel Pokémon e poi glielo mostri. Se ha indovinato, il tuo avversario pesca quattro carte. Se non ha indovinato, ne peschi quattro tu. Poi riprendi in mano il Pokémon.",
		de: "Nenne deinem Gegner den Namen eines Pokémon auf deiner Hand und lege jenes Pokémon verdeckt vor dir ab. Dein Gegner rät die KP jenes Pokémon und anschließend deckst du es auf. Wenn dein Gegner richtig geraten hat, zieht er 4 Karten. Wenn er falsch geraten hat, ziehst du 4 Karten. Nimm anschließend das Pokémon zurück auf deine Hand."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "Yuu Nishida"
}

export default card