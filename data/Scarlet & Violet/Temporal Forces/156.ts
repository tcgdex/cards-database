import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Perilous Jungle",
		fr: "Jungle Périlleuse",
		es: "Selva Peligrosa",
		it: "Giungla Pericolosa",
		pt: "Selva Perigosa",
		de: "Gefährlicher Dschungel"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "During Pokémon Checkup, put 2 more damage counters on each Poisoned non-{D} Pokémon (both yours and your opponent's).",
		fr: "Pendant le Contrôle Pokémon, placez 2 marqueurs de dégâts supplémentaires sur chacun des Pokémon non-{D} Empoisonnés (les vôtres et ceux de votre adversaire).",
		es: "Durante el Chequeo Pokémon, pon 2 contadores de daño más en cada uno de los Pokémon no {D} Envenenados (tanto tuyos como de tu rival).",
		it: "Durante il controllo Pokémon, metti altri due segnalini danno su tutti i Pokémon avvelenati non di tipo {D}, sia tuoi che del tuo avversario.",
		pt: "Durante o Checape Pokémon, coloque 2 contadores de dano a mais em cada Pokémon Envenenado que não seja de tipo {D} (seus e do seu oponente).",
		de: "Lege beim Pokémon-Check 2 Schadensmarken mehr auf jedes vergiftete Pokémon (deine und die deines Gegners), das kein {D}-Pokémon ist."
	},

	trainerType: "Stadium",
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "AYUMI ODASHIMA"
}

export default card