import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Pot Helmet",
		fr: "Casque Marmite",
		es: "Casco Olla",
		it: "Elmopentola",
		pt: "Capacete de Panela",
		de: "Topfhelm"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "If the Pokémon this card is attached to doesn't have a Rule Box, it takes 30 less damage from attacks from your opponent's Pokémon(after applying Weakness and Resistance). (Pokémon V, Pokémon-GX, etc. have Rule Boxes.)",
		fr: "Si le Pokémon auquel cette carte est attachée n'a pas d'encadré Règle, il subit 30 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance). (Les Pokémon-V, Pokémon-GX, etc. ont des encadrés Règle.)",
		es: "Si el Pokémon al que está unida esta carta no tiene un recuadro de regla, los ataques de los Pokémon de tu rival le hacen 30 puntos de daño menos (después de aplicar Debilidad y Resistencia). (Pokémon V, Pokémon-GX, etc. tienen recuadros de regla).",
		it: "Se il Pokémon a cui è assegnata questa carta non ha una regola speciale, subisce 30 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza. I Pokémon-V, i Pokémon-GX, ecc. hanno regole speciali.",
		pt: "Se o Pokémon ao qual esta carta está ligada não tiver uma Caixa de Regras, ele receberá 30 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência). (Pokémon V, Pokémon-GX, etc. têm Caixas de Regras.)",
		de: "Wenn das Pokémon, an das diese Karte angelegt ist, kein Regelfeld hat, werden jenem Pokémon durch Attacken von Pokémon deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).(Pokémon-V, Pokémon-GX, usw. haben Regelfelder.)"
	},

	trainerType: "Tool",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608692,
		tcgplayer: 263866
	}
}

export default card