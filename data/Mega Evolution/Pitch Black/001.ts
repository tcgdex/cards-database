import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Tropius",
		fr: "Tropius",
		es: "Tropius",
		'es-mx': "Tropius",
		de: "Tropius",
		it: "Tropius",
		pt: "Tropius"
	},

	illustrator: "Akino Fukuji",
	rarity: "Common",
	category: "Pokemon",
	dexId: [357],
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Fruity Aroma",
			fr: "Arôme Fruité",
			es: "Aroma Frutal",
			'es-mx': "Aroma Frutal",
			de: "Fruchtiges Aroma",
			it: "Aroma Fruttato",
			pt: "Aroma Frutado"
		},

		cost: ["Colorless"],

		effect: {
			en: "Look at the top 6 cards of your deck, and you may reveal any number of Pokémon you find there and put them into your hand. Shuffle the other cards back into your deck.",
			fr: "Regardez les 6 cartes du dessus de votre deck. Vous pouvez montrer le nombre voulu de Pokémon que vous y trouvez, puis les ajouter à votre main. Mélangez les autres cartes avec votre deck.",
			es: "Mira las 6 primeras cartas de tu baraja, y puedes enseñar cualquier cantidad de Pokémon que encuentres entre ellas y ponerlos en tu mano. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			'es-mx': "Mira las primeras 6 cartas de tu mazo, y puedes mostrar cualquier cantidad de Pokémon que encuentres entre ellas y ponerlos en tu mano. Baraja el resto de las cartas de nuevo en tu mazo.",
			de: "Schau dir die obersten 6 Karten deines Decks an. Du kannst beliebig viele Pokémon, die du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck.",
			it: "Guarda le prime sei carte del tuo mazzo e puoi mostrare un numero qualsiasi di Pokémon presenti tra esse e aggiungerli alle carte che hai in mano. Rimischia le altre carte nel tuo mazzo.",
			pt: "Olhe as 6 cartas de cima do seu baralho, e você pode revelar qualquer número de Pokémon que você encontrar lá e colocá-los na sua mão. Embaralhe as outras cartas de volta no seu baralho."
		}
	}, {
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			es: "Rayo Solar",
			'es-mx': "Rayo Solar",
			de: "Solarstrahl",
			it: "Solarraggio",
			pt: "Raio Solar"
		},

		cost: ["Grass", "Colorless"],

		damage: 60
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895789,
				tcgplayer: 704758
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895789,
				tcgplayer: 704758
			}
		},
	],
}

export default card
