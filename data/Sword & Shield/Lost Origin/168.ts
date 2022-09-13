import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Tool Box",
		fr: "Caisse à Outils",
		es: "Maletín de Herramientas",
		it: "Cassetta degli Attrezzi",
		pt: "Kit de Ferramentas",
		de: "Werkzeugkasten"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Look at the top 7 cards of your deck. You may reveal any number of Pokémon Tool cards you find there and put them into your hand. Shuffle the other cards back into your deck.",
		fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer le nombre voulu de cartes Outil Pokémon que vous y trouvez, puis les ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		es: "Mira las 7 primeras cartas de tu baraja. Puedes enseñar cualquier cantidad de cartas de Herramienta Pokémon que encuentres entre ellas y ponerlas en tu mano. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
		it: "Guarda le prime sette carte del tuo mazzo. Puoi mostrare un numero qualsiasi di carte Oggetto Pokémon presenti tra esse e aggiungerle alle carte che hai in mano. Rimischia le altre carte nel tuo mazzo.",
		pt: "Olhe as 7 cartas de cima do seu baralho. Você poderá revelar qualquer número de cartas de Ferramenta Pokémon que encontrar lá e colocá-las na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
		de: "Schau dir die obersten 7 Karten deines Decks an. Du kannst beliebig viele Pokémon-Ausrüstungen, die du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
	},

	trainerType: "Item",
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card