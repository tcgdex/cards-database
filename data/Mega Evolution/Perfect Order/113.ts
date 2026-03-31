import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Poké Pad",
		fr: "Poké Registre",
		es: "Pokétableta",
		de: "Poképad",
		it: "Poké Pad",
		pt: "Poké Tablet"
	},
	set: Set,
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",
	illustrator: "Studio Bora Inc.",
	effect: {
		en: "Search your deck for a Pokémon that doesn't have a Rule Box, reveal it, and put it into your hand. Then, shuffle your deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
		fr: "Cherchez dans votre deck un Pokémon n'ayant pas d'encadré Règle, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck. (Les Pokémon-ex, Pokémon-V, etc. ont des encadrés Règle.)",
		es: "Busca en tu baraja 1 Pokémon que no tenga un recuadro de regla, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja. (Los Pokémon ex, Pokémon V, etc., tienen recuadros de regla).",
		de: "Durchsuche dein Deck nach 1 Pokémon, das kein Regelfeld hat, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck. (Pokémon-ex, Pokémon-V usw. haben Regelfelder.)",
		it: "Cerca nel tuo mazzo un Pokémon che non ha una regola speciale, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo. I Pokémon-ex, i Pokémon-V, ecc. hanno regole speciali.",
		pt: "Procure no seu baralho por um Pokémon que não tiver uma Caixa de Regras, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho. (Pokémon ex, Pokémon V, etc. têm Caixas de Regras.)"
	},
	variants: [
		{
			type: "holo"
		}
	],
	thirdParty: {
		tcgplayer: 684333,
		cardmarket: 877530
	}
}

export default card
