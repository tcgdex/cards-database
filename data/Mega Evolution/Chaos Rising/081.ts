import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Roxie's Performance",
		fr: "Performance de Strykna",
		es: "Actuación de Hiedra",
		'es-mx': "Concierto de Roxie",
		de: "Micas Aufführung",
		it: "Performance di Velia",
		pt: "Show da Roxie"
	},

	illustrator: "Nobusawa/Mochipuyo",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693540,
		cardmarket: 886473
	},

	effect: {
		en: "During your opponent's next turn, their Poisoned Pokémon can't retreat. (This includes newly Poisoned Pokémon.)",
		fr: "Pendant le prochain tour de votre adversaire, ses Pokémon Empoisonnés ne peuvent pas battre en retraite. (Cela comprend les nouveaux Pokémon Empoisonnés.)",
		es: "Durante el próximo turno de tu rival, sus Pokémon Envenenados no pueden retirarse. (Esto incluye los Pokémon recién Envenenados).",
		'es-mx': "Durante el próximo turno de tu rival, sus Pokémon Envenenados no pueden retirarse. (Esto incluye los nuevos Pokémon que queden Envenenados).",
		de: "Während des nächsten Zuges deines Gegners können sich seine vergifteten Pokémon nicht zurückziehen. (Dies schließt Pokémon ein, die neu vergiftet werden.)",
		it: "Durante il prossimo turno del tuo avversario, il suo Pokémon avvelenato non può ritirarsi. Questo include i Pokémon che sono stati appena avvelenati.",
		pt: "Durante o próximo turno do seu oponente, os Pokémon Envenenados dele não poderão recuar. (Isso inclui Pokémon recém-Envenenados.)"
	}
}

export default card