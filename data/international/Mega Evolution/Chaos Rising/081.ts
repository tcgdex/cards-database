import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Roxie's Performance",
		'fr-fr': "Performance de Strykna",
		'es-es': "Actuación de Hiedra",
		'es-mx': "Concierto de Roxie",
		'de-de': "Micas Aufführung",
		'it-it': "Performance di Velia",
		'pt-br': "Show da Roxie"
	},

	illustrator: "Nobusawa/Mochipuyo",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	effect: {
		'en-us': "During your opponent's next turn, their Poisoned Pokémon can't retreat. (This includes newly Poisoned Pokémon.)",
		'fr-fr': "Pendant le prochain tour de votre adversaire, ses Pokémon Empoisonnés ne peuvent pas battre en retraite. (Cela comprend les nouveaux Pokémon Empoisonnés.)",
		'es-es': "Durante el próximo turno de tu rival, sus Pokémon Envenenados no pueden retirarse. (Esto incluye los Pokémon recién Envenenados).",
		'es-mx': "Durante el próximo turno de tu rival, sus Pokémon Envenenados no pueden retirarse. (Esto incluye los nuevos Pokémon que queden Envenenados).",
		'de-de': "Während des nächsten Zuges deines Gegners können sich seine vergifteten Pokémon nicht zurückziehen. (Dies schließt Pokémon ein, die neu vergiftet werden.)",
		'it-it': "Durante il prossimo turno del tuo avversario, il suo Pokémon avvelenato non può ritirarsi. Questo include i Pokémon che sono stati appena avvelenati.",
		'pt-br': "Durante o próximo turno do seu oponente, os Pokémon Envenenados dele não poderão recuar. (Isso inclui Pokémon recém-Envenenados.)"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886473,
				tcgplayer: 693540
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886473,
				tcgplayer: 693540
			}
		},
	],
}

export default card
